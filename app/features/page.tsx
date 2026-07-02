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
        "Record your voice so your family can always hear your encouragement and love.",
    },
    {
      title: "Videos",
      icon: "🎥",
      description:
        "Capture life's most meaningful stories and preserve them forever.",
    },
    {
      title: "Memories",
      icon: "📷",
      description:
        "Organize photos and memories into a timeless digital legacy.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
          Features
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Everything you need to preserve your legacy
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
          Forever Alive helps you preserve your love through letters, voice,
          videos, and memories—so your family can always feel connected to you.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-pink-100 bg-white p-10 shadow-sm"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h2 className="mt-6 text-2xl font-semibold">
              {feature.title}
            </h2>

            <p className="mt-4 text-gray-500 leading-8">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}