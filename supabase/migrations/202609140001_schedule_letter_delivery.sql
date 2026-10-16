-- Invoke the protected scheduled-letter worker every minute. The service-role
-- credential is copied into encrypted Vault storage inside the database and is
-- never embedded in this migration or exposed to the client application.
begin;

create extension if not exists pg_cron with schema pg_catalog;
create extension if not exists pg_net with schema extensions;

do $$
declare
  service_role_key text;
begin
  if not exists (
    select 1
    from vault.secrets
    where name = 'forever_alive_scheduler_service_role_key'
  ) then
    service_role_key := current_setting(
      'app.settings.service_role_key',
      true
    );

    if nullif(service_role_key, '') is null then
      raise exception
        'Supabase service-role setting is unavailable; add it to Vault before scheduling';
    end if;

    perform vault.create_secret(
      service_role_key,
      'forever_alive_scheduler_service_role_key',
      'Service-role credential used only by the scheduled letter worker'
    );
  end if;
end;
$$;

do $$
begin
  if exists (
    select 1
    from cron.job
    where jobname = 'forever-alive-send-scheduled-letters'
  ) then
    perform cron.unschedule('forever-alive-send-scheduled-letters');
  end if;
end;
$$;

select cron.schedule(
  'forever-alive-send-scheduled-letters',
  '* * * * *',
  $cron$
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
    ) as request_id;
  $cron$
);

commit;
