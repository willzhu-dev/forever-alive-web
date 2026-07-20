import Link from "next/link";

export default function DownloadSection() {
  return (
    <section
  id="download"
  className="page-section scroll-mt-20 bg-white"
>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 px-6 py-14 shadow-[0_30px_80px_rgba(236,72,153,0.25)] sm:px-10 lg:px-16 lg:py-20">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-[30%] top-10 h-32 w-32 rounded-full border border-white/10"
          />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Forever Alive App
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Keep your love alive,
                <span className="block">for generations.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80 lg:mx-0">
                Preserve letters, voice messages, videos, photos, and memories
                for the people who matter most.
              </p>

              {/* CTA buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/download"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-base font-semibold text-pink-600 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-50 hover:shadow-xl"
                >
                  Download the App
                </Link>

                <Link
                  href="/features"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Explore Features
                </Link>
              </div>

              {/* Trust points */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/75 lg:justify-start">
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Private and secure
                </span>

                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Easy to use
                </span>

                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  Made with care
                </span>
              </div>
            </div>

            {/* Phone preview */}
            <div className="relative mx-auto flex w-full max-w-md justify-center lg:justify-end">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl"
              />

              <div className="relative w-[240px] rotate-3 rounded-[42px] border-[8px] border-white/90 bg-gray-950 p-2 shadow-[0_35px_80px_rgba(80,7,36,0.35)] transition-transform duration-500 hover:rotate-0 sm:w-[270px]">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[32px] bg-gradient-to-b from-pink-50 to-white">
                  {/* Phone notch */}
                  <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-gray-950" />

                  {/* Mock app interface */}
                  <div className="flex h-full flex-col px-5 pb-6 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400">
                          Welcome back
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-900">
                          Your Legacy
                        </p>
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-base">
                        🫧
                      </div>
                    </div>

                    <div className="mt-6 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 p-5 text-white shadow-lg">
                      <p className="text-[10px] font-medium text-white/70">
                        Memories preserved
                      </p>

                      <p className="mt-2 text-3xl font-bold">24</p>

                      <p className="mt-4 text-[10px] text-white/80">
                        Letters, voice notes, videos and photos
                      </p>
                    </div>

                    <p className="mt-6 text-xs font-semibold text-gray-900">
                      Your memories
                    </p>

                    <div className="mt-3 space-y-3">
                      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-100">
                          💌
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold text-gray-900">
                            Letters
                          </p>
                          <p className="mt-0.5 text-[9px] text-gray-400">
                            12 memories
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100">
                          🎙️
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold text-gray-900">
                            Voice Messages
                          </p>
                          <p className="mt-0.5 text-[9px] text-gray-400">
                            7 memories
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100">
                          🎥
                        </div>

                        <div>
                          <p className="text-[10px] font-semibold text-gray-900">
                            Videos
                          </p>
                          <p className="mt-0.5 text-[9px] text-gray-400">
                            5 memories
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto flex justify-center">
                      <div className="h-1 w-24 rounded-full bg-gray-900/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -left-2 bottom-16 hidden rounded-2xl border border-white/40 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                    ❤️
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Memory saved
                    </p>

                    <p className="mt-1 text-[10px] text-gray-500">
                      Safely preserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}