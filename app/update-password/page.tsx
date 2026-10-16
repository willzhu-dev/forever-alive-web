"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import AuthCard from "@/components/auth/AuthCard";

type RecoveryState = "checking" | "ready" | "invalid" | "complete";

function recoveryErrorFromURL() {
  const search = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  return (
    search.get("error_description") ??
    search.get("error") ??
    hash.get("error_description") ??
    hash.get("error")
  );
}

export default function UpdatePasswordPage() {
  const supabase = useMemo(() => {
    // Password recovery links opened from the iOS app use the implicit flow
    // so they also work when opened in a different browser/device. Website
    // recovery links continue to use the normal cookie-backed PKCE client.
    if (
      typeof window !== "undefined" &&
      /(?:^#|&)access_token=/.test(window.location.hash)
    ) {
      return createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          auth: {
            flowType: "implicit",
            detectSessionInUrl: true,
            persistSession: true,
          },
        }
      );
    }

    return createClient();
  }, []);

  const [recoveryState, setRecoveryState] =
    useState<RecoveryState>("checking");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if ((event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") && session) {
        setRecoveryState("ready");
        setError("");
        window.history.replaceState({}, "", window.location.pathname);
      }
    });

    async function verifyRecoverySession() {
      const urlError = recoveryErrorFromURL();
      if (urlError) {
        if (mounted) {
          setError(decodeURIComponent(urlError.replace(/\+/g, " ")));
          setRecoveryState("invalid");
        }
        return;
      }

      const search = new URLSearchParams(window.location.search);
      const tokenHash = search.get("token_hash");
      const recoveryType = search.get("type");

      if (tokenHash && recoveryType === "recovery") {
        const { error: verificationError } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "recovery",
        });

        if (verificationError) {
          if (mounted) {
            setError(verificationError.message);
            setRecoveryState("invalid");
          }
          return;
        }
      }

      // getSession waits for Supabase to finish processing either the PKCE
      // `code` query parameter or the implicit access tokens in the hash.
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (!mounted) return;

      if (sessionError || !data.session) {
        setError(
          "This password reset link is invalid, expired, or has already been used."
        );
        setRecoveryState("invalid");
        return;
      }

      setError("");
      setRecoveryState("ready");
      window.history.replaceState({}, "", window.location.pathname);
    }

    void verifyRecoverySession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError || !sessionData.session) {
      setError(
        "Your secure reset session has expired. Please request a new password reset email."
      );
      setLoading(false);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    await supabase.auth.signOut();
    setRecoveryState("complete");
    setLoading(false);
  }

  if (recoveryState === "checking") {
    return (
      <AuthCard
        badge="Account Security"
        title="Checking your reset link"
        description="Please wait while we securely verify your password recovery request."
      >
        <div className="py-8 text-center text-gray-500" role="status">
          Verifying secure link…
        </div>
      </AuthCard>
    );
  }

  if (recoveryState === "invalid") {
    return (
      <AuthCard
        badge="Link Unavailable"
        title="This reset link cannot be used"
        description="The link may have expired or already been used. Return to the app and request a new password reset email."
      >
        <div className="rounded-2xl bg-red-50 px-5 py-4 text-red-600" role="alert">
          {error}
        </div>
      </AuthCard>
    );
  }

  if (recoveryState === "complete") {
    return (
      <AuthCard
        badge="Password Updated"
        title="Your password has been changed"
        description="You can now return to Forever Alive and sign in with your new password."
      >
        <div className="rounded-2xl bg-green-50 px-5 py-4 text-green-700">
          Password updated successfully.
        </div>
        <Link
          href="/"
          className="mt-6 block w-full rounded-full bg-pink-500 py-4 text-center font-semibold text-white transition hover:bg-pink-600"
        >
          Return to Homepage
        </Link>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      badge="Account Security"
      title="Create a new password"
      description="The reset link has been verified. Choose a new password for your Forever Alive account."
    >
      <form onSubmit={handleSubmit} className="space-y-7">
        <div>
          <label htmlFor="new-password" className="mb-3 block text-lg font-medium text-gray-700">
            New password
          </label>
          <input
            id="new-password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 8 characters"
            className="min-h-16 w-full rounded-2xl border border-gray-200 px-6 py-5 text-lg outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />
        </div>

        <div>
          <label htmlFor="confirm-password" className="mb-3 block text-lg font-medium text-gray-700">
            Confirm password
          </label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            className="min-h-16 w-full rounded-2xl border border-gray-200 px-6 py-5 text-lg outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />
        </div>

        {error && (
          <div className="rounded-2xl bg-red-50 px-5 py-4 text-red-600" role="alert">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="min-h-16 w-full rounded-full bg-pink-500 px-6 py-5 text-lg font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Updating…" : "Update Password"}
        </button>
      </form>
    </AuthCard>
  );
}
