import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-20 px-8">

        <div className="max-w-xl">

          <span className="rounded-full bg-pink-100 px-4 py-2 text-pink-600">
            Coming Soon
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight">
            Your love
            <br />
            lives on.
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-500">
            Prepare heartfelt messages,
            letters, voice recordings,
            videos and memories for
            the people who matter most.
          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-pink-500 px-8 py-4 text-white">
              Download App
            </button>

            <button className="rounded-full border px-8 py-4">
              Learn More
            </button>

          </div>

        </div>

        <PhoneMockup />

      </div>

    </section>
  );
}