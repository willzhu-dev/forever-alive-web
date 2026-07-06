"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function UpdatePasswordPage() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSuccess("Your password has been updated successfully.");

    setTimeout(() => {
      router.push("/");
    }, 2500);
  }

  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-white">
      <section className="container flex min-h-[80vh] items-center justify-center py-24">
        <div className="w-full max-w-lg rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm">

          <div className="text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Account Security
            </span>

            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Create a new password
            </h1>

            <p className="mt-4 leading-8 text-gray-500">
              Choose a strong password to keep your Forever Alive account safe.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                New Password
              </label>

              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 characters"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Confirm Password
              </label>

              <input
                type="password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
              />
            </div>

            {error && (
              <div className="rounded-2xl bg-red-50 px-5 py-4 text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="rounded-2xl bg-green-50 px-5 py-4 text-green-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-pink-500 py-4 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>

          </form>

        </div>
      </section>
    </main>
  );
}