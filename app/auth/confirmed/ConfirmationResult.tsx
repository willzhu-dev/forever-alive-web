"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const REDIRECT_SECONDS = 5;

function getConfirmationError(): string | null {
  const search = new URLSearchParams(window.location.search);
  const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));

  return (
    search.get("error_description") ??
    search.get("error") ??
    hash.get("error_description") ??
    hash.get("error")
  );
}

export default function ConfirmationResult() {
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_SECONDS);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const confirmationError = getConfirmationError();
    setError(confirmationError);
    setIsReady(true);

    // Remove authentication parameters from browser history and screenshots.
    window.history.replaceState({}, "", window.location.pathname);

    if (confirmationError) return;

    const interval = window.setInterval(() => {
      setSecondsRemaining((current) => Math.max(0, current - 1));
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.assign("/");
    }, REDIRECT_SECONDS * 1000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(redirect);
    };
  }, []);

  if (!isReady) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-6 py-20">
        <p className="text-gray-500">Confirming your email…</p>
      </section>
    );
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-6 py-20">
      <div className="w-full rounded-[2rem] border border-pink-100 bg-white p-8 text-center shadow-xl shadow-pink-100/50 sm:p-12">
        <div
          className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${
            error
              ? "bg-red-50 text-red-600"
              : "bg-pink-50 text-pink-600"
          }`}
          aria-hidden="true"
        >
          {error ? "!" : "✓"}
        </div>

        {error ? (
          <>
            <h1 className="text-3xl font-bold tracking-tight">
              Activation Link Unavailable
            </h1>
            <p className="mt-3 text-xl font-semibold">激活链接不可用</p>
            <p className="mt-6 leading-7 text-gray-600">
              This activation link may have expired or already been used. Please
              return to the app and try signing in. If your email is still not
              confirmed, request a new activation email.
            </p>
            <p className="mt-3 leading-7 text-gray-600">
              此激活链接可能已过期或已使用。请返回 App 尝试登录；如果邮箱仍未激活，请重新发送激活邮件。
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold tracking-tight">
              Account Activated
            </h1>
            <p className="mt-3 text-xl font-semibold">账号已成功激活</p>
            <p className="mt-6 leading-7 text-gray-600">
              Your email has been confirmed. You can now return to Forever Alive
              and sign in.
            </p>
            <p className="mt-3 leading-7 text-gray-600">
              您的邮箱已经验证完成，现在可以返回 Forever Alive 登录。
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Returning to the homepage in {secondsRemaining} seconds…
              <br />
              {secondsRemaining} 秒后返回主页…
            </p>
          </>
        )}

        <Link className="btn mt-8" href="/">
          Return to Homepage / 返回主页
        </Link>
      </div>
    </section>
  );
}
