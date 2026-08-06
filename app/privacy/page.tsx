import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Forever Alive",
  description: "How Forever Alive collects, uses, retains, shares, and protects personal information.",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", "zh-Hans": "/zh/privacy" } },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentPage
      document={legalDocuments.privacyEnglish}
      language="en"
      alternateHref="/zh/privacy"
      alternateLabel="简体中文"
      noticeTitle="Important"
      notice="Forever Alive may store highly personal content. Only upload information you have the right to store and share, and carefully review recipients, contact details, delivery conditions, and Safety Check settings."
      closingTitle="Your memories belong to you."
      closingText="Protecting your letters, memories, recipient information, and digital legacy remains one of our highest priorities."
    />
  );
}
