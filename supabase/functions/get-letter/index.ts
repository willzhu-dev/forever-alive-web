import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

Deno.serve(async (request: Request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  if (request.method !== "GET") {
    return jsonResponse(
      {
        error: "Method not allowed",
      },
      405,
    );
  }

  try {
    const url = new URL(request.url);
    const token = url.searchParams.get("token")?.trim();

    if (!token) {
      return jsonResponse(
        {
          error: "Missing delivery token",
        },
        400,
      );
    }

    // 我们生成的是 32 bytes 的 hex token，所以长度应为 64。
    // 这也可以拦截明显无效的请求。
    const tokenPattern = /^[a-f0-9]{64}$/i;

    if (!tokenPattern.test(token)) {
      return jsonResponse(
        {
          error: "Invalid delivery token",
        },
        400,
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get(
      "SUPABASE_SERVICE_ROLE_KEY",
    );

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("Missing Supabase environment variables");

      return jsonResponse(
        {
          error: "Server configuration error",
        },
        500,
      );
    }

    const supabaseAdmin = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );

    const { data: letter, error } = await supabaseAdmin
      .from("messages")
      .select(`
        id,
        title,
        content,
        recipient_name,
        sender_name,
        delivery_token,
        message_type,
        delivery_method,
        scheduled_at,
        status,
        created_at
      `)
      .eq("delivery_token", token)
      .eq("message_type", "letter")
      .eq("status", "active")
      .maybeSingle();

    if (error) {
      console.error("Failed to load letter:", error);

      return jsonResponse(
        {
          error: "Unable to load letter",
        },
        500,
      );
    }

    if (!letter) {
      return jsonResponse(
        {
          error: "Letter not found",
        },
        404,
      );
    }

    /*
     * 暂时允许 active Letter 通过 token 查看。
     *
     * 后面正式上线 Delivery 时，还会在这里增加：
     * 1. 是否已经发送；
     * 2. 是否已经撤回；
     * 3. 是否达到 scheduled_at；
     * 4. 是否允许重复查看；
     * 5. 更新 opened_at。
     */

    return jsonResponse({
      letter: {
        title: letter.title,
        content: letter.content,
        recipientName: letter.recipient_name,
        senderName: letter.sender_name,
        createdAt: letter.created_at,
      },
    });
  } catch (error) {
    console.error("Unexpected get-letter error:", error);

    return jsonResponse(
      {
        error: "Internal server error",
      },
      500,
    );
  }
});