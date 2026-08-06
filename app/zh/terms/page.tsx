import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { legalDocuments } from "@/lib/legalContent";

export const metadata: Metadata = {
  title: "服务条款 | Forever Alive",
  description: "适用于 Forever Alive 应用、网站和相关服务的完整服务条款。",
  alternates: { canonical: "/zh/terms", languages: { en: "/terms", "zh-Hans": "/zh/terms" } },
};

export default function ChineseTermsPage() {
  return (
    <LegalDocumentPage
      document={legalDocuments.termsChinese}
      language="zh"
      alternateHref="/terms"
      alternateLabel="English"
      noticeTitle="重要提示"
      notice="Forever Alive 是数字回忆保存和信息发送服务，并非紧急救援、医疗监护、法律、信托、托管或遗产规划服务。"
      closingTitle="感谢您选择 Forever Alive。"
      closingText="本条款旨在为安全、尊重且可靠的服务建立清晰规则。"
    />
  );
}
