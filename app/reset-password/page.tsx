"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AuthCard from "@/components/auth/AuthCard";

export default function ResetPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${siteUrl}/update-password`,
        });

      if (resetError) {
        setError(resetError.message);
        return;
      }

      setSuccess(
        "Password reset email has been sent. Please check your inbox."
      );
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard
      badge="Password Recovery"
      title="Reset your password"
      description="Enter your email address and we'll send you a secure link to create a new password."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-medium text-gray-700"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />
        </div>

        {success && (
          <div
            role="status"
            className="rounded-2xl bg-green-50 px-5 py-4 text-green-700"
          >
            {success}
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="rounded-2xl bg-red-50 px-5 py-4 text-red-600"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-pink-500 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(236,72,153,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-[0_18px_40px_rgba(236,72,153,0.35)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </AuthCard>
  );
}