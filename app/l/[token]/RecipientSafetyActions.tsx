"use client";

import { FormEvent, useState } from "react";

const REPORT_URL =
  "https://cpistifrzgzijryslmto.supabase.co/functions/v1/report-letter";

type Props = { token: string };
type Action = "report" | "block";

export default function RecipientSafetyActions({ token }: Props) {
  const [action, setAction] = useState<Action | null>(null);
  const [reason, setReason] = useState("Unwanted message");
  const [details, setDetails] = useState("");
  const [busy, setBusy] = useState(false);
  const [complete, setComplete] = useState<Action | null>(null);
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!action || busy) return;
    setBusy(true);
    setError("");

    try {
      const response = await fetch(REPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, action, reason, details }),
      });
      if (!response.ok) throw new Error("Request failed");
      setComplete(action);
      setAction(null);
    } catch {
      setError("We could not submit your request. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (complete) {
    return (
      <section className="recipient-safety" aria-live="polite">
        <strong>Request received</strong>
        <p>
          {complete === "block"
            ? "Future letters from this sender will not be emailed to this address."
            : "Thank you. This letter has been reported for review."}
        </p>
      </section>
    );
  }

  return (
    <section className="recipient-safety">
      <h2>Recipient safety</h2>
      <p>If this letter is unwanted or concerning, you can report it or stop future messages.</p>

      {!action ? (
        <div className="recipient-safety-actions">
          <button type="button" onClick={() => setAction("report")}>
            Report this letter
          </button>
          <button type="button" onClick={() => setAction("block")}>
            Stop future messages from this sender
          </button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label>
            Reason
            <select value={reason} onChange={(event) => setReason(event.target.value)}>
              <option>Unwanted message</option>
              <option>Harassment or threatening content</option>
              <option>Spam or fraud</option>
              <option>Other safety concern</option>
            </select>
          </label>
          <label>
            Additional details (optional)
            <textarea
              value={details}
              maxLength={1000}
              rows={4}
              onChange={(event) => setDetails(event.target.value)}
            />
          </label>
          {error && <p className="recipient-safety-error">{error}</p>}
          <div className="recipient-safety-actions">
            <button className="recipient-safety-primary" disabled={busy} type="submit">
              {busy ? "Submitting…" : action === "block" ? "Confirm and stop messages" : "Submit report"}
            </button>
            <button disabled={busy} type="button" onClick={() => setAction(null)}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
