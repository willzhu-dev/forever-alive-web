import Link from "next/link";
import PhoneMockup from "@/components/common/PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-white to-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="absolute right-0 top-32 h-[420px] w-[420px] rounded-full bg-pink-100/40 blur-3xl" />

      <div className="container relative flex min-h-[88vh] flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between">

        {/* Left */}
       <div className="flex w-full max-w-[620px] flex-[0.48] flex-col items-center text-center lg:items-start lg:text-left">

          <span className="mb-6 rounded-full border border-pink-200 bg-pink-100/70 px-5 py-2 text-sm font-medium text-pink-600">
            🫧 Preserve Your Love Forever
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl xl:text-7xl">
            Your love
            <br />
            lives forever.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600 md:text-xl">
            Forever Alive helps you preserve your voice, memories,
            letters and videos, so the people you love can always
            feel your presence, even across time.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="#download"
              className="rounded-full bg-pink-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-pink-600"
            >
              Download App
            </Link>

            <Link
              href="/features"
              className="rounded-full border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-800 transition-all duration-300 hover:border-pink-300 hover:bg-pink-50"
            >
              Learn More
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 lg:justify-start">

            <div className="flex items-center gap-2">
              🔒 End-to-end Privacy
            </div>

            <div className="flex items-center gap-2">
              ☁ Secure Cloud Storage
            </div>

            <div className="flex items-center gap-2">
              ❤️ Built for Families
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-[0.52] items-center justify-center lg:justify-end">
            <PhoneMockup />
        </div>

      </div>
    </section>
  );
}