-- Secure Forever Alive delivery links. Raw bearer tokens are never stored.
begin;

create extension if not exists pgcrypto with schema extensions;

alter table public.messages
  add column if not exists delivery_token_hash text,
  add column if not exists delivery_available_at timestamptz,
  add column if not exists delivery_token_expires_at timestamptz,
  add column if not exists delivered_at timestamptz,
  add column if not exists revoked_at timestamptz,
  add column if not exists opened_at timestamptz,
  add column if not exists delivery_token_version integer not null default 1;

-- Preserve existing link lookup by hashing existing raw tokens. These links
-- remain unavailable until trusted delivery code sets delivered_at/status.
update public.messages
set delivery_token_hash = encode(
  extensions.digest(delivery_token, 'sha256'),
  'hex'
)
where delivery_token is not null
  and delivery_token_hash is null;

alter table public.messages
  alter column delivery_token drop default,
  alter column delivery_token drop not null;

update public.messages set delivery_token = null
where delivery_token is not null;

create unique index if not exists messages_delivery_token_hash_unique
  on public.messages (delivery_token_hash)
  where delivery_token_hash is not null;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'messages_delivery_token_hash_format'
      and conrelid = 'public.messages'::regclass
  ) then
    alter table public.messages
      add constraint messages_delivery_token_hash_format
      check (
        delivery_token_hash is null
        or delivery_token_hash ~ '^[a-f0-9]{64}$'
      );
  end if;

  if not exists (
    select 1 from pg_constraint
    where conname = 'messages_delivery_window_valid'
      and conrelid = 'public.messages'::regclass
  ) then
    alter table public.messages
      add constraint messages_delivery_window_valid
      check (
        delivery_token_expires_at is null
        or delivery_available_at is null
        or delivery_token_expires_at > delivery_available_at
      );
  end if;
end
$$;

-- Prevent a signed-in client from manufacturing a link or marking a letter as
-- delivered. Only trusted service-role code controls these fields.
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
    then
      raise exception 'Delivery state can only be changed by a trusted server'
        using errcode = '42501';
    end if;
  end if;

  return new;
end;
$$;

drop trigger if exists protect_message_delivery_fields on public.messages;
create trigger protect_message_delivery_fields
before insert or update on public.messages
for each row execute function public.protect_message_delivery_fields();

revoke all on function public.protect_message_delivery_fields() from public;

-- A trusted delivery worker calls this immediately before composing a link.
-- It receives the raw token once; PostgreSQL keeps only its SHA-256 hash.
create or replace function public.issue_message_delivery_token(
  p_message_id uuid,
  p_available_at timestamptz default now(),
  p_expires_at timestamptz default (now() + interval '90 days')
)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  raw_token text;
begin
  if p_available_at is null then
    raise exception 'Delivery availability time is required';
  end if;

  if p_expires_at is not null and p_expires_at <= p_available_at then
    raise exception 'Delivery token expiry must be after availability';
  end if;

  raw_token := encode(extensions.gen_random_bytes(32), 'hex');

  update public.messages
  set
    delivery_token = null,
    delivery_token_hash = encode(
      extensions.digest(raw_token, 'sha256'),
      'hex'
    ),
    delivery_available_at = p_available_at,
    delivery_token_expires_at = p_expires_at,
    delivered_at = null,
    revoked_at = null,
    opened_at = null,
    delivery_token_version = 1,
    updated_at = now()
  where id = p_message_id;

  if not found then
    raise exception 'Message not found';
  end if;

  return raw_token;
end;
$$;

alter function public.issue_message_delivery_token(uuid, timestamptz, timestamptz)
  owner to postgres;
revoke all on function public.issue_message_delivery_token(uuid, timestamptz, timestamptz)
  from public, anon, authenticated;
grant execute on function public.issue_message_delivery_token(uuid, timestamptz, timestamptz)
  to service_role;

commit;
