-- Add durable, non-sensitive scheduler observability. Request and response
-- bodies, recipient data, message IDs, and credentials are never exposed.
begin;

create table if not exists public.letter_scheduler_runs (
  request_id bigint primary key,
  requested_at timestamptz not null default now()
);

alter table public.letter_scheduler_runs enable row level security;
revoke all on table public.letter_scheduler_runs from public, anon, authenticated;

create or replace function public.invoke_scheduled_letter_worker()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  request_identifier bigint;
begin
  select net.http_post(
    url := 'https://cpistifrzgzijryslmto.supabase.co/functions/v1/send-letter',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', (
        select decrypted_secret
        from vault.decrypted_secrets
        where name = 'forever_alive_scheduler_service_role_key'
      ),
      'Authorization', 'Bearer ' || (
        select decrypted_secret
        from vault.decrypted_secrets
        where name = 'forever_alive_scheduler_service_role_key'
      )
    ),
    body := '{"mode":"scheduled"}'::jsonb,
    timeout_milliseconds := 10000
  ) into request_identifier;

  insert into public.letter_scheduler_runs(request_id)
  values (request_identifier)
  on conflict (request_id) do nothing;

  delete from public.letter_scheduler_runs
  where requested_at < now() - interval '7 days';
end;
$$;

alter function public.invoke_scheduled_letter_worker() owner to postgres;
revoke all on function public.invoke_scheduled_letter_worker() from public;

create or replace function public.get_letter_scheduler_health()
returns table(
  requested_at timestamptz,
  status_code integer,
  timed_out boolean,
  has_network_error boolean,
  due_letter_count bigint
)
language sql
stable
security definer
set search_path = ''
as $$
  select
    run.requested_at,
    response.status_code,
    coalesce(response.timed_out, false),
    response.error_msg is not null,
    (
      select count(*)
      from public.messages
      where message_type = 'letter'
        and delivery_method = 'scheduled'
        and status = 'active'
        and delivered_at is null
        and scheduled_at <= now()
    )
  from public.letter_scheduler_runs as run
  left join net._http_response as response
    on response.id = run.request_id
  order by run.requested_at desc
  limit 1;
$$;

alter function public.get_letter_scheduler_health() owner to postgres;
revoke all on function public.get_letter_scheduler_health() from public;
grant execute on function public.get_letter_scheduler_health() to anon, authenticated;

do $$
begin
  if exists (
    select 1 from cron.job
    where jobname = 'forever-alive-send-scheduled-letters'
  ) then
    perform cron.unschedule('forever-alive-send-scheduled-letters');
  end if;
end;
$$;

select cron.schedule(
  'forever-alive-send-scheduled-letters',
  '* * * * *',
  'select public.invoke_scheduled_letter_worker();'
);

commit;
