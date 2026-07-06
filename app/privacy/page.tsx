import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Forever Alive",
  description: "Learn how Forever Alive collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 via-white to-white py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Privacy Policy
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Your privacy matters.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-500">
              Forever Alive is built on trust. We are committed to protecting
              your personal information, memories, and digital legacy with the
              highest standards of privacy and security.
            </p>

            <p className="mt-6 text-sm text-gray-400">
              Last Updated: July 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-14 rounded-[32px] border border-pink-100 bg-white p-10 shadow-sm">

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                1. Information We Collect
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We may collect information that you voluntarily provide,
                including your account information, profile details, uploaded
                photos, videos, voice recordings, written messages, emergency
                contacts, and other content you choose to preserve.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                2. How We Use Your Information
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-gray-600">
                <li>Provide and improve Forever Alive services.</li>
                <li>Deliver scheduled messages and digital memories.</li>
                <li>Maintain account security.</li>
                <li>Respond to support requests.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                3. Data Security
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Your content is stored securely using encrypted cloud
                infrastructure. Access is restricted to authorized systems, and
                sensitive information is protected using industry best
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                4. Data Sharing
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Forever Alive does not sell your personal information. We only
                share information when required by law or when necessary to
                provide essential services through trusted technology partners.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                5. Your Rights
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-gray-600">
                <li>Access your personal information.</li>
                <li>Update or correct your information.</li>
                <li>Delete your account and associated data.</li>
                <li>Export your stored content where applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                6. Cookies
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Our website may use cookies to improve performance, remember
                your preferences, and analyze anonymous traffic. You may manage
                cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                7. Contact Us
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                If you have any questions regarding this Privacy Policy, please
                contact us at:
              </p>

              <div className="mt-6 rounded-2xl bg-pink-50 p-6">
                <p className="font-semibold text-gray-900">
                  hello@forever-alive.com
                </p>

                <p className="mt-2 text-gray-600">
                  Forever Alive Support Team
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-pink-50 py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Your memories belong to you.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We believe preserving your legacy should never come at the expense
            of your privacy. Protecting your data will always remain one of our
            highest priorities.
          </p>
        </div>
      </section>
    </main>
  );
}