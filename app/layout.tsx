import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Forever Alive",
  description:
    "Leave your final words for the people who matter most. Forever Alive delivers your last message when you no longer can.",
  keywords: [
    "Forever Alive",
    "Legacy",
    "Final Message",
    "Last Words",
    "Memory",
    "Love",
  ],
  authors: [{ name: "Forever Alive" }],
  creator: "Forever Alive",
  metadataBase: new URL("https://forever-alive.com"),

  openGraph: {
    title: "Forever Alive",
    description:
      "Leave your final words for the people who matter most.",
    url: "https://forever-alive.com",
    siteName: "Forever Alive",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Forever Alive",
    description:
      "Leave your final words for the people who matter most.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}