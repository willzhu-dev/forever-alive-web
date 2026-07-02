const features = [
  {
    title: "Letters",
    description:
      "Write meaningful letters that can be delivered when the time is right.",
    icon: "💌",
  },
  {
    title: "Voice Messages",
    description:
      "Let your loved ones hear your voice whenever they need comfort.",
    icon: "🎙️",
  },
  {
    title: "Videos",
    description:
      "Record precious moments that will never fade away.",
    icon: "🎥",
  },
  {
    title: "Memories",
    description:
      "Keep your favorite photos and stories together in one safe place.",
    icon: "📷",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-pink-50/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Everything you need to preserve your legacy
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Beautifully designed to help you leave love, not regrets.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl">{feature.icon}</div>

              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}