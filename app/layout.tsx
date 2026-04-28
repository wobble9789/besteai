import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://spotlighttool.com"),
  title: {
    default: "SpotlightTool — Find, Compare & Choose the Best Tools",
    template: "%s | SpotlightTool",
  },
  description:
    "Discover and compare the best tools of 2026. Independent reviews, honest pricing and affiliate deals for ChatGPT, Canva, Notion, Zapier and more.",
  keywords: ["AI tools", "compare tools", "ChatGPT", "Canva", "Notion", "Zapier", "best tools", "software reviews"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spotlighttool.com",
    siteName: "SpotlightTool",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spotlighttool",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "REPLACE_WITH_GSC_TOKEN",
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
