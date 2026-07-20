import Link from "next/link";
import PhoneMockup from "@/components/common/PhoneMockup";

const trustPoints = [
  {
    label: "Private by design",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    label: "Securely preserved",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path d="M17.5 19H7a5 5 0 1 1 1-9.9A7 7 0 0 1 21 12.5 4.5 4.5 0 0 1 17.5 19Z" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Made for families",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-4 w-4"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-4 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-rose-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[42%] top-24 h-40 w-40 rounded-full bg-purple-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent"
      />

      {/* Decorative pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgb(236 72 153) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="page-container relative">
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-14 pb-20 pt-28 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:pb-24 lg:pt-32 xl:gap-20">
          {/* Left content */}
          <div className="mx-auto flex w-full max-w-[680px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm backdrop-blur-md sm:px-5">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-100"
              >
                ♥
              </span>

              Preserve your love for generations
            </div>

            <h1 className="mt-7 text-[3.25rem] font-bold leading-[1.02] tracking-[-0.045em] text-gray-950 sm:text-6xl md:text-7xl lg:text-[4.65rem] xl:text-[5.35rem]">
              Your love
              <span className="block text-pink-500">lives forever.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
              Preserve your letters, voice, videos, photos, and most meaningful
              memories, so the people you love can always feel your presence.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="#download"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-pink-500 px-8 text-base font-semibold text-white shadow-[0_14px_35px_rgba(236,72,153,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-[0_18px_45px_rgba(236,72,153,0.38)]"
              >
                Download the App

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-gray-200 bg-white/80 px-8 text-base font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="ml-0.5 h-3 w-3"
                  >
                    <path d="M8 5v14l11-7Z" />
                  </svg>
                </span>

                See How It Works
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500"
                >
                  <span className="text-pink-500">{point.icon}</span>
                  {point.label}
                </div>
              ))}
            </div>

            {/* Small testimonial */}
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-pink-100 bg-white/70 px-5 py-4 shadow-[0_10px_35px_rgba(31,41,55,0.05)] backdrop-blur-md">
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-pink-100 text-xs font-semibold text-pink-600">
                  M
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-purple-100 text-xs font-semibold text-purple-600">
                  J
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-rose-100 text-xs font-semibold text-rose-600">
                  A
                </div>
              </div>

              <div className="text-left">
                <div
                  className="flex gap-0.5 text-xs text-amber-400"
                  aria-label="Five stars"
                >
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">
                  Created to keep families connected across time.
                </p>
              </div>
            </div>
          </div>

          {/* Right phone presentation */}
          <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:mx-0 lg:max-w-none lg:justify-end">
            {/* Phone background */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-200/70 via-rose-100/50 to-purple-100/40 blur-2xl sm:h-[520px] sm:w-[520px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/50 sm:h-[440px] sm:w-[440px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 sm:h-[350px] sm:w-[350px]"
            />

            {/* Floating letter card */}
            <div className="absolute left-0 top-[20%] z-20 hidden -rotate-3 rounded-2xl border border-pink-100 bg-white/90 p-4 shadow-[0_18px_45px_rgba(31,41,55,0.12)] backdrop-blur-md transition-transform duration-300 hover:rotate-0 md:block lg:-left-2 xl:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Letter saved
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Safely preserved
                  </p>
                </div>
              </div>
            </div>

            {/* Floating security card */}
            <div className="absolute bottom-[18%] right-0 z-20 hidden rotate-3 rounded-2xl border border-pink-100 bg-white/90 p-4 shadow-[0_18px_45px_rgba(31,41,55,0.12)] backdrop-blur-md transition-transform duration-300 hover:rotate-0 md:block lg:-right-1 xl:-right-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-5 w-5"
                  >
                    <path d="M12 3 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Private & secure
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Your memories stay yours
                  </p>
                </div>
              </div>
            </div>

            {/* Small decorative heart */}
            <div
              aria-hidden="true"
              className="absolute right-[8%] top-[12%] hidden h-12 w-12 rotate-12 items-center justify-center rounded-2xl border border-white/80 bg-white/70 text-lg text-pink-500 shadow-lg backdrop-blur-md sm:flex"
            >
              ♥
            </div>

            {/* Existing PhoneMockup */}
            <div className="relative z-10 origin-center scale-[0.9] sm:scale-100">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="relative z-20 grid overflow-hidden rounded-[28px] border border-pink-100 bg-white/85 shadow-[0_18px_50px_rgba(31,41,55,0.06)] backdrop-blur-md sm:grid-cols-3">
          <div className="flex items-center justify-center gap-4 border-b border-pink-100 px-6 py-5 sm:border-b-0 sm:border-r">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M12 3 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Private by Design
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Your memories belong to you
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 border-b border-pink-100 px-6 py-5 sm:border-b-0 sm:border-r">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
                <path d="M4 5.5v15" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Every Story Matters
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Preserve words, voices and moments
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-6 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z" />
              </svg>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Built with Love
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Created for the people who matter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}