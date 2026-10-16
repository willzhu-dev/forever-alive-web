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

function jsonResponse(
  request: Request,
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  if (request.method !== "POST") {
    return jsonResponse(request, { error: "Method not allowed" }, 405);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse(request, { error: "Invalid request" }, 400);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > 1024) {
    return jsonResponse(request, { error: "Invalid request" }, 400);
  }

  try {
    const payload = await request.json() as { token?: unknown };
    const token = typeof payload.token === "string"
      ? payload.token.trim().toLowerCase()
      : "";

    if (!/^[a-f0-9]{64}$/.test(token)) {
      return jsonResponse(request, { error: "Letter unavailable" }, 404);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase environment variables");
      return jsonResponse(
        request,
        { error: "Server configuration error" },
        500,
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const tokenHash = await sha256Hex(token);
    const { data: letter, error } = await supabaseAdmin
      .from("messages")
      .select(`
        id,
        title,
        content,
        recipient_name,
        sender_name,
        message_type,
        status,
        delivery_available_at,
        delivery_token_expires_at,
        delivered_at,
        revoked_at,
        created_at
      `)
      .eq("delivery_token_hash", tokenHash)
      .eq("message_type", "letter")
      .maybeSingle();

    if (error) {
      console.error("Failed to load letter by token hash:", error.code);
      return jsonResponse(request, { error: "Unable to load letter" }, 500);
    }

    const now = Date.now();
    const availableAt = letter?.delivery_available_at
      ? Date.parse(letter.delivery_available_at)
      : Number.NaN;
    const deliveredAt = letter?.delivered_at
      ? Date.parse(letter.delivered_at)
      : Number.NaN;
    const expiresAt = letter?.delivery_token_expires_at
      ? Date.parse(letter.delivery_token_expires_at)
      : null;

    const unavailable = !letter ||
      !["active", "delivered"].includes(letter.status) ||
      letter.revoked_at !== null ||
      !Number.isFinite(availableAt) ||
      availableAt > now ||
      !Number.isFinite(deliveredAt) ||
      deliveredAt > now ||
      (expiresAt !== null && (!Number.isFinite(expiresAt) || expiresAt <= now));

    if (unavailable) {
      return jsonResponse(request, { error: "Letter unavailable" }, 404);
    }

    return jsonResponse(request, {
      letter: {
        title: letter.title,
        content: letter.content,
        recipientName: letter.recipient_name,
        senderName: letter.sender_name,
        createdAt: letter.created_at,
      },
    });
  } catch (error) {
    console.error(
      "Unexpected get-letter error:",
      error instanceof Error ? error.name : "UnknownError",
    );
    return jsonResponse(request, { error: "Invalid request" }, 400);
  }
});
