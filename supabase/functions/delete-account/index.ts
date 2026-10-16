import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
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

function issuedAt(accessToken: string): number | null {
  try {
    const payload = accessToken.split(".")[1]
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const padded = payload.padEnd(Math.ceil(payload.length / 4) * 4, "=");
    const claims = JSON.parse(atob(padded)) as { iat?: unknown };
    return typeof claims.iat === "number" ? claims.iat : null;
  } catch {
    return null;
  }
}

type StorageClient = ReturnType<typeof createClient>["storage"];

async function listFilesRecursively(
  storage: StorageClient,
  bucket: string,
  prefix: string,
): Promise<string[]> {
  const files: string[] = [];
  let offset = 0;

  while (true) {
    const { data, error } = await storage.from(bucket).list(prefix, {
      limit: 1000,
      offset,
      sortBy: { column: "name", order: "asc" },
    });

    if (error) {
      const missingBucket = /bucket.*not found|not found/i.test(error.message);
      if (missingBucket) return [];
      throw new Error(`Unable to list ${bucket}`);
    }

    for (const item of data ?? []) {
      const path = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.id) {
        files.push(path);
      } else {
        files.push(...await listFilesRecursively(storage, bucket, path));
      }
    }

    if (!data || data.length < 1000) break;
    offset += data.length;
  }

  return files;
}

async function removePrefix(
  storage: StorageClient,
  bucket: string,
  prefix: string,
): Promise<void> {
  const files = await listFilesRecursively(storage, bucket, prefix);

  for (let index = 0; index < files.length; index += 100) {
    const { error } = await storage
      .from(bucket)
      .remove(files.slice(index, index + 100));

    if (error) throw new Error(`Unable to remove files from ${bucket}`);
  }
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const authorization = request.headers.get("authorization") ?? "";
    const accessToken = authorization.match(/^Bearer\s+(.+)$/i)?.[1];

    if (!accessToken) return json({ error: "Authentication required" }, 401);

    const body = await request.json() as { confirmation?: unknown };
    if (body.confirmation !== "DELETE") {
      return json({ error: "Deletion was not confirmed" }, 400);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      console.error("Missing Supabase environment variables");
      return json({ error: "Server configuration error" }, 500);
    }

    const authenticatedClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authorization } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data: userData, error: userError } = await authenticatedClient.auth
      .getUser(accessToken);

    if (userError || !userData.user) {
      return json({ error: "Authentication required" }, 401);
    }

    const tokenIssuedAt = issuedAt(accessToken);
    const now = Math.floor(Date.now() / 1000);
    if (
      !tokenIssuedAt || tokenIssuedAt > now + 60 || now - tokenIssuedAt > 300
    ) {
      return json({
        error: "Please sign in again before deleting your account",
      }, 401);
    }

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const userID = userData.user.id;

    const { data: messages, error: messagesError } = await admin
      .from("messages")
      .select("id")
      .eq("user_id", userID);

    if (messagesError) throw new Error("Unable to prepare account deletion");

    await removePrefix(admin.storage, "avatars", userID);
    await removePrefix(admin.storage, "message-attachments", userID);

    for (const message of messages ?? []) {
      await removePrefix(admin.storage, "thumbnails", message.id);
    }

    const { error: deleteError } = await admin.auth.admin.deleteUser(
      userID,
      false,
    );

    if (deleteError) throw new Error("Unable to delete authentication account");

    return json({ deleted: true });
  } catch (error) {
    console.error(
      "Account deletion failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return json(
      { error: "We could not delete the account. Please try again." },
      500,
    );
  }
});
