const steps = [
  {
    number: "01",
    title: "Create Your Legacy",
    description:
      "Write letters, record voice messages, upload videos, and save precious memories for the people you love.",
  },
  {
    number: "02",
    title: "Choose Your Recipients",
    description:
      "Assign each message or memory to the family members and friends you want to receive them.",
  },
  {
    number: "03",
    title: "Deliver When It Matters",
    description:
      "Forever Alive helps ensure your messages are delivered when the time is right, giving your loved ones comfort, guidance, and connection.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
  id="how-it-works"
  className="page-section scroll-mt-20 overflow-hidden bg-white"
>
      <div className="page-container">
        {/* Heading */}
        <div className="section-header">
          <span className="inline-flex rounded-full border border-pink-200 bg-pink-100/70 px-4 py-2 text-sm font-medium text-pink-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Three simple steps to
            <br className="hidden sm:block" />
            preserve your legacy.
          </h2>

          <p className="text-lg text-gray-500">
            Building a lasting connection with the people you love has never
            been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop connection line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.67%] right-[16.67%] top-9 hidden h-px bg-gradient-to-r from-pink-100 via-pink-300 to-pink-100 lg:block"
          />

          <div className="relative grid gap-8 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative flex h-full flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-white bg-pink-500 text-lg font-bold text-white shadow-[0_10px_30px_rgba(236,72,153,0.25)] transition-transform duration-300 group-hover:-translate-y-1">
                  {step.number}
                </div>

                {/* Card */}
                <div className="mt-8 flex h-full w-full flex-col rounded-[28px] border border-pink-100 bg-white p-8 shadow-[0_14px_45px_rgba(31,41,55,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-pink-200 group-hover:shadow-[0_20px_55px_rgba(236,72,153,0.12)] sm:p-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-gray-500">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span aria-hidden="true">🔒</span>
            Private and secure
          </span>

          <span className="flex items-center gap-2">
            <span aria-hidden="true">✦</span>
            Simple to manage
          </span>

          <span className="flex items-center gap-2">
            <span aria-hidden="true">❤️</span>
            Made for the people you love
          </span>
        </div>
      </div>
    </section>
  );
}