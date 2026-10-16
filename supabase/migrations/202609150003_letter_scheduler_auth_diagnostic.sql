-- Expose only the stage responsible for a scheduler authentication failure.
-- The raw HTTP response, API key, and message data remain private.
begin;

create or replace function public.get_letter_scheduler_auth_stage()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select case
    when response.status_code is distinct from 401 then 'not_unauthorized'
    when response.content ilike '%invalid jwt%'
      or response.content ilike '%missing authorization%'
      or response.content ilike '%jwt%expired%'
      then 'gateway'
    when response.content ilike '%unauthorized%'
      then 'function'
    else 'unknown'
  end
  from public.letter_scheduler_runs as run
  left join net._http_response as response
    on response.id = run.request_id
  order by run.requested_at desc
  limit 1;
$$;

alter function public.get_letter_scheduler_auth_stage() owner to postgres;
revoke all on function public.get_letter_scheduler_auth_stage() from public;
grant execute on function public.get_letter_scheduler_auth_stage()
  to anon, authenticated;

commit;
