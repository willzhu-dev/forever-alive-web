# Forever Alive

Entity Relationship Diagram

Version 1.0

---

# Entity Overview

User

Loved One

Message

Attachment

Message Recipient

Delivery Plan

Safety Check

Delivery Event

Notification

Emergency Contact

---

# Relationships

User

1

↓

Many

Messages

---

User

1

↓

Many

Loved Ones

---

User

1

↓

1

Safety Check

---

Message

1

↓

Many

Attachments

---

Message

Many

↓

Many

Loved Ones

Bridge Table

Message Recipient

---

Message

1

↓

1

Delivery Plan

---

Delivery Plan

1

↓

Many

Delivery Events

---

User

1

↓

Many

Notifications

---

User

1

↓

Many

Emergency Contacts

---

# ER Diagram

                User
                  │
      ┌───────────┼────────────┐
      │           │            │
      ▼           ▼            ▼
 Messages    Loved Ones   Safety Check
      │
      ▼
 Attachments
      │
      ▼
 Message Recipient
      ▲
      │
 Loved Ones
      │
      ▼
 Delivery Plan
      │
      ▼
 Delivery Event

User
 │
 ├── Notifications
 │
 └── Emergency Contacts

---

# Database Principles

UUID Primary Keys

Created At

Updated At

Soft Delete Ready

Immutable Delivery History

Row Level Security

Storage Separation

Audit Friendly

Global Ready

Timezone Aware

---

# Storage

avatars

voice

videos

photos

documents

thumbnails

---

# Naming Convention

snake_case

Plural Table Names

Singular Column Names

UUID Everywhere

UTC Timezone

---

# Future Expansion

Message Templates

Scheduled Delivery

Multiple Delivery Channels

AI Assistant

Family Vault

Organization Accounts

Audit Center