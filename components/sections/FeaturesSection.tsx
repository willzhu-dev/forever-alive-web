const features = [
  {
    title: "Letters",
    description:
      "Write heartfelt letters for birthdays, milestones, difficult moments, or simply to remind someone how deeply they are loved.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Voice Messages",
    description:
      "Preserve the sound of your voice, your laughter, your stories, and the words your loved ones may need to hear one day.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <path d="M12 17v5" />
        <path d="M8 22h8" />
      </svg>
    ),
  },
  {
    title: "Videos",
    description:
      "Record meaningful moments, personal guidance, family stories, and messages that feel as real as being together.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="3" y="5" width="13" height="14" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Photos",
    description:
      "Keep treasured photographs together with the stories and emotions that make each memory truly meaningful.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 20" />
      </svg>
    ),
  },
  {
    title: "Chosen Recipients",
    description:
      "Decide exactly who should receive each memory, so every message reaches the person it was created for.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <circle cx="9" cy="8" r="4" />
        <path d="M3 21v-2a6 6 0 0 1 12 0v2" />
        <path d="m17 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Secure Preservation",
    description:
      "Your private memories are carefully stored and designed to remain protected until the right moment arrives.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M12 3 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section
  id="features"
  className="page-section scroll-mt-20 bg-pink-50/40"
>
      <div className="page-container">
        {/* Heading */}
        <div className="section-header">
          <span className="inline-flex rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
            Everything You Need
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Preserve more than memories.
          </h2>

          <p className="text-lg text-gray-500">
            Create a lasting collection of your words, your voice, your
            stories, and your love for the people who matter most.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-pink-100 bg-white p-8 shadow-[0_12px_40px_rgba(31,41,55,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-200 hover:shadow-[0_20px_55px_rgba(236,72,153,0.12)] sm:p-9"
            >
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-100/60 blur-3xl transition-transform duration-500 group-hover:scale-125"
              />

              {/* Icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-pink-500 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative mt-7 text-xl font-semibold tracking-tight text-gray-900">
                {feature.title}
              </h3>

              <p className="relative mt-4 text-base leading-7 text-gray-500">
                {feature.description}
              </p>

              {/* Bottom detail */}
              <div className="relative mt-auto pt-7">
                <div className="h-px w-full bg-gradient-to-r from-pink-100 to-transparent" />

                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-pink-600">
                  <span>Designed with care</span>

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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom feature strip */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3 border-b border-pink-100 px-6 py-6 text-center sm:border-b-0 sm:border-r">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              ✓
            </span>

            <span className="text-sm font-medium text-gray-700">
              Private by design
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 border-b border-pink-100 px-6 py-6 text-center sm:border-b-0 sm:border-r">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              ✓
            </span>

            <span className="text-sm font-medium text-gray-700">
              Simple to organize
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 px-6 py-6 text-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-100 text-pink-600">
              ✓
            </span>

            <span className="text-sm font-medium text-gray-700">
              Created for families
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}