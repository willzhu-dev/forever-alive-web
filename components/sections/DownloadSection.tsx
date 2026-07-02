export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[40px] bg-gradient-to-br from-pink-500 to-pink-400 px-8 py-20 text-center text-white shadow-2xl md:px-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            Be the first to experience
            <br />
            Forever Alive
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pink-100">
            We're preparing our first public release.
            Join us and help preserve the moments,
            memories and messages that matter most.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-pink-500 transition hover:scale-105">
              Download on the App Store
            </button>

            <button className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-pink-500">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}