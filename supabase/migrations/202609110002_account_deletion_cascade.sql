-- Ensure deleting an Auth user removes every directly owned business record.
begin;

do $$
declare
  foreign_key record;
  child_columns text;
  parent_columns text;
begin
  for foreign_key in
    select
      constraint_row.oid,
      constraint_row.conname,
      constraint_row.conrelid,
      constraint_row.confrelid
    from pg_constraint constraint_row
    join pg_class child_table
      on child_table.oid = constraint_row.conrelid
    join pg_namespace child_schema
      on child_schema.oid = child_table.relnamespace
    where constraint_row.contype = 'f'
      and constraint_row.confrelid = 'auth.users'::regclass
      and constraint_row.confdeltype <> 'c'
      and child_schema.nspname = 'public'
  loop
    select string_agg(format('%I', attribute.attname), ', ' order by key_column.ordinality)
    into child_columns
    from pg_constraint constraint_row
    cross join lateral unnest(constraint_row.conkey) with ordinality as key_column(attnum, ordinality)
    join pg_attribute attribute
      on attribute.attrelid = constraint_row.conrelid
     and attribute.attnum = key_column.attnum
    where constraint_row.oid = foreign_key.oid;

    select string_agg(format('%I', attribute.attname), ', ' order by key_column.ordinality)
    into parent_columns
    from pg_constraint constraint_row
    cross join lateral unnest(constraint_row.confkey) with ordinality as key_column(attnum, ordinality)
    join pg_attribute attribute
      on attribute.attrelid = constraint_row.confrelid
     and attribute.attnum = key_column.attnum
    where constraint_row.oid = foreign_key.oid;

    execute format(
      'alter table %s drop constraint %I',
      foreign_key.conrelid::regclass,
      foreign_key.conname
    );

    execute format(
      'alter table %s add constraint %I foreign key (%s) references %s (%s) on delete cascade',
      foreign_key.conrelid::regclass,
      foreign_key.conname,
      child_columns,
      foreign_key.confrelid::regclass,
      parent_columns
    );
  end loop;
end
$$;

commit;
