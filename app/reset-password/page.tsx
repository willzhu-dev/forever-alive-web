"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

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
    <main className="bg-gradient-to-b from-pink-50 via-white to-white">
      <section className="container flex min-h-[80vh] items-center justify-center py-24">
        <div className="w-full max-w-lg rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm">

          <div className="text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Password Recovery
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Reset your password
            </h1>

            <p className="mt-4 leading-8 text-gray-500">
              Enter your email address and we'll send you a secure link to
              create a new password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
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
              className="w-full rounded-full bg-pink-500 py-4 font-semibold text-white transition hover:bg-pink-600 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

          </form>

        </div>
      </section>
    </main>
  );
}