const reasons = [
  {
    title: "Your Story Matters",
    description:
      "The words you leave behind can offer comfort, guidance, and a sense of connection for years to come.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
        <path d="M4 5.5v15" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Love Should Be Preserved",
    description:
      "Letters, voices, photographs, and videos become lasting reminders of the love shared between generations.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    ),
  },
  {
    title: "Memories Create Connection",
    description:
      "A familiar voice or heartfelt message can help loved ones feel close, even when distance or time separates them.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6"
      >
        <circle cx="7" cy="7" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M2 21v-2a5 5 0 0 1 5-5" />
        <path d="M22 21v-2a5 5 0 0 0-5-5" />
        <path d="M8 17c1.2-1.3 2.5-2 4-2s2.8.7 4 2" />
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section
  id="why"
  className="page-section scroll-mt-20 overflow-hidden bg-white"
>
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[36px] border border-pink-100 bg-gradient-to-br from-white via-pink-50/40 to-rose-50/70 px-6 py-14 shadow-[0_20px_70px_rgba(31,41,55,0.06)] sm:px-10 lg:px-16 lg:py-20">
          {/* Decorative background */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl"
          />

          <div className="relative">
            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
                Why Forever Alive
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Some things should never be forgotten.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
                Forever Alive helps you preserve the moments, stories, and
                messages that carry your love forward to the people who matter
                most.
              </p>
            </div>

            {/* Reasons */}
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="group rounded-[26px] border border-white/80 bg-white/80 p-7 shadow-[0_12px_35px_rgba(31,41,55,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-[0_18px_45px_rgba(236,72,153,0.1)] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                    {reason.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-gray-900">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-500">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Closing message */}
            <div className="mx-auto mt-14 max-w-3xl border-t border-pink-100 pt-10 text-center">
              <p className="text-xl font-medium leading-8 text-gray-800 sm:text-2xl">
                Your memories are more than files.
                <span className="text-pink-600">
                  {" "}
                  They are a part of you.
                </span>
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
                Preserve them with intention, so the people you love can always
                return to your words, your voice, and your story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}