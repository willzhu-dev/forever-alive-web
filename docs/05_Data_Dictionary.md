# Forever Alive

Data Dictionary

Version 1.0

---

# Table

users

---

# Description

Stores the user's profile information.

Authentication (email/password) is managed by Supabase Auth (`auth.users`).

This table only stores application-specific profile information.

One record exists for every authenticated user.

---

# Relationships

auth.users (1)

↓

public.users (1)

---

Messages

1 : N

Loved Ones

1 : N

Safety Check

1 : 1

Notifications

1 : N

Emergency Contacts

1 : N

---

# Primary Key

id

UUID

References

auth.users(id)

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | auth.users.id | Primary Key |
| display_name | text | No | NULL | User display name |
| avatar_url | text | Yes | NULL | Avatar image URL |
| timezone | text | No | 'UTC' | User timezone |
| language | text | No | 'en' | Preferred language |
| onboarding_completed | boolean | No | false | Whether onboarding has finished |
| email_verified | boolean | No | false | Cached verification status (optional) |
| last_active_at | timestamptz | Yes | NULL | Last activity timestamp |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

Type

UUID

Required

Yes

Example

550e8400-e29b-41d4-a716-446655440000

Notes

Matches Supabase Auth user ID.

Never changes.

---

## display_name

Maximum Length

100

Example

Will Zhu

Validation

Required

Trim whitespace

No HTML

---

## avatar_url

Maximum Length

500

Example

avatars/550e8400/profile.jpg

Notes

Stored in Supabase Storage.

---

## timezone

Example

Asia/Singapore

Asia/Shanghai

America/New_York

Validation

Must be a valid IANA timezone.

---

## language

Supported

en

zh-CN

zh-TW

ja

ko

Future languages may be added.

---

## onboarding_completed

Purpose

Controls first-time user experience.

false

↓

Show onboarding

true

↓

Skip onboarding

---

## email_verified

Purpose

Fast UI lookup.

Supabase Auth remains the source of truth.

---

## last_active_at

Updated when

Login

Check-in

Message created

Settings updated

---

## created_at

Generated automatically.

Never editable.

---

## updated_at

Automatically updated by trigger.

Never updated manually.

---

# Constraints

Primary Key

id

Foreign Key

id

↓

auth.users(id)

ON DELETE CASCADE

---

# Indexes

Primary Key Index

id

Additional Index

last_active_at

Purpose

Admin analytics

Inactive user queries

---

# Triggers

update_updated_at()

Automatically updates updated_at
before every UPDATE.

---

# Security

Row Level Security

Enabled

Policies

SELECT

Users can only read their own profile.

INSERT

Authenticated users can insert only their own profile.

UPDATE

Users can update only their own profile.

DELETE

Disabled

Profiles are deleted automatically
when Auth user is deleted.

---

# Business Rules

A user must always have exactly one profile.

Display name is required.

Timezone is required.

Language is required.

Avatar is optional.

Users cannot access other users' data.

---

# Example Record

id

550e8400-e29b-41d4-a716-446655440000

display_name

Will Zhu

avatar_url

avatars/550e8400/profile.jpg

timezone

Asia/Singapore

language

en

onboarding_completed

true

email_verified

true

last_active_at

2026-07-01T08:20:00Z

created_at

2026-06-30T12:00:00Z

updated_at

2026-07-01T08:20:00Z

---

# Notes

Do not duplicate authentication data.

Passwords are never stored here.

Email is managed by Supabase Auth.

This table is the single source of truth
for application profile information.



# Table

loved_ones

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores the people who may receive one or more messages from the user.

A Loved One represents a trusted person chosen by the user, such as a family member, partner, close friend, or anyone important to them.

This table does not store message content.

It only stores recipient information.

---

# Relationships

users

1

↓

Many

loved_ones

---

messages

Many

↓

Many

loved_ones

Bridge Table

message_recipients

---

delivery_events

Many

↓

One

loved_ones

---

# Primary Key

id

UUID

---

# Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| user_id | uuid | No | — | Owner of this Loved One |
| display_name | text | No | — | Name shown in the app |
| relationship | text | Yes | NULL | Relationship to the user |
| email | text | No | — | Delivery email |
| phone | text | Yes | NULL | Reserved for future delivery channels |
| avatar_url | text | Yes | NULL | Optional avatar |
| birthday | date | Yes | NULL | Optional birthday |
| notes | text | Yes | NULL | Private notes |
| is_primary | boolean | No | false | Primary recipient |
| is_active | boolean | No | true | Whether recipient is active |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

Type

UUID

Generated automatically.

Never changes.

---

## user_id

References

users.id

Every Loved One belongs to exactly one user.

---

## display_name

Maximum Length

100

Examples

Mom

Dad

Emily

Grandma

Best Friend

Validation

Required

Trim whitespace

No HTML

---

## relationship

Examples

Mother

Father

Partner

Wife

Husband

Son

Daughter

Brother

Sister

Friend

Colleague

Other

Future

Dropdown in App.

---

## email

Required

Yes

Purpose

Primary delivery channel.

Validation

RFC compliant email.

Unique per user is NOT required.

(The same email may belong to multiple users.)

---

## phone

Optional.

Reserved for future

SMS

WhatsApp

LINE

WeChat

Signal

---

## avatar_url

Optional.

Stored in Supabase Storage.

---

## birthday

Optional.

Used only for future reminder features.

Not used in MVP.

---

## notes

Private.

Visible only to the account owner.

Never delivered.

Maximum

1000 characters.

---

## is_primary

Purpose

Mark favorite / default Loved One.

Used for sorting only.

Does NOT affect delivery logic.

---

## is_active

Purpose

Soft disable.

If false

Recipient cannot receive future deliveries.

Historical records remain unchanged.

---

## created_at

Automatically generated.

---

## updated_at

Automatically maintained by trigger.

---

# Constraints

Primary Key

id

Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Indexes

PRIMARY KEY

(id)

INDEX

(user_id)

INDEX

(email)

INDEX

(is_active)

---

# Triggers

update_updated_at()

Automatically updates updated_at.

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can read only their own Loved Ones.

INSERT

Users can create Loved Ones only for themselves.

UPDATE

Users can update only their own Loved Ones.

DELETE

Users can delete only their own Loved Ones.

---

# Business Rules

A Loved One always belongs to one user.

A user may create unlimited Loved Ones.

One Loved One may receive multiple Messages.

Deleting a Loved One never deletes historical Delivery Events.

Delivery history must remain immutable.

---

# Example Record

id

8d1f5f1f-8d73-4c6f-b2d7-16efcbf5d111

user_id

550e8400-e29b-41d4-a716-446655440000

display_name

Mom ❤️

relationship

Mother

email

mom@example.com

phone

NULL

avatar_url

avatars/mom.jpg

birthday

1965-03-18

notes

Loves handwritten letters.

is_primary

true

is_active

true

created_at

2026-06-30T12:00:00Z

updated_at

2026-06-30T12:00:00Z

---

# Notes

Loved Ones are independent from Messages.

A Loved One can receive many Messages.

A Message can be sent to many Loved Ones.

The many-to-many relationship is managed by the message_recipients table.

This design supports future multi-channel delivery without changing the database schema.


# Table

messages

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores every message created by a user.

A message represents something the user wishes to leave behind for one or more Loved Ones.

A message may contain text only, or include media attachments.

Recipients are managed separately through the message_recipients table.

---

# Relationships

users

1

↓

Many

messages

---

messages

1

↓

Many

attachments

---

messages

Many

↓

Many

loved_ones

Bridge Table

message_recipients

---

messages

1

↓

1

delivery_plans

---

delivery_events

Many

↓

One

messages

---

# Primary Key

id

UUID

---

# Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| user_id | uuid | No | — | Owner of the message |
| title | text | No | — | Internal title |
| message_type | text | No | 'text' | Primary message type |
| body | text | Yes | NULL | Text content |
| status | text | No | 'draft' | Current status |
| summary | text | Yes | NULL | Optional preview text |
| last_edited_at | timestamptz | Yes | NULL | Last edit timestamp |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

UUID

Primary Key.

Never changes.

---

## user_id

References

users.id

One user owns many messages.

---

## title

Maximum Length

150

Purpose

Helps users organize messages.

Examples

For Mom

For My Daughter

Wedding Anniversary

Just In Case

---

## message_type

Supported Values

text

voice

video

mixed

Notes

mixed = text + media.

Future types may be added without schema changes.

---

## body

Stores plain text message.

If the message contains only media,

body may be NULL.

Maximum Length

No practical limit (PostgreSQL TEXT).

---

## status

Supported Values

draft

active

archived

Rules

draft

↓

Not eligible for delivery.

active

↓

Can be delivered.

archived

↓

Hidden from normal view.

Never delivered.

---

## summary

Purpose

Quick preview shown in message list.

If empty,

generated automatically by application.

Maximum Length

200

---

## last_edited_at

Updated whenever message content changes.

Useful for sorting.

---

## created_at

Automatically generated.

---

## updated_at

Automatically maintained by trigger.

---

# Constraints

Primary Key

id

Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Indexes

PRIMARY KEY

(id)

INDEX

(user_id)

INDEX

(status)

INDEX

(message_type)

INDEX

(created_at)

---

# Triggers

update_updated_at()

Automatically updates updated_at.

Application updates last_edited_at.

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can access only their own messages.

INSERT

Users can create only their own messages.

UPDATE

Users can modify only their own messages.

DELETE

Users can delete only their own messages.

---

# Business Rules

A Message belongs to exactly one User.

A Message may have zero or more Attachments.

A Message may be linked to one or many Loved Ones.

A Message must have a Delivery Plan before activation.

Only ACTIVE messages are eligible for delivery.

Delivery history never changes after sending.

---

# Example Record

id

92e5f39d-0bb7-47c4-a3d3-b0cb4d44d001

user_id

550e8400-e29b-41d4-a716-446655440000

title

For My Family

message_type

mixed

body

Thank you for everything...

status

active

summary

Thank you for everything...

last_edited_at

2026-07-01T09:00:00Z

created_at

2026-06-30T12:00:00Z

updated_at

2026-07-01T09:00:00Z

---

# Notes

A Message never stores recipient information.

Recipients are managed through message_recipients.

Attachments are stored separately.

Delivery settings are stored separately.

This keeps the message entity focused on content only.

attachments



# Table

message_recipients

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Associates Messages with Loved Ones.

This is a bridge table that enables a many-to-many relationship.

One Message may be delivered to multiple Loved Ones.

One Loved One may receive multiple Messages.

This table stores only the relationship.

Message content and recipient information are stored separately.

---

# Relationships

messages

Many

↓

Many

loved_ones

Bridge Table

message_recipients

---

# Primary Key

id

UUID

---

# Foreign Keys

message_id

↓

messages.id

ON DELETE CASCADE

---

loved_one_id

↓

loved_ones.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| message_id | uuid | No | — | Related Message |
| loved_one_id | uuid | No | — | Related Loved One |
| created_at | timestamptz | No | now() | Relationship created |

---

# Column Details

## id

UUID

Primary Key.

Automatically generated.

---

## message_id

References

messages.id

Every relationship belongs to one Message.

---

## loved_one_id

References

loved_ones.id

Every relationship belongs to one Loved One.

---

## created_at

Automatically generated.

Records when the Loved One was linked to the Message.

---

# Constraints

Primary Key

id

Foreign Keys

message_id

↓

messages.id

ON DELETE CASCADE

---

loved_one_id

↓

loved_ones.id

ON DELETE CASCADE

---

Unique Constraint

(message_id, loved_one_id)

Purpose

Prevent duplicate recipients for the same message.

---

# Indexes

PRIMARY KEY

(id)

INDEX

(message_id)

INDEX

(loved_one_id)

UNIQUE INDEX

(message_id, loved_one_id)

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can access relationships only for Messages they own.

INSERT

Users can create relationships only for their own Messages.

UPDATE

Not Allowed

Relationships should be deleted and recreated instead.

DELETE

Users can remove relationships only from their own Messages.

---

# Business Rules

A Message may have one or many Loved Ones.

A Loved One may receive one or many Messages.

The same Loved One cannot be added twice to the same Message.

Deleting a Message automatically removes all related relationships.

Deleting a Loved One automatically removes all related relationships.

This table contains no business content.

It exists only to define relationships.

---

# Example Records

| Message | Loved One |
|----------|-----------|
| For My Family | Mom ❤️ |
| For My Family | Dad |
| For My Family | Sister |

Database Records

id

8c51c5a2-9f47-4d54-8cf5-a1d8e7f8d001

message_id

92e5f39d-0bb7-47c4-a3d3-b0cb4d44d001

loved_one_id

8d1f5f1f-8d73-4c6f-b2d7-16efcbf5d111

created_at

2026-07-01T09:30:00Z

---

# Notes

This table intentionally stores only relationships.

No delivery status is stored here.

No recipient email is duplicated here.

No message content is duplicated here.

Keeping the bridge table minimal improves performance, simplifies maintenance, and supports future expansion without schema changes.



# Table

delivery_plans

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Defines when a Message becomes eligible for delivery.

Each Message has exactly one Delivery Plan.

The Delivery Plan stores only delivery rules.

Actual delivery execution is recorded in the delivery_events table.

---

# Relationships

messages

1

↓

1

delivery_plans

---

delivery_plans

1

↓

Many

delivery_events

---

# Primary Key

id

UUID

---

# Foreign Key

message_id

↓

messages.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| message_id | uuid | No | — | Related Message |
| trigger_type | text | No | 'safety_check' | Delivery trigger |
| status | text | No | 'pending' | Delivery plan status |
| activated_at | timestamptz | Yes | NULL | Time the plan became active |
| triggered_at | timestamptz | Yes | NULL | Time delivery was triggered |
| delivered_at | timestamptz | Yes | NULL | Time delivery completed |
| cancelled_at | timestamptz | Yes | NULL | Time delivery was cancelled |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

UUID

Primary Key.

---

## message_id

References

messages.id

Unique.

Every Message has exactly one Delivery Plan.

---

## trigger_type

Supported Values

safety_check

Future

manual

scheduled

legal_confirmation

Purpose

Defines how delivery is initiated.

---

## status

Supported Values

pending

armed

triggered

delivered

cancelled

Meaning

pending

↓

Message still being prepared.

armed

↓

Ready for future delivery.

triggered

↓

Delivery process has started.

delivered

↓

Successfully delivered.

cancelled

↓

Never deliver.

---

## activated_at

The moment the plan became eligible.

Usually when the Message is activated.

---

## triggered_at

The moment the delivery workflow started.

---

## delivered_at

The moment all deliveries completed successfully.

---

## cancelled_at

Recorded if the user cancels delivery before it is triggered.

---

## created_at

Automatically generated.

---

## updated_at

Automatically maintained by trigger.

---

# Constraints

Primary Key

id

Foreign Key

message_id

↓

messages.id

ON DELETE CASCADE

Unique Constraint

(message_id)

Ensures one Delivery Plan per Message.

---

# Indexes

PRIMARY KEY

(id)

UNIQUE INDEX

(message_id)

INDEX

(status)

INDEX

(trigger_type)

---

# Triggers

update_updated_at()

Automatically updates updated_at.

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can access Delivery Plans only for their own Messages.

INSERT

Users can create Delivery Plans only for their own Messages.

UPDATE

Users can update Delivery Plans only before they are triggered.

DELETE

Users can delete Delivery Plans only while the related Message is in draft status.

---

# Business Rules

Each Message must have exactly one Delivery Plan.

Only Messages with status = active may have Delivery Plans in armed status.

Once status becomes triggered, the plan can no longer be edited.

Once status becomes delivered, the plan becomes immutable.

Delivery history is stored separately.

---

# Example Record

id

3f8d64b7-4b89-4f95-a1f6-9dfc6a6b7f80

message_id

92e5f39d-0bb7-47c4-a3d3-b0cb4d44d001

trigger_type

safety_check

status

armed

activated_at

2026-07-01T10:00:00Z

triggered_at

NULL

delivered_at

NULL

cancelled_at

NULL

created_at

2026-07-01T10:00:00Z

updated_at

2026-07-01T10:00:00Z

---

# Notes

A Delivery Plan defines eligibility for delivery.

It does not send messages.

Delivery execution and results are recorded in the delivery_events table.

This separation keeps business rules independent from operational logs.


# Table

safety_checks

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores the user's periodic safety check configuration and current status.

Each User has exactly one Safety Check configuration.

The system uses this table to determine when to remind the user, when to begin the confirmation process, and whether message delivery should be considered.

This table stores configuration and current state only.

Reminder history and delivery history are stored separately.

---

# Relationships

users

1

↓

1

safety_checks

---

# Primary Key

id

UUID

---

# Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| user_id | uuid | No | — | Related User |
| check_in_interval_days | integer | No | 30 | Required check-in interval |
| last_check_in_at | timestamptz | No | now() | Last successful check-in |
| next_check_in_at | timestamptz | No | — | Next scheduled check-in |
| reminder_count | integer | No | 0 | Number of reminders sent for the current cycle |
| status | text | No | 'active' | Current safety check status |
| confirmation_started_at | timestamptz | Yes | NULL | Confirmation workflow start time |
| confirmed_at | timestamptz | Yes | NULL | User confirmed they are safe |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

UUID

Primary Key.

---

## user_id

References

users.id

Unique.

Each User has one Safety Check record.

---

## check_in_interval_days

Default

30

Minimum

7

Maximum

365

Purpose

Defines how often the user should confirm they are active.

---

## last_check_in_at

Updated whenever the user successfully completes a safety check.

---

## next_check_in_at

Calculated as:

last_check_in_at + check_in_interval_days

The application or scheduled job updates this field after each successful check-in.

---

## reminder_count

Counts reminders sent during the current check-in cycle.

Reset to 0 after a successful check-in.

---

## status

Supported Values

active

reminder_sent

confirmation_in_progress

resolved

Meaning

active

↓

User is within the check-in period.

reminder_sent

↓

One or more reminders have been sent.

confirmation_in_progress

↓

The confirmation workflow has started.

resolved

↓

The user checked in successfully and the cycle restarted.

---

## confirmation_started_at

Recorded when the confirmation workflow begins.

---

## confirmed_at

Recorded when the user successfully checks in after reminders or confirmation.

---

## created_at

Automatically generated.

---

## updated_at

Automatically maintained by trigger.

---

# Constraints

Primary Key

id

Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

Unique Constraint

(user_id)

Ensures one Safety Check per User.

---

# Indexes

PRIMARY KEY

(id)

UNIQUE INDEX

(user_id)

INDEX

(next_check_in_at)

INDEX

(status)

---

# Triggers

update_updated_at()

Automatically updates updated_at.

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can access only their own Safety Check.

INSERT

Automatically created when a new user profile is initialized.

UPDATE

Users may update their preferred interval.

System processes may update status and timestamps.

DELETE

Not Allowed.

---

# Business Rules

Each User has exactly one Safety Check configuration.

The default interval is 30 days.

Missing a check-in does not immediately trigger message delivery.

The system first enters a confirmation workflow.

Only after the confirmation workflow determines that delivery conditions have been met will Delivery Plans become eligible for execution.

Reminder history should not be stored in this table.

---

# Example Record

id

2e7df8b1-3b1f-4fd2-90e4-fc0c8baf4c91

user_id

550e8400-e29b-41d4-a716-446655440000

check_in_interval_days

30

last_check_in_at

2026-07-01T10:00:00Z

next_check_in_at

2026-07-31T10:00:00Z

reminder_count

0

status

active

confirmation_started_at

NULL

confirmed_at

2026-07-01T10:00:00Z

created_at

2026-06-30T12:00:00Z

updated_at

2026-07-01T10:00:00Z

---

# Notes

This table does not determine whether a user has died.

It only tracks communication status and the safety check workflow.

Message delivery decisions are handled by the delivery workflow based on the configured business rules.


# Table

delivery_events

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores the immutable history of every delivery attempt.

A Delivery Event represents one attempt to deliver one Message to one Loved One through one delivery channel.

This table serves as the system audit log.

Records are append-only and must never be updated or deleted.

---

# Relationships

delivery_plans

1

↓

Many

delivery_events

---

messages

1

↓

Many

delivery_events

---

loved_ones

1

↓

Many

delivery_events

---

# Primary Key

id

UUID

---

# Foreign Keys

delivery_plan_id

↓

delivery_plans.id

ON DELETE RESTRICT

---

message_id

↓

messages.id

ON DELETE RESTRICT

---

loved_one_id

↓

loved_ones.id

ON DELETE RESTRICT

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| delivery_plan_id | uuid | No | — | Related Delivery Plan |
| message_id | uuid | No | — | Delivered Message |
| loved_one_id | uuid | No | — | Recipient |
| delivery_channel | text | No | 'email' | Delivery method |
| event_type | text | No | — | Event type |
| status | text | No | — | Result status |
| error_code | text | Yes | NULL | Error code if failed |
| error_message | text | Yes | NULL | Human-readable failure reason |
| processed_at | timestamptz | No | now() | Processing time |
| created_at | timestamptz | No | now() | Event creation time |

---

# Column Details

## delivery_channel

Supported Values

email

Future

sms

whatsapp

line

wechat

signal

---

## event_type

Supported Values

delivery_started

delivery_sent

delivery_failed

delivery_opened

delivery_bounced

delivery_cancelled

Purpose

Describes what happened.

---

## status

Supported Values

success

failed

pending

---

## error_code

Examples

SMTP_TIMEOUT

INVALID_EMAIL

STORAGE_ERROR

NETWORK_ERROR

---

## error_message

Readable description for debugging.

Never shown directly to end users.

---

## processed_at

Timestamp when the event occurred.

---

# Constraints

Primary Key

id

Foreign Keys

delivery_plan_id

↓

delivery_plans.id

message_id

↓

messages.id

loved_one_id

↓

loved_ones.id

---

# Indexes

PRIMARY KEY

(id)

INDEX

(delivery_plan_id)

INDEX

(message_id)

INDEX

(loved_one_id)

INDEX

(status)

INDEX

(processed_at)

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users can view delivery events for their own Messages.

INSERT

System service only.

UPDATE

Not Allowed.

DELETE

Not Allowed.

---

# Business Rules

Delivery Events are immutable.

Events must never be edited.

Events must never be deleted.

Every delivery attempt creates a new record.

Historical accuracy is more important than storage size.

---

# Example Record

id

a83d2db2-4db9-42e3-97e2-53d48d63b531

delivery_plan_id

3f8d64b7-4b89-4f95-a1f6-9dfc6a6b7f80

message_id

92e5f39d-0bb7-47c4-a3d3-b0cb4d44d001

loved_one_id

8d1f5f1f-8d73-4c6f-b2d7-16efcbf5d111

delivery_channel

email

event_type

delivery_sent

status

success

error_code

NULL

error_message

NULL

processed_at

2026-08-01T08:15:22Z

created_at

2026-08-01T08:15:22Z

---

# Notes

This table is append-only.

It functions as the permanent audit log for all delivery activities.

No record should ever be modified after creation.


# Table

notifications

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores notifications sent to users within the Forever Alive platform.

Notifications provide reminders, confirmations, and important account updates.

This table is not used for message delivery to Loved Ones.

---

# Relationships

users

1

↓

Many

notifications

---

# Primary Key

id

UUID

---

# Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| user_id | uuid | No | — | Notification owner |
| notification_type | text | No | — | Notification category |
| title | text | No | — | Notification title |
| body | text | No | — | Notification content |
| is_read | boolean | No | false | Read status |
| read_at | timestamptz | Yes | NULL | Read timestamp |
| created_at | timestamptz | No | now() | Creation timestamp |

---

# Column Details

## notification_type

Supported Values

check_in

message

system

security

Examples

check_in

↓

Time to check in.

message

↓

Your message has been saved.

system

↓

Maintenance notice.

security

↓

Password changed.

Future types may be added.

---

## title

Maximum Length

120

Examples

Time to Check In

Message Saved

Security Update

---

## body

Maximum Length

1000

Contains the notification content displayed in the app.

---

## is_read

false

↓

Unread

true

↓

Read

---

## read_at

Automatically recorded when the user opens the notification.

NULL until first read.

---

# Constraints

Primary Key

id

Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Indexes

PRIMARY KEY

(id)

INDEX

(user_id)

INDEX

(is_read)

INDEX

(created_at)

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users may view only their own notifications.

INSERT

System service only.

UPDATE

Users may update only the read status of their own notifications.

DELETE

Users may delete only their own notifications.

---

# Business Rules

Notifications belong to exactly one User.

Notifications are informational only.

Deleting a notification does not affect any business process.

Notifications are never delivered to Loved Ones.

---

# Example Record

id

d9b4f2f5-8b7b-4c5d-bfd0-1b13d5b39d44

user_id

550e8400-e29b-41d4-a716-446655440000

notification_type

check_in

title

Time to Check In

body

It's time to confirm you're doing well.

is_read

false

read_at

NULL

created_at

2026-07-01T09:00:00Z

---

# Notes

Notifications are user-facing messages inside the app.

They are separate from delivery events and should not be used to track message delivery.


# Table

emergency_contacts

Status

DRAFT (Pending Freeze)

Version

1.0

---

# Description

Stores trusted contacts who may participate in the user confirmation process.

Emergency Contacts are **not** recipients of legacy messages by default.

Their purpose is to help verify the user's status if the system cannot reach the user after the configured safety check period.

---

# Relationships

users

1

↓

Many

emergency_contacts

---

# Primary Key

id

UUID

---

# Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Columns

| Field | Type | Nullable | Default | Description |
|--------|------|----------|----------|-------------|
| id | uuid | No | gen_random_uuid() | Primary Key |
| user_id | uuid | No | — | Owner of the emergency contact |
| display_name | text | No | — | Contact name shown in the app |
| relationship | text | Yes | NULL | Relationship to the user |
| email | text | No | — | Contact email |
| confirmation_priority | integer | No | 1 | Contact priority order |
| is_active | boolean | No | true | Whether this contact is active |
| last_contacted_at | timestamptz | Yes | NULL | Last confirmation request sent |
| created_at | timestamptz | No | now() | Creation timestamp |
| updated_at | timestamptz | No | now() | Last update timestamp |

---

# Column Details

## id

UUID

Primary Key.

Automatically generated.

---

## user_id

References

users.id

Every Emergency Contact belongs to one User.

---

## display_name

Maximum Length

100

Examples

Emily

Brother

Family Doctor

Lawyer

---

## relationship

Examples

Spouse

Brother

Friend

Doctor

Lawyer

Executor

Other

---

## email

Required.

Primary communication channel.

Must be a valid email address.

---

## confirmation_priority

Default

1

Purpose

Determines the order in which contacts are approached during the confirmation workflow.

Lower values indicate higher priority.

Example

1 → Spouse

2 → Brother

3 → Lawyer

---

## is_active

If false

The contact is skipped during future confirmation workflows.

Historical records remain unchanged.

---

## last_contacted_at

Updated whenever the system sends a confirmation request to this contact.

---

## created_at

Automatically generated.

---

## updated_at

Automatically maintained by trigger.

---

# Constraints

Primary Key

id

Foreign Key

user_id

↓

users.id

ON DELETE CASCADE

---

# Indexes

PRIMARY KEY

(id)

INDEX

(user_id)

INDEX

(confirmation_priority)

INDEX

(is_active)

---

# Triggers

update_updated_at()

Automatically updates updated_at.

---

# Row Level Security

Enabled

---

# Policies

SELECT

Users may access only their own Emergency Contacts.

INSERT

Users may create Emergency Contacts only for themselves.

UPDATE

Users may modify only their own Emergency Contacts.

DELETE

Users may remove only their own Emergency Contacts.

---

# Business Rules

An Emergency Contact participates only in the confirmation workflow.

Emergency Contacts do not automatically receive legacy messages.

A User may define multiple Emergency Contacts.

The system processes contacts according to confirmation_priority.

Inactive contacts are ignored during future confirmation workflows.

---

# Example Record

id

f3b0d94d-4c94-4e0d-9e5a-1a55b1c24d71

user_id

550e8400-e29b-41d4-a716-446655440000

display_name

Sarah

relationship

Spouse

email

sarah@example.com

confirmation_priority

1

is_active

true

last_contacted_at

NULL

created_at

2026-07-01T11:00:00Z

updated_at

2026-07-01T11:00:00Z

---

# Notes

Emergency Contacts are used exclusively for the confirmation workflow.

They are intentionally separated from Loved Ones to keep recipient management independent from confirmation logic.

A person may exist in both tables if the user chooses.
