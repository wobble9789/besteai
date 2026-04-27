import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://besteai.nl"),
  title: {
    default: "BestAI.net — Compare the Best AI Tools of 2025",
    template: "%s | BestAI.net",
  },
  description:
    "Compare the best AI tools of 2025. Independent reviews, honest pricing and affiliate deals for ChatGPT, Claude, Midjourney and more.",
  keywords: ["AI tools", "compare", "ChatGPT", "Claude", "Midjourney", "artificial intelligence", "best AI"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://besteai.nl",
    siteName: "BestAI.net",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bestai_net",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "PLACEHOLDER_VERIFY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
