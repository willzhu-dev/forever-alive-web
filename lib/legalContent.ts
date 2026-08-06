export type LegalItem = { type: "paragraph" | "bullet"; text: string };

export type LegalDocument = {
  title: string;
  summary: string;
  effectiveDate: string;
  sections: Array<{ number: number; title: string; items: LegalItem[] }>;
};

export const legalDocuments = {
  "privacyEnglish": {
    "title": "Privacy Policy",
    "summary": "Forever Alive is designed to help people preserve personal letters, memories, and messages for chosen recipients. This Privacy Policy explains how we collect, use, store, disclose, and protect personal information when you use our mobile application, website, and related services.",
    "effectiveDate": "August 5, 2026",
    "sections": [
      {
        "number": 1,
        "title": "Who We Are",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive provides tools that allow users to create, store, organize, schedule, and deliver letters and other digital memories to people selected by the user."
          },
          {
            "type": "paragraph",
            "text": "In this Policy, “Forever Alive,” “we,” “us,” and “our” refer to the operator of the Forever Alive application and website. “You” refers to the person using the Service."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive is operated by 上海格算点信息科技有限公司 / Shanghai Gesuandian Information Technology Co., Ltd., a company registered in the People’s Republic of China."
          },
          {
            "type": "paragraph",
            "text": "For privacy questions, personal information requests, account deletion requests, or complaints, you may contact us at hello@forever-alive.com."
          }
        ]
      },
      {
        "number": 2,
        "title": "Scope of This Policy",
        "items": [
          {
            "type": "paragraph",
            "text": "This Policy applies to personal information processed through the Forever Alive mobile application, the forever-alive.com website, letter-viewing pages, customer support channels, and related delivery services."
          },
          {
            "type": "paragraph",
            "text": "This Policy does not apply to third-party websites, applications, or services that we do not control. Their privacy practices are governed by their own policies."
          }
        ]
      },
      {
        "number": 3,
        "title": "Information We Collect",
        "items": [
          {
            "type": "paragraph",
            "text": "The information we collect depends on how you use the Service."
          },
          {
            "type": "bullet",
            "text": "Name, display name, email address, telephone number, account identifier, language preference, and authentication information."
          },
          {
            "type": "bullet",
            "text": "Profile details and other information you voluntarily add to your account."
          },
          {
            "type": "bullet",
            "text": "Letters, written messages, titles, notes, photographs, videos, audio recordings, voice messages, attachments, and other memories."
          },
          {
            "type": "bullet",
            "text": "Delivery instructions, scheduled dates, Safety Check settings, status information, and preferences associated with your content."
          },
          {
            "type": "bullet",
            "text": "Recipient names, relationships, email addresses, telephone numbers, country codes, and other details you provide for delivery."
          },
          {
            "type": "bullet",
            "text": "Information about whether a delivery was attempted, completed, failed, or opened."
          },
          {
            "type": "bullet",
            "text": "Check-in frequency, last check-in time, next expected check-in time, missed check-ins, and related delivery triggers."
          },
          {
            "type": "bullet",
            "text": "Device type, operating system, application version, language, time zone, IP address, crash reports, diagnostic logs, and security events."
          },
          {
            "type": "bullet",
            "text": "Website interaction information, including pages requested, timestamps, browser type, referring page, and link-opening events."
          },
          {
            "type": "bullet",
            "text": "Messages, support requests, feedback, survey responses, and other communications you send to us."
          },
          {
            "type": "bullet",
            "text": "Subscription status, product purchased, renewal status, and transaction identifiers."
          },
          {
            "type": "bullet",
            "text": "Payment card details are normally processed by Apple or another payment provider and are not directly received or stored by Forever Alive."
          }
        ]
      },
      {
        "number": 4,
        "title": "How We Collect Information",
        "items": [
          {
            "type": "bullet",
            "text": "Directly from you when you create an account, create content, add recipients, configure delivery settings, contact support, or otherwise use the Service."
          },
          {
            "type": "bullet",
            "text": "Automatically from your device, browser, and interactions with the Service."
          },
          {
            "type": "bullet",
            "text": "From Apple, authentication providers, payment providers, email providers, SMS providers, hosting providers, and other service providers involved in operating the Service."
          },
          {
            "type": "bullet",
            "text": "From recipients when they open a secure delivery link or contact us regarding a delivered message."
          }
        ]
      },
      {
        "number": 5,
        "title": "How We Use Information",
        "items": [
          {
            "type": "bullet",
            "text": "Create, maintain, authenticate, and secure user accounts."
          },
          {
            "type": "bullet",
            "text": "Store, display, organize, edit, and retrieve user-created content."
          },
          {
            "type": "bullet",
            "text": "Deliver letters and notifications according to the user’s selected delivery method and instructions."
          },
          {
            "type": "bullet",
            "text": "Send delivery emails, SMS notifications, Safety Check reminders, security alerts, account messages, and service-related communications."
          },
          {
            "type": "bullet",
            "text": "Process subscriptions and verify purchase status."
          },
          {
            "type": "bullet",
            "text": "Provide customer support and respond to questions, requests, complaints, and disputes."
          },
          {
            "type": "bullet",
            "text": "Detect, investigate, prevent, and address fraud, abuse, unauthorized access, security incidents, and violations of our Terms."
          },
          {
            "type": "bullet",
            "text": "Monitor reliability, diagnose errors, improve performance, and develop new features."
          },
          {
            "type": "bullet",
            "text": "Comply with legal obligations, enforce agreements, and protect the rights, safety, and property of users, recipients, Forever Alive, and others."
          },
          {
            "type": "bullet",
            "text": "Use information for another purpose disclosed to you at the time of collection or with your consent."
          }
        ]
      },
      {
        "number": 6,
        "title": "Legal Bases for Processing",
        "items": [
          {
            "type": "paragraph",
            "text": "Where applicable law requires a legal basis, we process personal information on one or more of the following bases:"
          },
          {
            "type": "bullet",
            "text": "Performance of a contract: processing necessary to provide the Service you request."
          },
          {
            "type": "bullet",
            "text": "Consent: processing that you have affirmatively agreed to, which may be withdrawn where permitted by law."
          },
          {
            "type": "bullet",
            "text": "Legitimate interests: operating, securing, improving, and protecting the Service, provided those interests are not overridden by your rights."
          },
          {
            "type": "bullet",
            "text": "Legal obligation: processing required to comply with applicable laws, lawful requests, accounting obligations, or regulatory requirements."
          },
          {
            "type": "bullet",
            "text": "Protection of vital interests or other lawful bases where recognized by applicable law."
          }
        ]
      },
      {
        "number": 7,
        "title": "Recipient Information and Your Responsibilities",
        "items": [
          {
            "type": "paragraph",
            "text": "When you provide personal information about a recipient or another person, you represent that you have a lawful basis to provide and use that information for the intended delivery."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for ensuring that recipient contact information is accurate, current, and appropriate. You should not use Forever Alive to contact, surprise, threaten, harass, deceive, or harm another person."
          },
          {
            "type": "paragraph",
            "text": "Recipients may contact us to ask questions, report misuse, or request that delivery information associated with them be reviewed or removed, subject to applicable law and the rights of the account holder."
          },
          {
            "type": "paragraph",
            "text": "A recipient may also request that non-essential notifications stop or that their contact details be placed on a suppression list to prevent future user-initiated delivery attempts. We may retain the minimum information necessary to honor that request, and we may continue to send security, legal, or confirmation messages where permitted by law."
          }
        ]
      },
      {
        "number": 8,
        "title": "How We Share Information",
        "items": [
          {
            "type": "paragraph",
            "text": "We do not sell personal information. We may disclose information only as described below."
          },
          {
            "type": "paragraph",
            "text": "We may use providers that support cloud hosting, databases, authentication, file storage, content delivery, email delivery, SMS delivery, payment processing, analytics, monitoring, security, and customer support."
          },
          {
            "type": "paragraph",
            "text": "These providers may process information only as needed to perform services for us and must be subject to appropriate contractual and security obligations."
          },
          {
            "type": "paragraph",
            "text": "Content and sender information will be disclosed to the recipients selected by the user when a delivery condition is satisfied or when the user otherwise initiates delivery."
          },
          {
            "type": "paragraph",
            "text": "We may disclose information when reasonably necessary to comply with law, regulation, court order, lawful government request, legal process, or to investigate and protect against fraud, abuse, threats, security incidents, or harm."
          },
          {
            "type": "paragraph",
            "text": "Information may be transferred as part of a merger, acquisition, financing, restructuring, sale of assets, insolvency, or similar transaction, subject to applicable law."
          },
          {
            "type": "paragraph",
            "text": "We may disclose information when you direct us to do so or otherwise provide consent."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive may use third-party SMS service providers, including Tencent Cloud SMS or other messaging providers, to send verification codes, account notifications, Safety Check reminders, delivery notifications, and other service-related messages."
          },
          {
            "type": "paragraph",
            "text": "When SMS delivery is used, recipient phone numbers, country codes, message content necessary for transmission, delivery status, and related metadata may be processed by these providers solely for the purpose of delivering messages on our behalf."
          },
          {
            "type": "paragraph",
            "text": "Our SMS providers are contractually required to protect personal information and may not use it for their own marketing or unrelated purposes."
          }
        ]
      },
      {
        "number": 9,
        "title": "International Data Transfers",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive and its service providers may process information in countries other than the country where you live."
          },
          {
            "type": "paragraph",
            "text": "Where required, we use contractual, organizational, and technical safeguards intended to ensure that transferred personal information receives an appropriate level of protection."
          }
        ]
      },
      {
        "number": 10,
        "title": "Data Security",
        "items": [
          {
            "type": "paragraph",
            "text": "We use reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, alteration, disclosure, or destruction."
          },
          {
            "type": "bullet",
            "text": "Access controls and authentication protections."
          },
          {
            "type": "bullet",
            "text": "Encryption in transit and, where supported by our infrastructure, encryption at rest."
          },
          {
            "type": "bullet",
            "text": "Restricted administrative access and service-role controls."
          },
          {
            "type": "bullet",
            "text": "Monitoring, logging, backups, and incident-response procedures."
          },
          {
            "type": "bullet",
            "text": "Secure integration with trusted third-party communication providers for email and SMS delivery."
          },
          {
            "type": "paragraph",
            "text": "No method of electronic transmission or storage is completely secure. We cannot guarantee absolute security, uninterrupted availability, or that unauthorized access will never occur."
          },
          {
            "type": "paragraph",
            "text": "Use a strong and unique password, keep your device secure, do not share private delivery links, and notify us promptly if you suspect unauthorized access."
          }
        ]
      },
      {
        "number": 11,
        "title": "Private Delivery Links",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive may deliver content using a unique private link. Anyone who obtains that link may be able to access the associated content unless additional verification is enabled."
          },
          {
            "type": "paragraph",
            "text": "Users and recipients should not forward, publish, or share private delivery links with unauthorized persons."
          },
          {
            "type": "paragraph",
            "text": "We may record the first and subsequent times a delivery link is opened, together with limited technical information needed for security, delivery confirmation, and troubleshooting."
          },
          {
            "type": "paragraph",
            "text": "Delivery notifications may be transmitted through email or SMS, depending on the delivery method selected by the user. Message transmission is subject to the availability and reliability of third-party communication providers."
          }
        ]
      },
      {
        "number": 12,
        "title": "Data Retention",
        "items": [
          {
            "type": "paragraph",
            "text": "We retain personal information only for as long as reasonably necessary to provide the Service, fulfill delivery instructions, maintain security, resolve disputes, enforce agreements, and comply with legal obligations."
          },
          {
            "type": "bullet",
            "text": "Account data is generally retained while the account remains active."
          },
          {
            "type": "bullet",
            "text": "User-created content is generally retained until it is deleted by the user, delivered and removed under the selected settings, or the account is deleted."
          },
          {
            "type": "bullet",
            "text": "Delivery logs, security logs, support records, and transaction records may be retained for a reasonable period for fraud prevention, auditing, dispute resolution, and legal compliance."
          },
          {
            "type": "bullet",
            "text": "Backup copies may remain for a limited period until they are securely overwritten or deleted through normal backup rotation."
          },
          {
            "type": "paragraph",
            "text": "We may retain information longer where required by law, necessary to establish or defend legal claims, or required to protect users and the Service."
          },
          {
            "type": "bullet",
            "text": "SMS delivery records and delivery confirmation logs may be retained for a limited period to troubleshoot delivery issues, prevent abuse, and comply with applicable legal obligations."
          }
        ]
      },
      {
        "number": 13,
        "title": "Account and Data Deletion",
        "items": [
          {
            "type": "paragraph",
            "text": "You may request deletion of your account and associated personal information through the application, where available, or by contacting us."
          },
          {
            "type": "paragraph",
            "text": "Before deletion, we may need to verify your identity. Deleting an account may permanently remove letters, recipient details, delivery settings, and other content that has not yet been delivered."
          },
          {
            "type": "paragraph",
            "text": "Some information may be retained where required by law, needed for security or fraud prevention, necessary to complete a transaction already initiated, or otherwise permitted by applicable law."
          },
          {
            "type": "paragraph",
            "text": "Deleting content from your account may not remove copies that were already delivered to or independently saved by a recipient."
          }
        ]
      },
      {
        "number": 14,
        "title": "Your Privacy Rights",
        "items": [
          {
            "type": "paragraph",
            "text": "Depending on your location and applicable law, you may have the right to:"
          },
          {
            "type": "bullet",
            "text": "Request access to personal information we hold about you."
          },
          {
            "type": "bullet",
            "text": "Request correction of inaccurate or incomplete information."
          },
          {
            "type": "bullet",
            "text": "Request deletion of personal information."
          },
          {
            "type": "bullet",
            "text": "Request restriction of or object to certain processing."
          },
          {
            "type": "bullet",
            "text": "Withdraw consent where processing is based on consent."
          },
          {
            "type": "bullet",
            "text": "Receive certain information in a portable, machine-readable format."
          },
          {
            "type": "bullet",
            "text": "Opt out of direct marketing communications."
          },
          {
            "type": "bullet",
            "text": "Lodge a complaint with an appropriate data protection authority."
          },
          {
            "type": "paragraph",
            "text": "These rights may be subject to exceptions and verification requirements. We will not discriminate against you for exercising a right provided by applicable law."
          }
        ]
      },
      {
        "number": 15,
        "title": "Cookies and Similar Technologies",
        "items": [
          {
            "type": "paragraph",
            "text": "Our website may use cookies, local storage, server logs, and similar technologies to maintain sessions, remember preferences, secure the Service, measure performance, and understand how features are used."
          },
          {
            "type": "paragraph",
            "text": "Where legally required, we will request consent before using non-essential cookies or similar technologies."
          },
          {
            "type": "paragraph",
            "text": "You can manage cookies through your browser settings, although disabling certain technologies may affect Service functionality."
          }
        ]
      },
      {
        "number": 16,
        "title": "Communications",
        "items": [
          {
            "type": "paragraph",
            "text": "We may send transactional communications relating to authentication, account security, subscriptions, delivery status, Safety Checks, support, and material changes to the Service."
          },
          {
            "type": "paragraph",
            "text": "Transactional communications are necessary to operate the Service and may not always be optional."
          },
          {
            "type": "paragraph",
            "text": "Marketing communications, if offered, will include an appropriate way to unsubscribe."
          },
          {
            "type": "paragraph",
            "text": "Where you provide a mobile phone number, we may send service-related SMS messages, including account verification, security notifications, Safety Check reminders, and delivery notifications. We do not send promotional SMS messages without your consent where required by applicable law."
          }
        ]
      },
      {
        "number": 17,
        "title": "Third-Party Communication Providers",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive relies on trusted third-party communication providers to deliver emails, SMS messages, and other notifications required to operate the Service."
          },
          {
            "type": "paragraph",
            "text": "These providers may include Tencent Cloud SMS, email delivery providers, and other communication infrastructure providers. They process personal information only as necessary to transmit messages and support our Services."
          },
          {
            "type": "paragraph",
            "text": "We require these providers to implement appropriate technical and organizational safeguards to protect personal information in accordance with applicable law."
          }
        ]
      },
      {
        "number": 18,
        "title": "Children’s Privacy",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive is not intended for children under 13, or a higher minimum age where required by local law, unless the Service is expressly offered with appropriate parental or guardian authorization."
          },
          {
            "type": "paragraph",
            "text": "We do not knowingly collect personal information from children in violation of applicable law. If you believe a child has provided information without appropriate authorization, please contact us so that we can investigate and take appropriate action."
          }
        ]
      },
      {
        "number": 19,
        "title": "Third-Party Services",
        "items": [
          {
            "type": "paragraph",
            "text": "The Service may contain links to third-party websites or rely on third-party platforms, including Apple services, payment services, cloud infrastructure, email services, and SMS providers."
          },
          {
            "type": "paragraph",
            "text": "We are not responsible for the independent privacy practices of third parties. You should review their applicable privacy notices."
          }
        ]
      },
      {
        "number": 20,
        "title": "Data Breaches",
        "items": [
          {
            "type": "paragraph",
            "text": "If we become aware of a personal data breach, we will investigate, take reasonable steps to contain and remediate it, and provide notifications to affected individuals and authorities where required by applicable law."
          }
        ]
      },
      {
        "number": 21,
        "title": "Changes to This Policy",
        "items": [
          {
            "type": "paragraph",
            "text": "We may update this Privacy Policy to reflect changes in the Service, technology, law, or our data practices."
          },
          {
            "type": "paragraph",
            "text": "When changes are material, we may provide notice through the application, website, email, or another appropriate method. The effective date at the top identifies when the current version became effective."
          },
          {
            "type": "paragraph",
            "text": "Your continued use of the Service after an updated Policy becomes effective is subject to applicable law. Where required, we will request renewed consent."
          }
        ]
      },
      {
        "number": 22,
        "title": "Contact Us",
        "items": [
          {
            "type": "paragraph",
            "text": "For privacy questions, complaints, account deletion, access requests, or other data protection inquiries, contact:"
          }
        ]
      },
      {
        "number": 23,
        "title": "Service Providers",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive works with carefully selected third-party service providers to operate, secure, and improve the Service. These providers process personal information only as necessary to perform services on our behalf and are contractually required to protect such information in accordance with applicable laws."
          },
          {
            "type": "paragraph",
            "text": "Our current service providers include:"
          },
          {
            "type": "bullet",
            "text": "Supabase — Authentication, user accounts, database hosting, encrypted data storage, file storage, and backend infrastructure."
          },
          {
            "type": "bullet",
            "text": "Tencent Cloud SMS (or another equivalent SMS delivery provider) — Delivery of verification codes, Safety Check reminders, account notifications, delivery notifications, and other service-related SMS messages."
          },
          {
            "type": "bullet",
            "text": "Apple — In-App Purchases, subscription billing, payment processing, and App Store distribution. Forever Alive does not receive or store your payment card information."
          },
          {
            "type": "bullet",
            "text": "Vercel — Hosting and delivery of the Forever Alive website and secure letter-viewing pages."
          },
          {
            "type": "bullet",
            "text": "Resend — Transactional email delivery."
          },
          {
            "type": "paragraph",
            "text": "We may replace, remove, or add service providers from time to time as our Services evolve. Any such providers will be required to implement appropriate technical and organizational measures to safeguard personal information."
          }
        ]
      }
    ]
  },
  "privacyChinese": {
    "title": "隐私政策",
    "summary": "Forever Alive 帮助用户保存个人信件、回忆和消息，并按照用户设置向指定收件人发送内容。本隐私政策说明我们在您使用移动应用、网站、私密内容查看页面及相关服务时，如何收集、使用、存储、披露和保护个人信息。",
    "effectiveDate": "2026年8月5日",
    "sections": [
      {
        "number": 1,
        "title": "关于我们",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive 由上海格算点信息科技有限公司（Shanghai Gesuandian Information Technology Co., Ltd.，以下简称“我们”）运营。该公司在中华人民共和国注册成立。"
          },
          {
            "type": "paragraph",
            "text": "隐私问题、个人信息请求、账户删除、收件人投诉或退订请求，可发送至 hello@forever-alive.com。"
          }
        ]
      },
      {
        "number": 2,
        "title": "适用范围",
        "items": [
          {
            "type": "paragraph",
            "text": "本政策适用于 Forever Alive 移动应用、forever-alive.com 网站、私密内容查看页面、客户支持渠道、电子邮件和短信通知，以及与上述功能有关的个人信息处理活动。"
          },
          {
            "type": "paragraph",
            "text": "第三方独立运营的网站、应用或服务适用其自身的隐私规则；我们无法控制其独立处理行为。"
          }
        ]
      },
      {
        "number": 3,
        "title": "我们收集的信息",
        "items": [
          {
            "type": "paragraph",
            "text": "我们收集的信息取决于您使用的具体功能，包括："
          },
          {
            "type": "bullet",
            "text": "账户资料：姓名、显示名称、电子邮箱、电话号码、账户标识、语言、时区、认证信息和偏好设置。"
          },
          {
            "type": "bullet",
            "text": "用户内容：信件、文字、标题、照片、视频、音频、附件、回忆及其元数据。"
          },
          {
            "type": "bullet",
            "text": "发送设置：计划发送时间、发送方式、Safety Check 设置、状态、提醒和其他指示。"
          },
          {
            "type": "bullet",
            "text": "收件人资料：姓名、关系、电子邮箱、电话号码、国家或地区代码、通知偏好和发送状态。"
          },
          {
            "type": "bullet",
            "text": "技术资料：设备类型、操作系统、App 版本、IP 地址、浏览器、崩溃报告、日志、安全事件和访问时间。"
          },
          {
            "type": "bullet",
            "text": "交易与沟通资料：Apple 订阅状态、产品、续订、交易标识，以及您发送给客服的消息和投诉。我们不会获得完整银行卡信息。"
          }
        ]
      },
      {
        "number": 4,
        "title": "信息收集方式",
        "items": [
          {
            "type": "bullet",
            "text": "您在注册、创建内容、添加收件人、配置发送设置或联系客服时主动提供。"
          },
          {
            "type": "bullet",
            "text": "您的设备、浏览器和使用行为在运行、安全和诊断过程中自动产生。"
          },
          {
            "type": "bullet",
            "text": "Apple、认证、支付、邮件、短信、托管和其他服务提供商在提供服务时向我们返回必要状态。"
          },
          {
            "type": "bullet",
            "text": "收件人在打开安全链接、完成验证或联系我们时提供。"
          }
        ]
      },
      {
        "number": 5,
        "title": "我们如何使用信息",
        "items": [
          {
            "type": "bullet",
            "text": "创建、认证、维护和保护账户，并提供客户支持。"
          },
          {
            "type": "bullet",
            "text": "保存、整理、编辑、检索并按照设置发送信件和回忆。"
          },
          {
            "type": "bullet",
            "text": "发送验证、Safety Check、发送状态、安全、订阅、电子邮件和短信通知。"
          },
          {
            "type": "bullet",
            "text": "核验 Apple 购买和订阅状态，防止欺诈、滥用和未经授权的访问。"
          },
          {
            "type": "bullet",
            "text": "诊断故障、改善可靠性、履行法律义务、执行协议并保护相关人员的合法权益。"
          },
          {
            "type": "paragraph",
            "text": "我们不会将信件或回忆内容用于广告，不出售个人信息，也不会仅因用户提供了收件人联系方式而向收件人发送营销信息。"
          }
        ]
      },
      {
        "number": 6,
        "title": "处理个人信息的依据",
        "items": [
          {
            "type": "paragraph",
            "text": "我们根据履行合同、取得同意、履行法定义务、保护个人生命健康和财产安全，以及在法律允许范围内维护服务安全与合法权益等依据处理个人信息。"
          },
          {
            "type": "paragraph",
            "text": "当处理依赖您的同意，您可以依法撤回同意；撤回不影响此前处理的合法性，但可能导致相关功能无法继续提供。"
          }
        ]
      },
      {
        "number": 7,
        "title": "收件人信息与您的责任",
        "items": [
          {
            "type": "paragraph",
            "text": "当您提供他人的邮箱或电话时，您应确保具有合法、正当且必要的理由，并已履行适用法律要求的告知或同意义务。您应保持信息准确，不得利用本服务骚扰、威胁、欺骗或伤害他人。"
          },
          {
            "type": "paragraph",
            "text": "收件人可以联系我们举报滥用、提出投诉、要求审查或删除相关资料、停止非必要通知，或要求将联系方式加入拦截名单。为持续履行退订要求，我们可能保留最少量的抑制记录。"
          }
        ]
      },
      {
        "number": 8,
        "title": "信息共享与披露",
        "items": [
          {
            "type": "paragraph",
            "text": "我们不出售个人信息。我们仅在提供服务所必需的范围内向受约束的服务商、用户指定的收件人披露信息，或根据您的指示和同意进行披露。"
          },
          {
            "type": "paragraph",
            "text": "在法律程序、监管要求、安全调查、反欺诈、保护合法权益，或合并、融资、重组、资产转让等交易中，我们可能依法向主管机关、法院、专业顾问或交易相关方披露必要信息。"
          }
        ]
      },
      {
        "number": 9,
        "title": "跨境传输",
        "items": [
          {
            "type": "paragraph",
            "text": "我们在中国注册，但部分服务商及其基础设施可能位于其他国家或地区，因此个人信息可能在您所在地以外处理。"
          },
          {
            "type": "paragraph",
            "text": "我们将在适用法律要求的范围内履行安全评估、认证、标准合同、单独同意、告知或其他跨境传输义务，并采取合同、技术和组织措施保护相关信息。"
          }
        ]
      },
      {
        "number": 10,
        "title": "数据安全",
        "items": [
          {
            "type": "paragraph",
            "text": "我们采取合理的管理、技术和组织措施，包括访问控制、身份认证、传输加密、适用情况下的静态加密、权限隔离、日志、备份、监控和事件响应。"
          },
          {
            "type": "paragraph",
            "text": "任何电子传输或存储方式都无法保证绝对安全。您应使用高强度且唯一的密码，保护设备、验证码和私密链接，并在发现异常时立即联系我们。"
          }
        ]
      },
      {
        "number": 11,
        "title": "私密发送链接",
        "items": [
          {
            "type": "paragraph",
            "text": "内容可能通过唯一且受访问控制的链接交付。链接可能过期、被撤销或要求额外验证。获得链接的人可能访问相关内容，因此请勿转发、公开或与未授权人员共享链接或验证码。"
          },
          {
            "type": "paragraph",
            "text": "为确认发送、保障安全和排查故障，我们可能记录链接打开时间、次数、IP 地址、设备或浏览器类型及有限技术信息。"
          }
        ]
      },
      {
        "number": 12,
        "title": "信息保留",
        "items": [
          {
            "type": "paragraph",
            "text": "我们仅在提供服务、保存计划内容、履行发送指示、维护安全、处理争议、执行协议以及满足法律、税务和会计义务所必需的期限内保留信息。"
          },
          {
            "type": "bullet",
            "text": "账户有效期间通常保留账户资料；内容通常保留至用户删除、按照设置处理或账户删除。"
          },
          {
            "type": "bullet",
            "text": "发送、短信、安全、支持和交易记录可为防欺诈、审计、投诉和合规保留合理期限。"
          },
          {
            "type": "bullet",
            "text": "加密备份中的副本会随正常备份轮换逐步删除，法律另有要求的除外。"
          }
        ]
      },
      {
        "number": 13,
        "title": "账户与数据删除",
        "items": [
          {
            "type": "paragraph",
            "text": "您可以通过 App 内可用功能或联系我们申请删除账户。删除 App 不等于删除账户，也不会自动取消 Apple 订阅。我们可能先核验您的身份。"
          },
          {
            "type": "paragraph",
            "text": "删除通常会从活动系统中删除或去标识化账户资料和未发送内容；但法律记录、安全记录、交易记录、投诉材料、退订抑制记录和备份可能依法继续保留。已被收件人保存的副本不受我们控制。"
          }
        ]
      },
      {
        "number": 14,
        "title": "您的个人信息权利",
        "items": [
          {
            "type": "paragraph",
            "text": "在适用法律规定的范围内，您可以请求查阅、复制、更正、补充、删除、限制或拒绝处理，撤回同意，获取处理规则说明，或要求注销账户。"
          },
          {
            "type": "paragraph",
            "text": "我们可能核验身份，并可在保护他人权益、保存法定记录或法律允许的其他情况下限制请求。您也可以向有管辖权的个人信息保护机关投诉。"
          }
        ]
      },
      {
        "number": 15,
        "title": "Cookie 与类似技术",
        "items": [
          {
            "type": "paragraph",
            "text": "网站可能使用必要 Cookie、本地存储、服务器日志及类似技术维护会话、保存偏好、保障安全、诊断故障和衡量性能。非必要 Cookie 将在法律要求时取得同意。"
          },
          {
            "type": "paragraph",
            "text": "您可以通过浏览器管理 Cookie，但禁用必要技术可能导致部分功能无法正常工作。"
          }
        ]
      },
      {
        "number": 16,
        "title": "服务通信",
        "items": [
          {
            "type": "paragraph",
            "text": "我们可能发送账户验证、安全、订阅、Safety Check、发送状态、客户支持和重大服务变更等必要通信。交易性或安全性通信可能无法关闭。"
          },
          {
            "type": "paragraph",
            "text": "营销通信如有提供，将包含退订方式；未经适用法律要求的同意，我们不会发送营销短信。"
          }
        ]
      },
      {
        "number": 17,
        "title": "电子邮件与短信服务商",
        "items": [
          {
            "type": "paragraph",
            "text": "电子邮件和短信可由第三方基础设施发送。腾讯云短信及参与传输的电信运营商可能处理电话号码、国家或地区代码、短信模板、发送参数、时间、状态、错误码和必要元数据。运营商资费可能适用。"
          },
          {
            "type": "paragraph",
            "text": "服务商仅可为发送、故障排查、安全与合规目的处理必要信息，不得将其用于自身营销。"
          }
        ]
      },
      {
        "number": 18,
        "title": "未成年人个人信息",
        "items": [
          {
            "type": "paragraph",
            "text": "本服务不面向无法依法独立同意个人信息处理或订立本条款的未成年人。需要监护人授权的用户，只能在获得合法授权和监督后使用服务。"
          },
          {
            "type": "paragraph",
            "text": "如您认为我们违法收集了未成年人信息，请联系我们，我们将核实并依法采取删除或其他措施。"
          }
        ]
      },
      {
        "number": 19,
        "title": "第三方服务",
        "items": [
          {
            "type": "paragraph",
            "text": "服务可能链接或依赖 Apple、云服务、认证、支付、邮件、短信和其他第三方。第三方独立处理活动受其自身政策约束，请在使用前阅读相关条款。"
          }
        ]
      },
      {
        "number": 20,
        "title": "个人信息安全事件",
        "items": [
          {
            "type": "paragraph",
            "text": "如发生或可能发生个人信息泄露、篡改或丢失，我们将及时采取补救措施，并按照适用法律向有关个人和主管机关告知事件情况、潜在影响、已采取措施及降低风险的建议。"
          }
        ]
      },
      {
        "number": 21,
        "title": "政策更新",
        "items": [
          {
            "type": "paragraph",
            "text": "我们可能因服务、技术、法律或处理实践变化更新本政策。更新版本将公布新的生效日期；重大变更将通过 App、网站、电子邮件、短信或法律要求的其他方式另行通知，并在必要时重新取得同意。"
          }
        ]
      },
      {
        "number": 22,
        "title": "联系我们",
        "items": [
          {
            "type": "paragraph",
            "text": "个人信息请求、账户删除、收件人投诉、退订、滥用举报和其他隐私问题，请发送至 hello@forever-alive.com。请提供足够信息，以便我们核验身份、定位相关记录并处理请求。"
          }
        ]
      },
      {
        "number": 23,
        "title": "服务提供商与子处理者",
        "items": [
          {
            "type": "paragraph",
            "text": "我们审慎选择为本服务提供基础设施的服务商，并通过合同和安全要求限制其处理范围。当前主要服务商包括："
          },
          {
            "type": "bullet",
            "text": "Supabase：身份认证、账户、托管数据库、文件存储及后端基础设施。"
          },
          {
            "type": "bullet",
            "text": "腾讯云短信及相关电信运营商：验证码、Safety Check 提醒、账户和发送通知。"
          },
          {
            "type": "bullet",
            "text": "Apple：App Store 分发、App 内购买、订阅计费和支付处理。"
          },
          {
            "type": "bullet",
            "text": "Vercel：网站和安全内容查看页面的托管、分发、性能与安全日志。"
          },
          {
            "type": "bullet",
            "text": "Resend：交易性电子邮件发送。"
          },
          {
            "type": "paragraph",
            "text": "随着服务调整，我们可能更换、移除或增加服务商；新增服务商也必须实施适当的技术和组织保护措施。"
          }
        ]
      }
    ]
  },
  "termsEnglish": {
    "title": "Terms of Service",
    "summary": "These Terms of Service govern your access to and use of the Forever Alive mobile application, website, private delivery pages, email and SMS delivery features, and related services. Please read them carefully before using Forever Alive.",
    "effectiveDate": "August 5, 2026",
    "sections": [
      {
        "number": 1,
        "title": "Acceptance of These Terms",
        "items": [
          {
            "type": "paragraph",
            "text": "By accessing or using Forever Alive, creating an account, uploading content, selecting a recipient, providing recipient contact information, or scheduling a delivery, you agree to these Terms and our Privacy Policy."
          },
          {
            "type": "paragraph",
            "text": "If you do not agree to these Terms, do not use the Service."
          },
          {
            "type": "paragraph",
            "text": "If you use the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms."
          }
        ]
      },
      {
        "number": 2,
        "title": "Eligibility",
        "items": [
          {
            "type": "paragraph",
            "text": "You must be at least 13 years old, or the higher minimum age required in your jurisdiction, to create an account unless an authorized parent or guardian has validly consented to your use."
          },
          {
            "type": "paragraph",
            "text": "You represent that you are legally capable of entering into a binding agreement and are not prohibited from using the Service under applicable law."
          }
        ]
      },
      {
        "number": 3,
        "title": "The Forever Alive Service",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive allows users to create, upload, edit, store, organize, schedule, and deliver letters and other digital memories to selected recipients."
          },
          {
            "type": "paragraph",
            "text": "Features may include scheduled delivery, immediate delivery, Safety Check-based delivery, email delivery, SMS notification, private delivery links, recipient management, subscriptions, and related services."
          },
          {
            "type": "paragraph",
            "text": "Features may vary by country, device, application version, subscription plan, availability of third-party providers, telecommunications carriers, and applicable law."
          }
        ]
      },
      {
        "number": 4,
        "title": "Not an Emergency or Monitoring Service",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive does not monitor your physical condition, health, safety, location, or life status."
          },
          {
            "type": "paragraph",
            "text": "A missed Safety Check does not establish that you are injured, missing, deceased, or in danger. Safety Check functionality relies on automated timing and user-selected settings and may be affected by device, account, network, server, configuration, or third-party failures."
          },
          {
            "type": "paragraph",
            "text": "Do not rely on Forever Alive, its emails, SMS messages, notifications, or delivery links for emergency assistance, medical monitoring, welfare checks, or time-critical communications."
          },
          {
            "type": "paragraph",
            "text": "In an emergency, contact local emergency services and trusted persons directly."
          }
        ]
      },
      {
        "number": 5,
        "title": "Not a Will or Legal Instrument",
        "items": [
          {
            "type": "paragraph",
            "text": "Content stored in Forever Alive is not automatically a will, trust, testamentary instrument, advance directive, power of attorney, beneficiary designation, contract, or legally binding instruction."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive does not provide legal advice and does not determine whether content satisfies legal formalities in any jurisdiction."
          },
          {
            "type": "paragraph",
            "text": "Consult a qualified lawyer for estate planning, inheritance, healthcare directives, guardianship, financial instructions, or other legal matters."
          }
        ]
      },
      {
        "number": 6,
        "title": "Your Account",
        "items": [
          {
            "type": "bullet",
            "text": "You must provide accurate, current, and complete account information."
          },
          {
            "type": "bullet",
            "text": "You are responsible for maintaining the confidentiality of your credentials and securing devices used to access the Service."
          },
          {
            "type": "bullet",
            "text": "You are responsible for activities performed through your account unless caused by our failure to use reasonable security measures."
          },
          {
            "type": "bullet",
            "text": "You must notify us promptly if you suspect unauthorized access, credential theft, or account compromise."
          },
          {
            "type": "bullet",
            "text": "You may not transfer, sell, rent, or share your account in a way that compromises security or violates these Terms."
          }
        ]
      },
      {
        "number": 7,
        "title": "Your Content",
        "items": [
          {
            "type": "paragraph",
            "text": "You retain ownership of letters, messages, photographs, videos, audio recordings, and other content you submit to Forever Alive."
          },
          {
            "type": "paragraph",
            "text": "You grant Forever Alive a limited, worldwide, non-exclusive, royalty-free license to host, store, reproduce, process, transmit, format, display, and deliver your content only as reasonably necessary to operate, secure, improve, and provide the Service according to your instructions."
          },
          {
            "type": "paragraph",
            "text": "This license ends when the content is deleted from active systems, subject to reasonable backup retention, legal obligations, completed deliveries, and other provisions of these Terms."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive does not acquire ownership of your content merely because you upload it."
          }
        ]
      },
      {
        "number": 8,
        "title": "Your Representations About Content",
        "items": [
          {
            "type": "paragraph",
            "text": "You represent and warrant that:"
          },
          {
            "type": "bullet",
            "text": "You own the content or have all permissions and rights necessary to upload, store, and deliver it."
          },
          {
            "type": "bullet",
            "text": "The content and your use of the Service do not violate privacy, publicity, confidentiality, intellectual property, contractual, or other rights."
          },
          {
            "type": "bullet",
            "text": "You have a lawful basis to provide recipient names, email addresses, telephone numbers, country codes, and other personal information."
          },
          {
            "type": "bullet",
            "text": "Your content is not unlawful, fraudulent, defamatory, threatening, abusive, exploitative, or designed to cause harm."
          },
          {
            "type": "bullet",
            "text": "Your content does not contain malware, destructive code, or material intended to compromise another person’s device or account."
          }
        ]
      },
      {
        "number": 9,
        "title": "Recipient Information",
        "items": [
          {
            "type": "paragraph",
            "text": "You are responsible for ensuring that recipient information is accurate and that delivery to the recipient is lawful and appropriate."
          },
          {
            "type": "paragraph",
            "text": "Before providing another person’s email address or telephone number, you must have a lawful and appropriate reason to use that information for the intended delivery."
          },
          {
            "type": "paragraph",
            "text": "You must not use Forever Alive to send unsolicited marketing, repeated unwanted messages, deceptive communications, threats, harassment, or content that could reasonably endanger or seriously distress another person."
          },
          {
            "type": "paragraph",
            "text": "A recipient may contact us to report abuse, challenge a delivery, request review of personal information associated with them, or request that future communications be stopped where applicable."
          }
        ]
      },
      {
        "number": 10,
        "title": "Delivery Instructions",
        "items": [
          {
            "type": "paragraph",
            "text": "You are responsible for reviewing each message, recipient, email address, telephone number, country code, sender name, delivery method, scheduled date, and Safety Check setting before saving or activating delivery."
          },
          {
            "type": "paragraph",
            "text": "You authorize Forever Alive and its service providers to use the contact information you provide to carry out your selected delivery instructions."
          },
          {
            "type": "paragraph",
            "text": "Once a message has been delivered, it may not be possible to retrieve, revoke, or delete copies received or saved by the recipient."
          },
          {
            "type": "paragraph",
            "text": "You should periodically review and update recipient contact information and delivery instructions."
          }
        ]
      },
      {
        "number": 11,
        "title": "No Guarantee of Delivery",
        "items": [
          {
            "type": "paragraph",
            "text": "We aim to provide reliable delivery, but we do not guarantee that any message, email, SMS, notification, or private link will be delivered, received, opened, or read at a particular time or at all."
          },
          {
            "type": "paragraph",
            "text": "Delivery may fail or be delayed because of incorrect information, spam filtering, blocked messages, changed telephone numbers, unavailable recipients, network outages, provider restrictions, carrier rules, device settings, roaming restrictions, account suspension, force majeure, or other circumstances outside our control."
          },
          {
            "type": "paragraph",
            "text": "Telecommunications carriers and messaging providers may reject, filter, delay, modify, or block SMS messages in accordance with their policies, local regulations, technical requirements, or anti-spam controls."
          },
          {
            "type": "paragraph",
            "text": "A status such as “sent,” “delivered,” or “opened” may be based on information supplied by third-party providers and may not conclusively prove receipt or reading by the intended individual."
          }
        ]
      },
      {
        "number": 12,
        "title": "Safety Check Delivery",
        "items": [
          {
            "type": "paragraph",
            "text": "Safety Check delivery is based on the interval and conditions selected by the user."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for checking in before the applicable deadline and for keeping your account, device, notification settings, telephone number, and internet connection operational."
          },
          {
            "type": "paragraph",
            "text": "We may provide reminders, grace periods, confirmations, emails, SMS messages, or additional safeguards, but those features do not create a duty to monitor you or contact emergency services."
          },
          {
            "type": "paragraph",
            "text": "Before enabling Safety Check delivery, carefully consider the emotional, personal, legal, and practical consequences of an incorrect or premature delivery."
          }
        ]
      },
      {
        "number": 13,
        "title": "Acceptable Use",
        "items": [
          {
            "type": "paragraph",
            "text": "You may not use the Service to:"
          },
          {
            "type": "bullet",
            "text": "Violate any law, regulation, court order, contractual obligation, telecommunications rule, or third-party right."
          },
          {
            "type": "bullet",
            "text": "Harass, stalk, threaten, intimidate, exploit, blackmail, impersonate, deceive, or harm another person."
          },
          {
            "type": "bullet",
            "text": "Distribute illegal, hateful, sexually exploitative, violent, abusive, or malicious content."
          },
          {
            "type": "bullet",
            "text": "Upload content involving child sexual abuse or exploitation."
          },
          {
            "type": "bullet",
            "text": "Send spam, unauthorized advertising, mass messaging, scams, phishing, or fraudulent requests."
          },
          {
            "type": "bullet",
            "text": "Use recipient telephone numbers without an appropriate lawful basis or in violation of applicable consent, privacy, anti-spam, or telecommunications requirements."
          },
          {
            "type": "bullet",
            "text": "Attempt to access another account, private delivery link, system, or data without authorization."
          },
          {
            "type": "bullet",
            "text": "Reverse engineer, probe, scan, disrupt, overload, scrape, or circumvent security or usage restrictions."
          },
          {
            "type": "bullet",
            "text": "Introduce viruses, malware, automated attacks, or harmful code."
          },
          {
            "type": "bullet",
            "text": "Use the Service to make time-critical threats, instructions, financial demands, or emergency communications."
          }
        ]
      },
      {
        "number": 14,
        "title": "Content Review and Enforcement",
        "items": [
          {
            "type": "paragraph",
            "text": "We do not undertake a general obligation to monitor all private content."
          },
          {
            "type": "paragraph",
            "text": "We may investigate, restrict, preserve, remove, or disclose content where reasonably necessary to operate or secure the Service, respond to reports, enforce these Terms, prevent harm, or comply with law."
          },
          {
            "type": "paragraph",
            "text": "We may suspend or terminate accounts involved in serious or repeated violations."
          }
        ]
      },
      {
        "number": 15,
        "title": "Subscriptions and Payments",
        "items": [
          {
            "type": "paragraph",
            "text": "Some features may require a paid subscription or one-time purchase."
          },
          {
            "type": "bullet",
            "text": "Prices, billing periods, included features, and renewal terms will be displayed before purchase."
          },
          {
            "type": "bullet",
            "text": "Purchases made through Apple are processed under Apple’s applicable payment terms."
          },
          {
            "type": "bullet",
            "text": "Subscriptions may automatically renew unless cancelled before the renewal date through the platform used to purchase them."
          },
          {
            "type": "bullet",
            "text": "Deleting the application or your Forever Alive account may not automatically cancel an App Store subscription."
          },
          {
            "type": "bullet",
            "text": "Refunds are handled according to applicable law and the rules of the payment platform."
          },
          {
            "type": "paragraph",
            "text": "We may change prices or subscription features prospectively, with notice where required."
          }
        ]
      },
      {
        "number": 16,
        "title": "Free Trials and Promotions",
        "items": [
          {
            "type": "paragraph",
            "text": "Free trials, promotional credits, introductory pricing, or limited offers may be subject to additional terms, eligibility restrictions, expiration dates, and automatic renewal conditions disclosed at the time of enrollment."
          }
        ]
      },
      {
        "number": 17,
        "title": "Third-Party Services",
        "items": [
          {
            "type": "paragraph",
            "text": "The Service may rely on or link to third-party services, including Apple, Supabase, Vercel, cloud infrastructure, authentication providers, payment processors, email providers, Tencent Cloud SMS or equivalent SMS providers, telecommunications carriers, and external websites."
          },
          {
            "type": "paragraph",
            "text": "We do not control and are not responsible for third-party availability, content, security, pricing, terms, telecommunications coverage, or independent actions."
          },
          {
            "type": "paragraph",
            "text": "Your use of a third-party service may also be governed by that provider’s terms and privacy policy."
          }
        ]
      },
      {
        "number": 18,
        "title": "SMS and Electronic Communications",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive may use email, SMS, push notifications, or other electronic communications to provide account verification, security alerts, Safety Check reminders, delivery notifications, service updates, and other communications necessary to operate the Service."
          },
          {
            "type": "paragraph",
            "text": "SMS delivery may be provided through Tencent Cloud SMS, another equivalent messaging provider, and participating telecommunications carriers."
          },
          {
            "type": "paragraph",
            "text": "To send an SMS, we and our providers may process the recipient’s telephone number, country or region code, sender or template information, delivery parameters, delivery status, timestamps, error codes, and other technical metadata necessary to transmit and troubleshoot the message."
          },
          {
            "type": "paragraph",
            "text": "You represent that you have an appropriate lawful basis to provide the recipient’s telephone number and request that a service-related notification be sent to that number."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive SMS messages are intended for transactional and service-related purposes. You may not use the Service to send advertising, promotions, bulk messages, or other communications that require consent unless all applicable requirements have been satisfied."
          },
          {
            "type": "paragraph",
            "text": "Message frequency depends on the user’s account activity, Safety Check settings, and delivery instructions."
          },
          {
            "type": "paragraph",
            "text": "Standard messaging, mobile data, international SMS, and roaming charges imposed by a recipient’s telecommunications provider may apply. Forever Alive is not responsible for charges imposed by a carrier or device service provider."
          },
          {
            "type": "paragraph",
            "text": "A recipient who believes that an SMS was sent without authorization, or who wishes to stop future service-related SMS communications where applicable, may contact us at hello@forever-alive.com."
          },
          {
            "type": "paragraph",
            "text": "An opt-out request may prevent future SMS notifications but may not affect messages already transmitted or other communications that are legally required or necessary for account security."
          },
          {
            "type": "paragraph",
            "text": "SMS should not be used as the sole method for urgent, emergency, legal, medical, or time-sensitive communications."
          }
        ]
      },
      {
        "number": 19,
        "title": "Intellectual Property",
        "items": [
          {
            "type": "paragraph",
            "text": "The Forever Alive name, application, website, software, design, graphics, interfaces, logos, documentation, and other materials provided by us are owned by or licensed to Forever Alive and are protected by applicable intellectual property laws."
          },
          {
            "type": "paragraph",
            "text": "Except for rights expressly granted under these Terms, no license or ownership interest is transferred to you."
          },
          {
            "type": "paragraph",
            "text": "You may not copy, modify, distribute, sell, lease, sublicense, reverse engineer, or create derivative works from the Service except as permitted by law or with our written authorization."
          }
        ]
      },
      {
        "number": 20,
        "title": "Feedback",
        "items": [
          {
            "type": "paragraph",
            "text": "If you provide ideas, suggestions, or feedback, you grant us permission to use them without restriction or compensation, provided we do not publicly identify you without permission."
          }
        ]
      },
      {
        "number": 21,
        "title": "Service Changes",
        "items": [
          {
            "type": "paragraph",
            "text": "We may add, modify, suspend, or discontinue features to improve security, comply with law, address technical limitations, or develop the Service."
          },
          {
            "type": "paragraph",
            "text": "Where reasonably possible, we will provide notice before materially discontinuing a paid core feature."
          },
          {
            "type": "paragraph",
            "text": "You are responsible for exporting or preserving copies of important content where export functionality is available."
          }
        ]
      },
      {
        "number": 22,
        "title": "Availability and Maintenance",
        "items": [
          {
            "type": "paragraph",
            "text": "The Service may occasionally be unavailable because of maintenance, updates, provider outages, network failures, carrier outages, security incidents, or events outside our reasonable control."
          },
          {
            "type": "paragraph",
            "text": "We do not guarantee uninterrupted, error-free, permanent, or universally available operation."
          }
        ]
      },
      {
        "number": 23,
        "title": "Account Suspension and Termination",
        "items": [
          {
            "type": "paragraph",
            "text": "You may stop using the Service and request account deletion at any time."
          },
          {
            "type": "paragraph",
            "text": "We may restrict, suspend, or terminate access if we reasonably believe that you violated these Terms, created risk or legal exposure, failed to pay applicable fees, abused the Service, or compromised security."
          },
          {
            "type": "paragraph",
            "text": "Where appropriate and legally permitted, we may provide notice and an opportunity to remedy the issue."
          },
          {
            "type": "paragraph",
            "text": "Termination may cause undelivered content and scheduled deliveries to become unavailable or be deleted. You are responsible for reviewing the consequences before deleting your account."
          }
        ]
      },
      {
        "number": 24,
        "title": "Disclaimers",
        "items": [
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, the Service is provided on an “as is” and “as available” basis."
          },
          {
            "type": "paragraph",
            "text": "Forever Alive disclaims warranties of merchantability, fitness for a particular purpose, title, non-infringement, uninterrupted operation, error-free operation, permanent storage, and successful or timely delivery."
          },
          {
            "type": "paragraph",
            "text": "We do not warrant that content will never be lost, corrupted, accessed without authorization, delayed, blocked, filtered, or delivered to an unintended person."
          },
          {
            "type": "paragraph",
            "text": "Nothing in these Terms excludes warranties or rights that cannot legally be excluded."
          }
        ]
      },
      {
        "number": 25,
        "title": "Limitation of Liability",
        "items": [
          {
            "type": "paragraph",
            "text": "To the maximum extent permitted by law, Forever Alive and its affiliates, officers, employees, contractors, and service providers will not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, or for loss of profits, data, content, goodwill, opportunity, or anticipated savings."
          },
          {
            "type": "paragraph",
            "text": "This includes damages arising from delayed, failed, premature, unauthorized, incorrect, or unintended delivery; missed Safety Checks; unavailable content; recipient actions; email or SMS failures; telecommunications charges; third-party services; or unauthorized account access."
          },
          {
            "type": "paragraph",
            "text": "Where liability cannot be excluded, our aggregate liability relating to the Service will not exceed the greater of the amount you paid to Forever Alive during the twelve months before the event giving rise to the claim or CNY 350, unless applicable law requires a different amount."
          },
          {
            "type": "paragraph",
            "text": "Some jurisdictions do not permit certain liability exclusions or limitations, so some provisions may not apply to you."
          }
        ]
      },
      {
        "number": 26,
        "title": "Indemnity",
        "items": [
          {
            "type": "paragraph",
            "text": "To the extent permitted by law, you agree to indemnify and hold harmless Forever Alive and its affiliates, officers, employees, and contractors from claims, losses, liabilities, damages, and reasonable costs arising from your content, your recipient information, your misuse of the Service, your electronic communications, or your violation of these Terms or another person’s rights."
          },
          {
            "type": "paragraph",
            "text": "This provision does not apply to the extent a claim results from our own unlawful conduct or where indemnification is prohibited by law."
          }
        ]
      },
      {
        "number": 27,
        "title": "Governing Law and Disputes",
        "items": [
          {
            "type": "paragraph",
            "text": "These Terms and any dispute, claim, or controversy arising from or relating to these Terms or the Service are governed by the laws of the People’s Republic of China, without regard to conflict-of-law principles."
          },
          {
            "type": "paragraph",
            "text": "Before commencing formal proceedings, you and Forever Alive will attempt in good faith to resolve the dispute through written notice and reasonable discussion. If the dispute is not resolved, it shall be submitted to the competent People’s Courts in China."
          },
          {
            "type": "paragraph",
            "text": "Nothing in these Terms limits mandatory consumer protections or your right to bring a claim in another forum where applicable law does not permit that right to be waived."
          }
        ]
      },
      {
        "number": 28,
        "title": "Export and Sanctions Compliance",
        "items": [
          {
            "type": "paragraph",
            "text": "You may not use or export the Service in violation of applicable export-control, trade-sanctions, or import laws."
          },
          {
            "type": "paragraph",
            "text": "You represent that you are not prohibited from receiving the Service under applicable restrictions."
          }
        ]
      },
      {
        "number": 29,
        "title": "Changes to These Terms",
        "items": [
          {
            "type": "paragraph",
            "text": "We may update these Terms to reflect changes in law, security, business operations, telecommunications requirements, or Service functionality."
          },
          {
            "type": "paragraph",
            "text": "For material changes, we may provide notice through the application, website, email, SMS, or another appropriate method."
          },
          {
            "type": "paragraph",
            "text": "Where required by law, we will request your consent. Otherwise, continued use after the updated Terms become effective constitutes acceptance of the revised Terms."
          }
        ]
      },
      {
        "number": 30,
        "title": "General Provisions",
        "items": [
          {
            "type": "bullet",
            "text": "These Terms and the Privacy Policy constitute the agreement between you and Forever Alive concerning the Service."
          },
          {
            "type": "bullet",
            "text": "If a provision is found unenforceable, the remaining provisions remain effective."
          },
          {
            "type": "bullet",
            "text": "Our failure to enforce a provision is not a waiver."
          },
          {
            "type": "bullet",
            "text": "You may not assign your rights or obligations without our consent. We may assign these Terms as part of a reorganization, merger, acquisition, or transfer of the Service."
          },
          {
            "type": "bullet",
            "text": "Headings are for convenience and do not affect interpretation."
          },
          {
            "type": "bullet",
            "text": "Provisions that by their nature should survive termination will survive, including ownership, disclaimers, liability limitations, indemnity, and dispute provisions."
          }
        ]
      },
      {
        "number": 31,
        "title": "Contact",
        "items": [
          {
            "type": "paragraph",
            "text": "For questions about these Terms, account issues, SMS communications, recipient complaints, or the Service, contact:"
          }
        ]
      }
    ]
  },
  "termsChinese": {
    "title": "服务条款",
    "summary": "本服务条款适用于您访问和使用 Forever Alive 移动应用、网站、私密内容查看页面、电子邮件和短信发送功能及相关服务。使用 Forever Alive 前，请仔细阅读本条款。",
    "effectiveDate": "2026年8月5日",
    "sections": [
      {
        "number": 1,
        "title": "接受本条款",
        "items": [
          {
            "type": "paragraph",
            "text": "当您访问或使用服务、创建账户、上传内容、选择收件人、提供收件人联系方式、购买订阅或安排发送时，即表示您同意本条款及隐私政策。"
          },
          {
            "type": "paragraph",
            "text": "如果您不同意，请勿使用服务。代表组织使用服务的人员声明其有权使该组织受本条款约束。"
          }
        ]
      },
      {
        "number": 2,
        "title": "使用资格",
        "items": [
          {
            "type": "paragraph",
            "text": "您必须达到所在地法律规定的最低年龄并具有订立本协议的法律行为能力。需要父母或监护人授权的用户，只能在取得有效授权和监督后使用服务。"
          },
          {
            "type": "paragraph",
            "text": "您还声明适用法律未禁止您使用本服务。"
          }
        ]
      },
      {
        "number": 3,
        "title": "Forever Alive 服务",
        "items": [
          {
            "type": "paragraph",
            "text": "服务允许用户创建、上传、编辑、保存、整理和安排发送信件、照片、视频、音频及其他数字回忆，并管理收件人、立即或定时发送、Safety Check、邮件、短信和私密链接。"
          },
          {
            "type": "paragraph",
            "text": "功能可能因国家或地区、设备、App 版本、订阅方案、第三方服务商、电信运营商和法律要求而不同。"
          }
        ]
      },
      {
        "number": 4,
        "title": "并非紧急或监护服务",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive 不监测您的身体状况、健康、安全、位置或生命状态。未完成 Safety Check 不证明您受伤、失踪、死亡或处于危险。"
          },
          {
            "type": "paragraph",
            "text": "不得依赖本服务处理紧急救援、医疗监护、安危确认或时间关键型通信。紧急情况下，请直接联系当地紧急服务和可信人员。"
          }
        ]
      },
      {
        "number": 5,
        "title": "并非遗嘱或法律文件",
        "items": [
          {
            "type": "paragraph",
            "text": "服务中的内容不会自动构成遗嘱、信托、遗赠文件、预先医疗指示、授权委托书、受益人指定、合同或其他法律文件。"
          },
          {
            "type": "paragraph",
            "text": "我们不提供法律意见，也不判断内容是否符合任何司法管辖区的形式要求。涉及继承、医疗、监护或财务安排时，请咨询合格专业人士。"
          }
        ]
      },
      {
        "number": 6,
        "title": "您的账户",
        "items": [
          {
            "type": "bullet",
            "text": "提供准确、最新和完整的账户信息，并及时更新联系方式。"
          },
          {
            "type": "bullet",
            "text": "妥善保护登录凭据、设备、验证码和私密链接，不得出售、出租或不安全地共享账户。"
          },
          {
            "type": "bullet",
            "text": "除因我们违反适用法律直接导致的情况外，您应对账户下发生的活动负责。"
          },
          {
            "type": "bullet",
            "text": "发现未经授权访问、凭据泄露或其他安全问题时，应立即联系我们。"
          }
        ]
      },
      {
        "number": 7,
        "title": "您的内容",
        "items": [
          {
            "type": "paragraph",
            "text": "您保留对所提交内容的权利。您授予我们全球范围、非独占、免许可费的有限许可，使我们能够为运行、保护、支持和改进服务以及执行您的发送指示而托管、存储、复制、格式化、显示、处理和传输内容。"
          },
          {
            "type": "paragraph",
            "text": "该许可在运营或法律所需期间持续，包括合理备份期；我们不会仅因您上传内容而取得其所有权。"
          }
        ]
      },
      {
        "number": 8,
        "title": "关于内容的声明",
        "items": [
          {
            "type": "paragraph",
            "text": "您声明并保证拥有内容，或已取得上传、保存和发送所需的全部权利和许可。"
          },
          {
            "type": "bullet",
            "text": "内容和使用行为不得侵犯隐私、人格、保密、知识产权、合同或其他合法权益。"
          },
          {
            "type": "bullet",
            "text": "您有合法依据提供收件人的姓名、邮箱、电话、国家或地区代码等信息。"
          },
          {
            "type": "bullet",
            "text": "内容不得违法、欺诈、诽谤、威胁、虐待、剥削、恶意误导或包含恶意代码。"
          }
        ]
      },
      {
        "number": 9,
        "title": "收件人信息",
        "items": [
          {
            "type": "paragraph",
            "text": "您应确保收件人信息准确，且联系和发送行为合法、适当。不得发送营销垃圾信息、反复发送不受欢迎的信息、欺骗、威胁、骚扰或可能使他人严重痛苦的内容。"
          },
          {
            "type": "paragraph",
            "text": "收件人可以举报滥用、质疑发送、申请审查相关个人信息，或要求停止后续非必要通知。您不得规避退订、封禁或抑制记录。"
          }
        ]
      },
      {
        "number": 10,
        "title": "发送指示",
        "items": [
          {
            "type": "paragraph",
            "text": "在保存或启用发送前，您应核对内容、收件人、邮箱、电话、国家或地区代码、发送人名称、发送方式、计划日期和 Safety Check 设置。"
          },
          {
            "type": "paragraph",
            "text": "您授权我们及服务商按照您的设置使用收件人联系方式。内容一旦发送，可能无法撤回或删除收件人已接收、保存或转发的副本。"
          }
        ]
      },
      {
        "number": 11,
        "title": "不保证成功发送",
        "items": [
          {
            "type": "paragraph",
            "text": "我们努力提供可靠服务，但不保证任何消息、邮件、短信、通知或私密链接必然发送、到达、打开、阅读、理解或永久保存，也不保证在特定时间完成。"
          },
          {
            "type": "paragraph",
            "text": "错误资料、垃圾邮件过滤、号码变更、网络或服务商故障、运营商规则、设备设置、漫游、账户限制、法律要求、不可抗力等均可能导致失败或延迟。状态记录不构成收件人身份、实际接收或法律送达的证明。"
          }
        ]
      },
      {
        "number": 12,
        "title": "Safety Check 发送",
        "items": [
          {
            "type": "paragraph",
            "text": "Safety Check 可按照用户选择的周期发送签到请求，并在配置流程完成后触发计划发送。您负责选择适当周期、按时响应并保持设备、网络和联系信息有效。"
          },
          {
            "type": "paragraph",
            "text": "错过签到可能由旅行、设备遗失、网络、过滤、账户或其他原因造成，不代表死亡或失能。Safety Check 不是紧急监护或救援服务。"
          }
        ]
      },
      {
        "number": 13,
        "title": "可接受使用规则",
        "items": [
          {
            "type": "paragraph",
            "text": "您不得利用服务从事违法、侵权、欺诈、骚扰、威胁、仇恨、剥削、冒充或危害他人的活动。"
          },
          {
            "type": "bullet",
            "text": "不得上传恶意软件、违法内容，或虚假陈述死亡、失能、授权、同意或身份。"
          },
          {
            "type": "bullet",
            "text": "不得发送垃圾营销、批量信息，或继续联系已拒绝、退订或被加入抑制名单的人员。"
          },
          {
            "type": "bullet",
            "text": "不得探测、绕过、破坏、过载、抓取或未经授权访问账户、链接、系统或数据。"
          },
          {
            "type": "bullet",
            "text": "不得将服务用于失败或延迟可能造成死亡、人身伤害或重大财产损失的用途。"
          }
        ]
      },
      {
        "number": 14,
        "title": "内容审查与执行",
        "items": [
          {
            "type": "paragraph",
            "text": "我们不承担普遍监控所有私密内容的义务，但可在合理必要时调查报告、保存证据、限制、删除、阻止发送或依法披露内容，以运行和保护服务、执行本条款、防止伤害或遵守法律。"
          },
          {
            "type": "paragraph",
            "text": "严重或反复违规可能导致账户受限、暂停或终止，并可能通知受影响收件人或主管机关。"
          }
        ]
      },
      {
        "number": 15,
        "title": "订阅与付款",
        "items": [
          {
            "type": "paragraph",
            "text": "部分功能需要通过 Apple App Store 购买订阅或一次性产品。价格、计费周期、包含功能和续订条件会在购买前显示。Apple 处理付款、付款凭据、退款和账单争议。"
          },
          {
            "type": "bullet",
            "text": "订阅可能自动续订，除非您在 Apple 要求的期限内通过 Apple 账户设置取消。"
          },
          {
            "type": "bullet",
            "text": "删除 App 或 Forever Alive 账户不会自动取消 App Store 订阅。"
          },
          {
            "type": "bullet",
            "text": "除法律或 Apple 规则另有要求外，费用不予退还，部分计费周期通常不按比例退款。"
          },
          {
            "type": "bullet",
            "text": "我们可根据法律和平台规则提前通知后调整价格或订阅功能。"
          }
        ]
      },
      {
        "number": 16,
        "title": "免费试用与促销",
        "items": [
          {
            "type": "paragraph",
            "text": "免费试用、促销额度、首期优惠或限时方案可能适用额外条件、资格限制、到期日和自动续订规则，具体以加入时展示的信息为准。"
          }
        ]
      },
      {
        "number": 17,
        "title": "第三方服务",
        "items": [
          {
            "type": "paragraph",
            "text": "服务可能依赖 Apple、Supabase、Vercel、Resend、腾讯云短信、电信运营商、认证、支付、托管和其他第三方。第三方的可用性、安全、定价、内容和独立行为受其自身条款约束。"
          },
          {
            "type": "paragraph",
            "text": "在适用法律允许的范围内，我们不对超出我们控制和法定义务范围的第三方产品或行为负责。"
          }
        ]
      },
      {
        "number": 18,
        "title": "短信与电子通信",
        "items": [
          {
            "type": "paragraph",
            "text": "我们可能通过邮件、短信、推送或其他方式发送验证、安全、Safety Check、发送状态和服务通知。短信可由腾讯云短信及电信运营商传输，并处理电话、区号、模板、时间、状态、错误码等必要数据。"
          },
          {
            "type": "paragraph",
            "text": "消息和数据资费、国际短信或漫游费用可能由运营商收取。收件人可通过 hello@forever-alive.com 投诉或要求停止后续非必要短信；必要的安全、法律或确认消息在法律允许时仍可能发送。"
          }
        ]
      },
      {
        "number": 19,
        "title": "知识产权",
        "items": [
          {
            "type": "paragraph",
            "text": "Forever Alive 的名称、软件、网站、设计、图形、界面、标识和文档归我们或许可方所有，并受适用知识产权法律保护。"
          },
          {
            "type": "paragraph",
            "text": "我们仅授予您为预期目的使用服务的有限、个人、非独占、不可转让且可撤销的权利。法律允许的情况除外，您不得复制、修改、分发、出售、出租、再许可、反向工程或制作衍生作品。"
          }
        ]
      },
      {
        "number": 20,
        "title": "反馈",
        "items": [
          {
            "type": "paragraph",
            "text": "如果您提供意见、创意或建议，即授权我们永久、全球、免许可费地使用，不受限制且无需支付报酬；未经许可，我们不会公开识别您的身份。"
          }
        ]
      },
      {
        "number": 21,
        "title": "服务变更",
        "items": [
          {
            "type": "paragraph",
            "text": "我们可以为改善服务、提升安全、遵守法律或解决技术限制而增加、修改、暂停或停止功能。在合理可行时，我们会在重大停止付费核心功能前提供通知。"
          },
          {
            "type": "paragraph",
            "text": "您应在可使用导出功能时自行保存重要内容的独立副本。"
          }
        ]
      },
      {
        "number": 22,
        "title": "可用性与维护",
        "items": [
          {
            "type": "paragraph",
            "text": "服务可能因维护、更新、网络或服务商故障、运营商中断、安全事件或超出合理控制的事件暂时不可用。我们不保证服务永久、无错误、不间断或在所有地区可用。"
          }
        ]
      },
      {
        "number": 23,
        "title": "账户暂停与终止",
        "items": [
          {
            "type": "paragraph",
            "text": "您可停止使用并申请删除账户。若我们合理认为您违反本条款、造成法律或安全风险、未支付费用、滥用收件人信息或破坏服务安全，我们可限制、暂停或终止访问并阻止发送。"
          },
          {
            "type": "paragraph",
            "text": "在适当且法律允许时，我们会通知并给予补救或导出内容的机会。终止可能使未发送内容和计划发送失效；数据保留和删除适用隐私政策。"
          }
        ]
      },
      {
        "number": 24,
        "title": "免责声明",
        "items": [
          {
            "type": "paragraph",
            "text": "在适用法律允许的最大范围内，服务按“现状”和“可用”状态提供。我们不作适销性、特定用途适用性、权利完整、不侵权、准确、持续可用、绝对安全、永久保存或成功及时发送的明示或默示保证。"
          },
          {
            "type": "paragraph",
            "text": "本条款不排除法律规定不得排除的保证、救济或权利。"
          }
        ]
      },
      {
        "number": 25,
        "title": "责任限制",
        "items": [
          {
            "type": "paragraph",
            "text": "在法律允许的最大范围内，我们及关联方、管理人员、员工、承包商和服务商不对间接、附带、特殊、惩罚性或后果性损失，或利润、收入、商誉、数据、内容、机会和预期节省的损失负责。"
          },
          {
            "type": "paragraph",
            "text": "在法律允许的最大范围内，我们因服务产生的累计责任不超过以下两者中的较高者：索赔事件发生前十二个月内您通过 App Store 为服务支付的金额，或人民币350元。故意不当行为及法律禁止限制的责任不受该限制。"
          }
        ]
      },
      {
        "number": 26,
        "title": "赔偿",
        "items": [
          {
            "type": "paragraph",
            "text": "在法律允许的范围内，对于因您的内容、收件人资料、电子通信、服务滥用、违反本条款或侵犯他人权益而产生的第三方索赔、损失和合理费用，您应赔偿我们及相关人员并使其免受损害；因我们违法行为造成的部分除外。"
          }
        ]
      },
      {
        "number": 27,
        "title": "适用法律与争议解决",
        "items": [
          {
            "type": "paragraph",
            "text": "本条款以及因本条款或服务产生或与之有关的争议，适用中华人民共和国法律，但不适用其法律冲突规则。"
          },
          {
            "type": "paragraph",
            "text": "双方应先通过书面通知和善意协商尝试解决争议。协商未果的，争议应提交中国有管辖权的人民法院处理。适用法律规定不得放弃的消费者保护或管辖权不受影响。"
          }
        ]
      },
      {
        "number": 28,
        "title": "出口与制裁合规",
        "items": [
          {
            "type": "paragraph",
            "text": "您不得违反适用的出口管制、贸易制裁或进口法律使用、提供或出口服务，并声明您不属于被禁止接受服务的主体。"
          }
        ]
      },
      {
        "number": 29,
        "title": "条款更新",
        "items": [
          {
            "type": "paragraph",
            "text": "我们可能因法律、安全、业务运营、电信要求或功能变化更新本条款。重大变更将通过 App、网站、邮件、短信或其他适当方式通知，并在法律要求时取得同意。"
          },
          {
            "type": "paragraph",
            "text": "在法律允许的情况下，更新生效后继续使用服务表示接受修订条款。"
          }
        ]
      },
      {
        "number": 30,
        "title": "一般规定",
        "items": [
          {
            "type": "bullet",
            "text": "本条款与隐私政策构成双方关于服务的完整协议。"
          },
          {
            "type": "bullet",
            "text": "部分条款无效或不可执行时，应在最小必要范围内调整或分离，其余条款继续有效。"
          },
          {
            "type": "bullet",
            "text": "未执行某项权利不构成放弃。未经同意，您不得转让本条款；我们可依法在重组、融资、合并或服务转让中进行转让。"
          },
          {
            "type": "bullet",
            "text": "因超出合理控制范围的事件导致延迟或不能履行，我们不承担法律不要求承担的责任。"
          },
          {
            "type": "bullet",
            "text": "所有权、付款、免责声明、责任限制、赔偿和争议条款等依其性质应继续有效的规定，在终止后仍然有效。"
          }
        ]
      },
      {
        "number": 31,
        "title": "联系我们",
        "items": [
          {
            "type": "paragraph",
            "text": "关于本条款、账户、短信、收件人投诉、退订或服务的问题，请联系："
          }
        ]
      }
    ]
  }
} as const satisfies Record<string, LegalDocument>;

