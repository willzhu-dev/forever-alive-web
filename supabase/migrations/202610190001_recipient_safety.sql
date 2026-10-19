-- Recipient reporting and sender-specific delivery suppression.
begin;

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.letter_abuse_reports (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references public.messages(id) on delete cascade,
  action text not null check (action in ('report', 'block')),
  reason text,
  details text,
  created_at timestamptz not null default now()
);

create index if not exists letter_abuse_reports_message_id_idx
  on public.letter_abuse_reports (message_id, created_at desc);

alter table public.letter_abuse_reports enable row level security;
revoke all on table public.letter_abuse_reports from public, anon, authenticated;
grant all on table public.letter_abuse_reports to service_role;

create table if not exists public.recipient_suppressions (
  id uuid primary key default gen_random_uuid(),
  sender_user_id uuid not null references auth.users(id) on delete cascade,
  recipient_hash text not null check (recipient_hash ~ '^[a-f0-9]{64}$'),
  source_message_id uuid references public.messages(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (sender_user_id, recipient_hash)
);

alter table public.recipient_suppressions enable row level security;
revoke all on table public.recipient_suppressions from public, anon, authenticated;
grant all on table public.recipient_suppressions to service_role;

alter table public.messages
  add column if not exists delivery_suppressed_at timestamptz;

create or replace function public.protect_message_delivery_fields()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if (select auth.role()) = 'authenticated' then
    if tg_op = 'INSERT' then
      new.status := 'active';
      new.delivery_token := null;
      new.delivery_token_hash := null;
      new.delivery_available_at := null;
      new.delivery_token_expires_at := null;
      new.delivered_at := null;
      new.revoked_at := null;
      new.opened_at := null;
      new.delivery_token_version := 1;
      new.delivery_attempt_count := 0;
      new.delivery_claimed_at := null;
      new.delivery_provider := null;
      new.delivery_provider_id := null;
      new.delivery_last_error := null;
      new.delivery_email_sent_at := null;
      new.delivery_suppressed_at := null;
    elsif
      new.status is distinct from old.status
      or new.delivery_token is distinct from old.delivery_token
      or new.delivery_token_hash is distinct from old.delivery_token_hash
      or new.delivery_available_at is distinct from old.delivery_available_at
      or new.delivery_token_expires_at is distinct from old.delivery_token_expires_at
      or new.delivered_at is distinct from old.delivered_at
      or new.revoked_at is distinct from old.revoked_at
      or new.opened_at is distinct from old.opened_at
      or new.delivery_token_version is distinct from old.delivery_token_version
      or new.delivery_attempt_count is distinct from old.delivery_attempt_count
      or new.delivery_claimed_at is distinct from old.delivery_claimed_at
      or new.delivery_provider is distinct from old.delivery_provider
      or new.delivery_provider_id is distinct from old.delivery_provider_id
      or new.delivery_last_error is distinct from old.delivery_last_error
      or new.delivery_email_sent_at is distinct from old.delivery_email_sent_at
      or new.delivery_suppressed_at is distinct from old.delivery_suppressed_at
    then
      raise exception 'Delivery state can only be changed by a trusted server'
        using errcode = '42501';
    end if;
  end if;

  return new;
end;
$$;

create or replace function public.prepare_email_delivery(
  p_message_id uuid,
  p_mode text,
  p_user_id uuid default null
)
returns table(raw_token text, attempt_number integer)
language plpgsql
security definer
set search_path = ''
as $$
declare
  generated_token text;
begin
  if p_mode not in ('immediately', 'scheduled') then
    raise exception 'Unsupported delivery mode';
  end if;

  generated_token := encode(extensions.gen_random_bytes(32), 'hex');

  return query
  update public.messages
  set
    delivery_token = null,
    delivery_token_hash = encode(extensions.digest(generated_token, 'sha256'), 'hex'),
    delivery_available_at = now(),
    delivery_token_expires_at = now() + interval '90 days',
    delivered_at = null,
    revoked_at = null,
    opened_at = null,
    delivery_token_version = delivery_token_version + 1,
    delivery_attempt_count = delivery_attempt_count + 1,
    delivery_claimed_at = now(),
    delivery_provider = 'resend',
    delivery_provider_id = null,
    delivery_last_error = null,
    delivery_email_sent_at = null,
    updated_at = now()
  where id = p_message_id
    and message_type = 'letter'
    and status = 'active'
    and delivered_at is null
    and delivery_suppressed_at is null
    and delivery_method = p_mode
    and (p_user_id is null or user_id = p_user_id)
    and (delivery_claimed_at is null or delivery_claimed_at < now() - interval '15 minutes')
    and (p_mode <> 'scheduled' or (scheduled_at is not null and scheduled_at <= now()))
  returning generated_token, delivery_attempt_count;
end;
$$;

alter function public.prepare_email_delivery(uuid, text, uuid) owner to postgres;
revoke all on function public.prepare_email_delivery(uuid, text, uuid)
  from public, anon, authenticated;
grant execute on function public.prepare_email_delivery(uuid, text, uuid)
  to service_role;

commit;
