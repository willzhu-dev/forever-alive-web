import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const siteURL = "https://forever-alive.com";

type Message = {
  id: string;
  user_id: string;
  title: string;
  content: string | null;
  recipient_name: string | null;
  recipient_email: string | null;
  sender_name: string | null;
  delivery_method: string | null;
  scheduled_at: string | null;
  status: string;
};

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function escapeHTML(value: string): string {
  return value.replace(/[&<>"']/g, (character) =>
    ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character] ?? character);
}

function safeError(value: unknown): string {
  const message = value instanceof Error ? value.message : "Delivery failed";
  return message.replace(/[\r\n]+/g, " ").slice(0, 500);
}

function verifiedJWTRole(authorization: string): string | null {
  const token = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
  const encodedPayload = token?.split(".")[1];
  if (!encodedPayload) return null;

  try {
    const base64 = encodedPayload
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(encodedPayload.length / 4) * 4, "=");
    const payload = JSON.parse(atob(base64)) as { role?: unknown };
    return typeof payload.role === "string" ? payload.role : null;
  } catch {
    return null;
  }
}

async function sendWithResend(
  apiKey: string,
  from: string,
  message: Message,
  deliveryToken: string,
  attemptNumber: number,
): Promise<string> {
  const recipient = message.recipient_email?.trim().toLowerCase();
  if (!recipient) throw new Error("Recipient email is missing");

  const recipientName = escapeHTML(message.recipient_name?.trim() || "there");
  const senderName = escapeHTML(
    message.sender_name?.trim() || "Someone who cares",
  );
  const letterURL = `${siteURL}/l/${deliveryToken}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `letter-${message.id}-${attemptNumber}`,
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      subject: `${
        message.sender_name?.trim() || "Someone"
      } sent you a private letter`,
      html: `
        <!doctype html>
        <html lang="en">
          <body style="margin:0;background:#fff7fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#18181b">
            <div style="max-width:600px;margin:0 auto;padding:40px 20px">
              <div style="background:#ffffff;border:1px solid #fce7f3;border-radius:24px;padding:36px;box-shadow:0 12px 36px rgba(236,72,153,.08)">
                <p style="margin:0 0 18px;color:#db2777;font-weight:700">Forever Alive</p>
                <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25">A private letter is waiting for you</h1>
                <p style="font-size:17px;line-height:1.7;color:#52525b">Dear ${recipientName},</p>
                <p style="font-size:17px;line-height:1.7;color:#52525b">${senderName} left you a private letter through Forever Alive. For privacy, the letter is available through the secure button below and is not included in this email.</p>
                <p style="margin:30px 0">
                  <a href="${letterURL}" style="display:inline-block;background:#ec4899;color:#ffffff;text-decoration:none;font-weight:700;padding:15px 24px;border-radius:999px">Open Private Letter</a>
                </p>
                <p style="font-size:15px;line-height:1.7;color:#71717a">您好，${senderName} 通过 Forever Alive 为您留下了一封私人信件。为保护隐私，信件正文不会直接显示在邮件中，请点击上方按钮查看。</p>
                <p style="font-size:13px;line-height:1.6;color:#a1a1aa">This secure link expires after 90 days. Do not forward it to anyone. Forever Alive cannot guarantee delivery or that the intended recipient will open the letter.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `Dear ${message.recipient_name?.trim() || "there"},\n\n${
        message.sender_name?.trim() || "Someone who cares"
      } left you a private letter through Forever Alive.\n\nOpen the private letter: ${letterURL}\n\n您好，您收到了一封通过 Forever Alive 发送的私人信件。请使用上方安全链接查看。此链接将在 90 天后失效，请勿转发。`,
      headers: {
        "X-Entity-Ref-ID": `letter-${message.id}-${attemptNumber}`,
      },
    }),
  });

  const result = await response.json() as { id?: string; message?: string };
  if (!response.ok || !result.id) {
    throw new Error(result.message || `Resend returned ${response.status}`);
  }

  return result.id;
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const supabaseURL = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const resendAPIKey = Deno.env.get("RESEND_API_KEY");
  const resendFrom = Deno.env.get("RESEND_FROM_EMAIL") ??
    "Forever Alive <letters@forever-alive.com>";

  if (!supabaseURL || !anonKey || !serviceRoleKey || !resendAPIKey) {
    console.error("Missing delivery environment variables");
    return json({ error: "Email delivery is not configured" }, 503);
  }

  try {
    const body = await request.json() as {
      messageId?: unknown;
      mode?: unknown;
    };
    const admin = createClient(supabaseURL, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    let jobs: Array<
      {
        messageID: string;
        mode: "immediately" | "scheduled";
        userID: string | null;
      }
    > = [];

    if (body.mode === "scheduled") {
      const authorization = request.headers.get("authorization") ?? "";
      // The platform verify_jwt check validates the signature before this
      // handler runs. Check the verified role rather than comparing the token
      // text, because Supabase may rotate the built-in service-role JWT.
      if (verifiedJWTRole(authorization) !== "service_role") {
        return json({ error: "Unauthorized" }, 401);
      }

      const { data, error } = await admin
        .from("messages")
        .select("id")
        .eq("message_type", "letter")
        .eq("delivery_method", "scheduled")
        .eq("status", "active")
        .is("delivered_at", null)
        .lte("scheduled_at", new Date().toISOString())
        .order("scheduled_at", { ascending: true })
        .limit(25);

      if (error) throw error;
      jobs = (data ?? []).map((item) => ({
        messageID: item.id,
        mode: "scheduled" as const,
        userID: null,
      }));
    } else {
      const authorization = request.headers.get("authorization") ?? "";
      const accessToken = authorization.match(/^Bearer\s+(.+)$/i)?.[1];
      const messageID = typeof body.messageId === "string"
        ? body.messageId
        : "";

      if (!accessToken || !/^[0-9a-f-]{36}$/i.test(messageID)) {
        return json({ error: "Authentication required" }, 401);
      }

      const authClient = createClient(supabaseURL, anonKey, {
        global: { headers: { Authorization: authorization } },
        auth: { persistSession: false, autoRefreshToken: false },
      });
      const { data, error } = await authClient.auth.getUser(accessToken);
      if (error || !data.user) {
        return json({ error: "Authentication required" }, 401);
      }

      jobs = [{ messageID, mode: "immediately", userID: data.user.id }];
    }

    const results = [];

    for (const job of jobs) {
      const { data: preparationData, error: preparationError } = await admin
        .rpc(
          "prepare_email_delivery",
          {
            p_message_id: job.messageID,
            p_mode: job.mode,
            p_user_id: job.userID,
          },
        ).maybeSingle();

      if (preparationError) throw preparationError;
      const preparation = preparationData as {
        raw_token: string;
        attempt_number: number;
      } | null;
      if (!preparation) {
        results.push({ messageId: job.messageID, status: "skipped" });
        continue;
      }

      const { data: message, error: messageError } = await admin
        .from("messages")
        .select(
          "id,user_id,title,content,recipient_name,recipient_email,sender_name,delivery_method,scheduled_at,status",
        )
        .eq("id", job.messageID)
        .single<Message>();

      if (messageError) throw messageError;

      try {
        const recipient = message.recipient_email?.trim().toLowerCase();
        if (recipient) {
          const recipientHash = await sha256Hex(recipient);
          const { data: suppression, error: suppressionError } = await admin
            .from("recipient_suppressions")
            .select("id")
            .eq("sender_user_id", message.user_id)
            .eq("recipient_hash", recipientHash)
            .maybeSingle();
          if (suppressionError) throw suppressionError;

          if (suppression) {
            const { error: updateError } = await admin
              .from("messages")
              .update({
                delivery_claimed_at: null,
                delivery_suppressed_at: new Date().toISOString(),
                revoked_at: new Date().toISOString(),
                delivery_last_error: "Recipient stopped future messages",
              })
              .eq("id", message.id);
            if (updateError) throw updateError;
            results.push({ messageId: message.id, status: "suppressed" });
            continue;
          }
        }

        const providerID = await sendWithResend(
          resendAPIKey,
          resendFrom,
          message,
          preparation.raw_token,
          preparation.attempt_number,
        );

        const { error: updateError } = await admin
          .from("messages")
          .update({
            delivered_at: new Date().toISOString(),
            delivery_email_sent_at: new Date().toISOString(),
            delivery_provider: "resend",
            delivery_provider_id: providerID,
            delivery_claimed_at: null,
            delivery_last_error: null,
          })
          .eq("id", message.id);

        if (updateError) {
          console.error(
            "Email accepted by Resend but delivery state could not be finalized:",
            updateError.code,
            safeError(updateError),
          );
          throw updateError;
        }
        results.push({ messageId: message.id, status: "delivered" });
      } catch (error) {
        console.error(
          "Letter delivery attempt failed:",
          safeError(error),
        );
        await admin
          .from("messages")
          .update({
            delivery_claimed_at: null,
            revoked_at: new Date().toISOString(),
            delivery_last_error: safeError(error),
          })
          .eq("id", message.id);

        results.push({ messageId: message.id, status: "failed" });
      }
    }

    const failed = results.some((result) => result.status === "failed");
    return json({ results }, failed && jobs.length === 1 ? 502 : 200);
  } catch (error) {
    console.error("send-letter failed:", safeError(error));
    return json({ error: "Unable to deliver the letter" }, 500);
  }
});
