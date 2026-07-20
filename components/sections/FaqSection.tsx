"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Forever Alive?",
    answer:
      "Forever Alive is a private digital legacy platform that lets you preserve letters, voice recordings, videos, photos, and meaningful memories for the people you love.",
  },
  {
    question: "Who can receive my messages?",
    answer:
      "You can choose family members, friends, or anyone important to you as a recipient. Each message can be assigned to the people you want to receive it.",
  },
  {
    question: "When will my messages be delivered?",
    answer:
      "You can choose how and when eligible messages should be delivered. Forever Alive is designed to help preserve your wishes and make sure your loved ones receive your memories at the right time.",
  },
  {
    question: "Are my memories private and secure?",
    answer:
      "Your memories are private and are intended only for you and the recipients you select. We use modern security practices to help protect your personal information and stored content.",
  },
  {
    question: "Can I update or delete a message later?",
    answer:
      "Yes. You can return to your account to edit, update, or remove your saved memories and recipient information before delivery.",
  },
  {
    question: "What kinds of memories can I save?",
    answer:
      "You can preserve written letters, voice recordings, videos, photos, and other meaningful content that helps tell your story and share your love.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  return (
    <section
  id="faq"
  className="page-section scroll-mt-20 bg-pink-50/40"
>
      <div className="page-container">
        {/* Heading */}
        <div className="section-header">
          <span className="inline-flex rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Everything you need to know.
          </h2>

          <p className="text-lg text-gray-500">
            Learn more about preserving your memories and sharing your legacy
            with the people who matter most.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-pink-200 shadow-[0_14px_40px_rgba(236,72,153,0.09)]"
                    : "border-gray-100 shadow-sm hover:border-pink-100"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-pink-500 text-white"
                        : "bg-pink-50 text-pink-500"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-5 w-5"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </span>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 pr-16 text-base leading-7 text-gray-500 sm:px-8 sm:pr-20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact prompt */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-semibold text-pink-600 transition-colors hover:text-pink-700"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}