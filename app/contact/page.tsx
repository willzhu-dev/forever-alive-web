import Link from "next/link";

export const metadata = {
  title: "Contact | Forever Alive",
  description: "Get in touch with the Forever Alive team.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 via-white to-white py-28">
        <div className="container text-center">
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            Contact
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            We'd love to hear from you.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-500">
            Whether you have questions, feedback, partnership opportunities,
            or simply want to say hello, we're always happy to connect.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900">
                Contact Information
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                If you have any questions about Forever Alive, our upcoming
                mobile application, privacy, or business cooperation, please
                feel free to reach out.
              </p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-pink-500">
                    Email
                  </p>

                  <Link
                    href="mailto:hello@forever-alive.com"
                    className="mt-2 block text-lg text-gray-700 hover:text-pink-500"
                  >
                    hello@forever-alive.com
                  </Link>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-pink-500">
                    Website
                  </p>

                  <Link
                    href="https://forever-alive.com"
                    className="mt-2 block text-lg text-gray-700 hover:text-pink-500"
                  >
                    forever-alive.com
                  </Link>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-pink-500">
                    Response Time
                  </p>

                  <p className="mt-2 text-lg text-gray-700">
                    Usually within 24–48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900">
                Send us a message
              </h2>

              <p className="mt-4 leading-8 text-gray-500">
                We are continuously improving Forever Alive and appreciate
                every suggestion from our community.
              </p>

              <form className="mt-10 space-y-6">
                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-pink-400"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-pink-500 px-8 py-4 font-semibold text-white transition hover:bg-pink-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-50 py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold">
            Thank you for supporting Forever Alive.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            Together, we're building a safer and more meaningful way for
            people to preserve their love, memories, and legacy.
          </p>
        </div>
      </section>
    </main>
  );
}