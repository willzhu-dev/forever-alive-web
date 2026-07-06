export default function FeaturesPage() {
  const features = [
    {
      title: "Letters",
      icon: "💌",
      description:
        "Write heartfelt letters that can be delivered to your loved ones when the moment matters most.",
    },
    {
      title: "Voice Messages",
      icon: "🎙️",
      description:
        "Record meaningful voice recordings so your family can always hear your encouragement, warmth, and love.",
    },
    {
      title: "Videos",
      icon: "🎥",
      description:
        "Capture life's most meaningful stories and preserve special moments forever.",
    },
    {
      title: "Memories",
      icon: "📷",
      description:
        "Collect photos, notes, and milestones in one beautiful timeline for future generations.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-28">
        <div className="container text-center">
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            Features
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Everything you need
            <br />
            to preserve your legacy.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-500">
            Forever Alive helps you preserve your voice, memories,
            letters and videos, so the people you love can always
            feel your presence.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-5xl">{feature.icon}</div>

                <h2 className="mt-8 text-3xl font-bold">
                  {feature.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-pink-50 py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold">
            Preserve the moments that matter most.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Every message, photo, voice recording and memory is safely
            preserved, ready to bring comfort when it is needed most.
          </p>

          <button className="mt-10 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600">
            Download the App
          </button>
        </div>
      </section>
    </main>
  );
}