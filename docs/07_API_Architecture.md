# Forever Alive

API Architecture

Version

1.0

Status

FROZEN

---

# Purpose

This document defines the API architecture for Forever Alive.

The project follows a Backend-as-a-Service (BaaS) architecture using Supabase.

The frontend communicates directly with Supabase whenever possible.

Custom backend services are implemented only when business logic cannot safely run on the client.

---

# Architecture Overview

                Web App
                   │
            iOS / Android
                   │
                   ▼
              Supabase SDK
                   │
    ┌──────────────┼──────────────┐
    │              │              │
    ▼              ▼              ▼
  Auth         Database        Storage
    │              │              │
    └──────────────┼──────────────┘
                   │
                   ▼
            Edge Functions
                   │
        Scheduled Jobs / Email
                   │
                   ▼
          Third-party Services

---

# API Principles

Use Supabase SDK directly whenever possible.

Avoid unnecessary REST APIs.

Keep business logic inside Edge Functions.

Never expose Service Role Keys to clients.

All database access must respect Row Level Security (RLS).

---

# Authentication

Provider

Supabase Auth

Supported Methods

Email + Password

Future

Google

Apple

Passkeys

Magic Link

JWT is automatically managed by Supabase.

---

# Client Responsibilities

The client may:

- Sign up
- Sign in
- Manage profile
- Create messages
- Upload attachments
- Manage Loved Ones
- Manage Emergency Contacts
- Read notifications

All operations are protected by RLS.

---

# Edge Function Responsibilities

Edge Functions handle operations that require trusted server-side execution.

Examples

- Safety Check scheduler
- Reminder emails
- Confirmation workflow
- Delivery execution
- Signed URL generation
- AI processing (future)
- Audit logging
- Background cleanup

Clients never execute these operations directly.

---

# API Modules

Authentication

- Login
- Logout
- Password Reset

User

- Profile
- Avatar

Loved Ones

- CRUD

Messages

- CRUD

Attachments

- Upload
- Delete
- Signed URL

Delivery

- Trigger
- Execute
- Retry

Safety Check

- Check-in
- Reminder
- Confirmation

Notifications

- List
- Mark Read

Emergency Contacts

- CRUD

---

# Scheduled Jobs

Supabase Cron

Daily

- Check inactive users

Daily

- Send reminders

Hourly

- Retry failed deliveries

Hourly

- Clean expired signed URLs

Future

Weekly reports

---

# Email Service

Provider

Resend

Future Alternatives

AWS SES

SendGrid

Mailgun

Emails are sent only by Edge Functions.

Never directly from clients.

---

# File Upload Flow

Client

↓

Supabase Storage

↓

Metadata saved

↓

attachments table

Video processing

↓

Future Edge Function

↓

Thumbnail Generation

---

# Delivery Flow

Safety Check

↓

Reminder

↓

Confirmation Workflow

↓

Delivery Plan Triggered

↓

Generate Signed URL

↓

Send Email

↓

Record delivery_event

---

# Error Handling

Client Errors

Displayed immediately.

Server Errors

Logged.

Recorded in delivery_events when applicable.

Unexpected Errors

Captured by Edge Functions.

---

# Rate Limiting

Authentication

Supabase default limits.

Edge Functions

Per-user limits.

Storage Upload

Maximum size configured per bucket.

Future

IP rate limiting.

---

# Versioning

Internal API

Version 1

Future changes

Edge Functions

Remain backward compatible whenever possible.

---

# Security

All database operations

↓

Row Level Security

All uploads

↓

Authenticated users only

All privileged operations

↓

Edge Functions

No client has Service Role access.

---

# Future Expansion

AI Voice Cloning

AI Video Enhancement

Multiple Delivery Channels

Webhook Integrations

Family Accounts

Organizations

Public API

---

Status

FROZEN