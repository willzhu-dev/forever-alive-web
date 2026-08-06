import Link from "next/link";

import type { LegalDocument } from "@/lib/legalContent";

type LegalDocumentPageProps = {
  document: LegalDocument;
  language: "en" | "zh";
  alternateHref: string;
  alternateLabel: string;
  noticeTitle: string;
  notice: string;
  closingTitle: string;
  closingText: string;
};

export default function LegalDocumentPage({
  document,
  language,
  alternateHref,
  alternateLabel,
  noticeTitle,
  notice,
  closingTitle,
  closingText,
}: LegalDocumentPageProps) {
  return (
    <main className="bg-white" lang={language === "zh" ? "zh-Hans" : "en"}>
      <section className="bg-gradient-to-b from-pink-50 via-white to-white py-20 sm:py-28">
        <div className="page-container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-700">
                {document.title}
              </span>
              <Link
                href={alternateHref}
                className="rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-700 transition hover:border-pink-300 hover:bg-pink-50"
                hrefLang={language === "zh" ? "en" : "zh-Hans"}
              >
                {alternateLabel}
              </Link>
            </div>

            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {document.title}
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600 sm:text-xl">
              {document.summary}
            </p>
            <p className="mt-6 text-sm text-gray-500">
              {language === "zh" ? "生效日期" : "Effective date"}: {document.effectiveDate}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-container">
          <article className="mx-auto max-w-5xl rounded-[32px] border border-pink-100 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
            <aside className="mb-14 rounded-3xl bg-pink-50 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900">{noticeTitle}</h2>
              <p className="mt-3 leading-8 text-gray-700">{notice}</p>
            </aside>

            <div className="space-y-14">
              {document.sections.map((section) => (
                <section key={`${section.number}-${section.title}`}>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {section.number}. {section.title}
                  </h2>
                  <div className="mt-6 space-y-4 leading-8 text-gray-600">
                    {section.items.map((item, index) =>
                      item.type === "bullet" ? (
                        <div key={index} className="flex gap-3 pl-1">
                          <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-500" />
                          <p>{item.text}</p>
                        </div>
                      ) : (
                        <p key={index}>{item.text}</p>
                      ),
                    )}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-pink-50 py-20">
        <div className="page-container text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{closingTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">{closingText}</p>
          <a
            href="mailto:hello@forever-alive.com"
            className="mt-8 inline-flex rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            hello@forever-alive.com
          </a>
        </div>
      </section>
    </main>
  );
}
