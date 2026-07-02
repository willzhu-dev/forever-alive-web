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
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Three simple steps to preserve your legacy.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            Building a lasting connection with the people you love has never
            been easier.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-5xl font-bold text-pink-500">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}