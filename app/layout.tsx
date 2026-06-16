import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://locus.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Locus — community house in West Philadelphia",
  description:
    "Locus is a group house and event space in West Philadelphia for the Effective Altruism, rationalist, and post-rationalist communities — a place to gather, think, and live.",
  openGraph: {
    title: "Locus — West Philadelphia",
    description:
      "A group house and event space in West Philadelphia for the EA, rationalist, and post-rationalist communities.",
    images: [{ url: "/images/hero/hero.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
