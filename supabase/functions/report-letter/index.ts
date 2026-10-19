import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigins = new Set([
  "https://forever-alive.com",
  "https://www.forever-alive.com",
  "http://localhost:3000",
]);

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin") ?? "";
  return {
    "Access-Control-Allow-Origin": allowedOrigins.has(origin)
      ? origin
      : "https://forever-alive.com",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

function json(request: Request, body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
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
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }
  if (request.method !== "POST") {
    return json(request, { error: "Method not allowed" }, 405);
  }

  try {
    const payload = await request.json() as {
      token?: unknown;
      action?: unknown;
      reason?: unknown;
      details?: unknown;
    };
    const token = typeof payload.token === "string"
      ? payload.token.trim().toLowerCase()
      : "";
    const action = payload.action === "block" ? "block" : "report";
    const reason = typeof payload.reason === "string"
      ? payload.reason.trim().slice(0, 80)
      : null;
    const details = typeof payload.details === "string"
      ? payload.details.trim().slice(0, 1000)
      : null;

    if (!/^[a-f0-9]{64}$/.test(token)) {
      return json(request, { error: "Letter unavailable" }, 404);
    }

    const supabaseURL = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseURL || !serviceRoleKey) {
      return json(request, { error: "Server configuration error" }, 500);
    }

    const admin = createClient(supabaseURL, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const tokenHash = await sha256Hex(token);
    const { data: message, error: messageError } = await admin
      .from("messages")
      .select("id,user_id,recipient_email")
      .eq("delivery_token_hash", tokenHash)
      .eq("message_type", "letter")
      .maybeSingle();

    if (messageError || !message) {
      return json(request, { error: "Letter unavailable" }, 404);
    }

    const { error: reportError } = await admin
      .from("letter_abuse_reports")
      .insert({ message_id: message.id, action, reason, details });
    if (reportError) throw reportError;

    if (action === "block" && message.recipient_email) {
      const recipientHash = await sha256Hex(
        message.recipient_email.trim().toLowerCase(),
      );
      const { error: blockError } = await admin
        .from("recipient_suppressions")
        .upsert({
          sender_user_id: message.user_id,
          recipient_hash: recipientHash,
          source_message_id: message.id,
        }, { onConflict: "sender_user_id,recipient_hash" });
      if (blockError) throw blockError;
    }

    return json(request, { success: true, action });
  } catch (error) {
    console.error(
      "report-letter failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return json(request, { error: "Unable to submit request" }, 500);
  }
});
