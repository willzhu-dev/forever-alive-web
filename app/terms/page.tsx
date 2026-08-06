import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Terms of Service | Forever Alive",
  description: "The complete terms governing use of the Forever Alive app, website, and related services.",
  alternates: { canonical: "/terms", languages: { en: "/terms", "zh-Hans": "/zh/terms" } },
};

export default function TermsPage() {
  return (
    <LegalDocumentPage
      document={legalDocuments.termsEnglish}
      language="en"
      alternateHref="/zh/terms"
      alternateLabel="简体中文"
      noticeTitle="Important"
      notice="Forever Alive is a digital memory and message-delivery service. It is not an emergency response, medical monitoring, legal, escrow, fiduciary, or estate-planning service."
      closingTitle="Thank you for choosing Forever Alive."
      closingText="These terms are designed to set clear expectations for a secure, respectful, and reliable service."
    />
  );
}
