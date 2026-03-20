import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SkipToContent from "@/components/ui/SkipToContent";
import CookieConsent from "@/components/ui/CookieConsent";
import "./styles/base.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tal Peretz | Senior Full Stack Engineer",
  description:
    "Building scalable, product-driven systems with a backend-first mindset. Specializing in high-performance APIs, microservices, and reliable technical architectures.",
  openGraph: {
    title: "Tal Peretz | Senior Full Stack Engineer",
    description:
      "Building scalable, product-driven systems with a backend-first mindset.",
    type: "website",
    locale: "en_US",
    url: "https://talperetz.dev",
    siteName: "Tal Peretz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tal Peretz | Senior Full Stack Engineer",
    description:
      "Building scalable, product-driven systems with a backend-first mindset.",
  },
  robots: {
    index: true,
    follow: true,
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
      </body>
    </html>
  );
}
