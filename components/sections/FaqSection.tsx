const faqs = [
  {
    question: "What is Forever Alive?",
    answer:
      "Forever Alive helps you preserve meaningful messages, memories, voice recordings, and videos for the people you love.",
  },
  {
    question: "Who can receive my messages?",
    answer:
      "You can choose trusted family members, friends, or anyone you wish to receive your content.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your content is encrypted, securely stored, and only shared according to your instructions.",
  },
  {
    question: "When will the app be available?",
    answer:
      "We are currently preparing for our first public release. Join our waiting list to be among the first to experience Forever Alive.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-pink-50/30 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}