import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "隐私政策 | Forever Alive",
  description: "Forever Alive 收集、使用、保存、共享和保护个人信息的完整说明。",
  alternates: { canonical: "/zh/privacy", languages: { en: "/privacy", "zh-Hans": "/zh/privacy" } },
};

export default function ChinesePrivacyPage() {
  return (
    <LegalDocumentPage
      document={legalDocuments.privacyChinese}
      language="zh"
      alternateHref="/privacy"
      alternateLabel="English"
      noticeTitle="重要提示"
      notice="Forever Alive 可能保存高度私密的内容。请仅上传您有权保存和分享的信息，并仔细核对收件人、联系方式、发送条件和 Safety Check 设置。"
      closingTitle="您的回忆属于您。"
      closingText="保护您的信件、回忆、收件人信息和数字遗产，始终是我们的重要责任。"
    />
  );
}
