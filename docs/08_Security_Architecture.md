# Forever Alive

Security Architecture

Version

1.0

Status

FROZEN

---

# Purpose

This document defines the security architecture for Forever Alive.

The primary objective is to protect users' private legacy messages, media, and account data throughout their lifecycle.

Security is considered a core product feature rather than an implementation detail.

---

# Security Principles

The platform follows five fundamental principles:

1. Least Privilege
2. Zero Trust
3. Defense in Depth
4. Privacy by Default
5. Auditability

Every component must follow these principles.

---

# Authentication

Provider

Supabase Auth

Current Methods

- Email + Password

Future Methods

- Apple Sign In
- Google Sign In
- Passkeys

Passwords are never stored by Forever Alive.

Authentication is delegated entirely to Supabase Auth.

---

# Authorization

Authorization is enforced through PostgreSQL Row Level Security (RLS).

Every table has RLS enabled.

Users can only access records that belong to their own account.

No client-side permission checks are considered authoritative.

---

# Row Level Security

Enabled On

- users
- loved_ones
- messages
- attachments
- message_recipients
- delivery_plans
- safety_checks
- delivery_events
- notifications
- emergency_contacts

Policies

SELECT

Only owner.

INSERT

Only owner.

UPDATE

Only owner.

DELETE

Only owner unless restricted by business rules.

System jobs execute using the Service Role.

---

# Service Role

The Service Role Key must never be exposed to:

- Browser
- Mobile Apps
- Client-side JavaScript

It is used only by trusted backend environments such as:

- Edge Functions
- Scheduled Jobs
- Administrative maintenance

---

# Secrets Management

Secrets are stored only in Supabase Secrets.

Examples

- Resend API Key
- AI Provider API Keys
- Webhook Secrets

Secrets must never be committed to Git.

No secrets may appear in client code.

---

# File Security

All user files are stored in Supabase Storage.

Buckets

- avatars
- message-attachments
- thumbnails

Buckets are private.

Clients access files using Signed URLs.

No public bucket is used for private user content.

---

# Signed URLs

Signed URLs are generated only by trusted backend logic.

Recommended expiration

5–15 minutes

Expired URLs become invalid automatically.

Storage paths are never exposed directly.

---

# Data Encryption

Data in Transit

TLS 1.2+

Required.

Data at Rest

Managed by Supabase infrastructure.

Sensitive files remain in private storage.

Future

Application-level encryption for message content may be introduced if regulatory or business requirements evolve.

---

# Password Security

Password policy is managed by Supabase Auth.

Recommended minimum length

12 characters

Encourage password managers.

Passwords are never logged.

---

# Logging

Application Logs

Record operational events only.

Sensitive fields must be excluded.

Never log:

- Passwords
- Access Tokens
- JWTs
- Message Content
- Attachment URLs

---

# Audit Trail

delivery_events

Acts as the permanent audit log for delivery operations.

Rules

Append Only

No Update

No Delete

Historical accuracy takes priority over storage optimization.

---

# Privacy

Users own their data.

Users may:

- View their data
- Update their data
- Delete eligible data

The platform never uses private messages for advertising or profiling.

---

# Rate Limiting

Authentication

Managed by Supabase.

Edge Functions

Per-user limits.

Storage Uploads

File size and request limits.

Future

IP-based rate limiting if required.

---

# Email Security

Provider

Resend

SPF

Enabled

DKIM

Enabled

DMARC

Recommended

Emails are sent only by trusted backend services.

---

# Dependency Security

Dependencies must be kept up to date.

Run security audits regularly.

Unused packages should be removed.

---

# Infrastructure Security

Production

Separate Supabase Project.

Development

Separate Project.

Staging

Separate Project.

Production credentials must never be reused outside Production.

---

# Backup

Production Database

Automatic daily backups.

Recommended retention

30 days.

Restore procedures should be tested periodically.

---

# Incident Response

If suspicious activity is detected:

1. Revoke active sessions.
2. Rotate compromised secrets.
3. Investigate audit logs.
4. Notify affected users if required.
5. Document the incident.

---

# Future Enhancements

- Multi-Factor Authentication (MFA)
- Passkey Authentication
- End-to-End Encryption for legacy messages
- Hardware Security Keys
- Device Management
- Security Activity History
- Trusted Devices

---

# Security Checklist

✓ Row Level Security enabled

✓ Private Storage Buckets

✓ Signed URLs only

✓ UUID primary keys

✓ Service Role isolated

✓ Secrets stored securely

✓ TLS enforced

✓ Audit log implemented

✓ Daily backups

✓ Separate Production environment

---

Status

FROZEN