# Forever Alive

Database SQL Architecture

Version

1.0

Status

FROZEN

---

# Purpose

This document defines how the Forever Alive database is physically implemented in PostgreSQL / Supabase.

It specifies:

- Table creation order
- Foreign key dependencies
- Index strategy
- Trigger strategy
- Row Level Security
- Storage architecture
- Naming conventions
- Migration strategy

This document should be completed before writing the SQL schema.

---

# Database Engine

Supabase PostgreSQL

Current Version

PostgreSQL 17+

---

# UUID Strategy

Every table uses

gen_random_uuid()

Example

id UUID PRIMARY KEY DEFAULT gen_random_uuid()

No table uses SERIAL or BIGINT auto increment.

---

# Timestamp Strategy

All timestamps use

TIMESTAMPTZ

Reason

Always store timezone-aware timestamps.

Application displays local timezone.

---

# Naming Convention

Tables

snake_case

Plural

Examples

users

messages

delivery_events

Columns

snake_case

Examples

display_name

created_at

updated_at

Foreign Keys

{table}_id

Examples

user_id

message_id

loved_one_id

Boolean

Use

is_

or

has_

Examples

is_active

is_primary

Avoid abbreviations.

---

# Table Creation Order

Tables must be created in the following order.

1.

users

↓

2.

loved_ones

↓

3.

messages

↓

4.

attachments

↓

5.

message_recipients

↓

6.

delivery_plans

↓

7.

safety_checks

↓

8.

delivery_events

↓

9.

notifications

↓

10.

emergency_contacts

Reason

Foreign Keys require parent tables to exist first.

---

# Foreign Key Dependency Graph

users

├── loved_ones

├── messages

├── safety_checks

├── notifications

└── emergency_contacts

messages

├── attachments

├── message_recipients

└── delivery_plans

loved_ones

├── message_recipients

└── delivery_events

delivery_plans

└── delivery_events

---

# Delete Rules

users

↓

CASCADE

Deletes:

Loved Ones

Messages

Safety Check

Notifications

Emergency Contacts

messages

↓

CASCADE

Deletes

Attachments

Recipient Links

Delivery Plan

delivery_plans

↓

RESTRICT

Never automatically delete

Delivery Events

Delivery history is immutable.

---

# Update Rules

Primary Keys

Never update

Foreign Keys

Cascade not required

Business layer manages relationships.

---

# Index Strategy

Every table

PRIMARY KEY

(id)

Every Foreign Key

INDEX

(user_id)

(message_id)

(loved_one_id)

Business Indexes

messages(status)

messages(created_at)

attachments(file_type)

delivery_events(processed_at)

notifications(is_read)

safety_checks(next_check_in_at)

---

# Trigger Strategy

Global Trigger

update_updated_at()

Automatically updates

updated_at

Applies to

users

loved_ones

messages

attachments

delivery_plans

safety_checks

notifications

emergency_contacts

Does NOT apply to

delivery_events

Reason

Audit log.

Never changes.

---

# Row Level Security

Enabled

For every table.

Policy

Authenticated users

↓

Can access only their own records.

System Service Role

↓

May bypass RLS

Used for

Scheduled Jobs

Delivery Worker

Reminder Worker

Notification Worker

---

# Storage Architecture

Supabase Storage Buckets

avatars

Stores user avatars.

message-attachments

Stores

Images

Voice

Video

Documents

thumbnails

Stores video thumbnails.

Future

exports

Temporary ZIP exports.

---

# Storage Path Convention

User Avatar

avatars/{user_id}/avatar.jpg

Message Attachment

message-attachments/{user_id}/{message_id}/{file_name}

Thumbnail

thumbnails/{message_id}/{file_name}

Never expose storage paths.

Always generate Signed URLs.

---

# Migration Strategy

Versioning

Every schema change

↓

New migration file

Never modify historical migrations.

Example

001_initial_schema.sql

002_rls.sql

003_storage.sql

004_indexes.sql

005_functions.sql

---

# Environment Separation

Development

Local Supabase

Staging

Cloud Project

Production

Separate Cloud Project

Never share production database.

---

# Backup Strategy

Production

Daily automatic backup

Retention

30 Days

Storage

Supabase Managed Backup

---

# Audit Strategy

delivery_events

Append Only

Never Update

Never Delete

Historical accuracy has highest priority.

---

# Security Principles

UUID for every Primary Key.

Never expose Storage directly.

Always use Signed URLs.

Enable RLS on every table.

Use Service Role only for backend jobs.

Never trust client-side permissions.

---

# Performance Goals

Primary lookup

<10 ms

Recipient lookup

<20 ms

Message list

<50 ms

Dashboard

<100 ms

Optimized using indexes.

---

# Future Expansion

Reserved for

Subscriptions

Organizations

Family Accounts

AI Voice Messages

AI Video Enhancement

Multi-language Delivery

Additional Delivery Channels

No breaking schema changes expected.

---

Status

FROZEN

Approved for SQL implementation.