import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://besteai.nl"),
  title: {
    default: "BesteAI.nl — Vergelijk de beste AI tools van 2025",
    template: "%s | BesteAI.nl",
  },
  description:
    "Vergelijk de beste AI tools van 2025. Onafhankelijke reviews, eerlijke prijzen en affiliate deals voor ChatGPT, Claude, Midjourney en meer.",
  keywords: ["AI tools", "vergelijken", "ChatGPT", "Claude", "Midjourney", "kunstmatige intelligentie", "beste AI"],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://besteai.nl",
    siteName: "BesteAI.nl",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@besteai_nl",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
