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

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        process.env.NEXT_PUBLIC_SITE_URL + "/update-password",
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(
        "Password reset email has been sent. Please check your inbox."
      );
    }

    setLoading(false);
  }

  return (
  <AuthCard
    badge="Password Recovery"
    title="Reset your password"
    description="Enter your email address and we'll send you a secure link to create a new password."
  >
    <form onSubmit={handleSubmit} className="space-y-6">
    

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
              />
            </div>

            {success && (
              <div className="rounded-2xl bg-green-50 px-5 py-4 text-green-700">
                {success}
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-red-50 px-5 py-4 text-red-600">
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