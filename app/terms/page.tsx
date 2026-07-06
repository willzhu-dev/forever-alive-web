import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Forever Alive",
  description: "Terms and Conditions for using Forever Alive.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-pink-50 via-white to-white py-28">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              Terms of Service
            </span>

            <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-500">
              These Terms of Service govern your use of Forever Alive. By
              accessing or using our website or mobile application, you agree
              to these terms.
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
                1. Acceptance of Terms
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                By creating an account or using Forever Alive, you acknowledge
                that you have read, understood, and agreed to these Terms of
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                2. Your Account
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under
                your account.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                3. User Content
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                You retain ownership of all content you upload, including
                letters, photos, videos, voice recordings and messages.
                Forever Alive stores this content solely for the purpose of
                providing the services you request.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                4. Acceptable Use
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-gray-600">
                <li>Do not upload unlawful or harmful content.</li>
                <li>Do not attempt to access another user's account.</li>
                <li>Do not interfere with the security of the platform.</li>
                <li>Do not misuse the services in violation of applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                5. Subscription & Payments
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Certain premium features may require a paid subscription.
                Pricing, billing cycles, and renewal terms will be clearly
                displayed before purchase.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                6. Intellectual Property
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                The Forever Alive name, logo, website design, and software are
                protected by intellectual property laws. You may not copy,
                distribute, or reproduce any part of the platform without
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                7. Limitation of Liability
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Forever Alive is provided on an "as is" basis. To the maximum
                extent permitted by law, we shall not be liable for indirect,
                incidental, or consequential damages arising from the use of
                our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                8. Termination
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We reserve the right to suspend or terminate accounts that
                violate these Terms of Service or applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                9. Changes to These Terms
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We may update these Terms from time to time. Any significant
                changes will be communicated through our website or application.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900">
                10. Contact
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Questions regarding these Terms may be directed to:
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

      {/* CTA */}
      <section className="bg-pink-50 py-24">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Thank you for choosing Forever Alive.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We are committed to providing a secure, reliable and meaningful
            platform to help preserve life's most precious memories for future
            generations.
          </p>
        </div>
      </section>
    </main>
  );
}