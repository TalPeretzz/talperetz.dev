import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SkipToContent from "@/components/ui/SkipToContent";
import CookieConsent from "@/components/ui/CookieConsent";
import AnalyticsProvider from "@/components/analytics/AnalyticsProvider";
import "./styles/base.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://talperetz-dev.vercel.app";
const TITLE = "Tal Peretz | Senior Engineer";
const DESCRIPTION =
  "Tal Peretz is a senior engineer focused on backend systems, APIs, distributed architecture, and product-driven software design.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Tal Peretz",
    "Senior Engineer",
    "Backend Engineer",
    "Backend Systems",
    "APIs",
    "Distributed Systems",
    "System Design",
    "TypeScript",
    "Node.js",
    "NestJS",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Tal Peretz",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-on-surface)] font-[family-name:var(--font-body)] antialiased">
        <SkipToContent />
        {children}
        <CookieConsent />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
