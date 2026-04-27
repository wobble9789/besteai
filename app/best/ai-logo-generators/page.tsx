import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Logo Generators 2025 — Top 5 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI logo generators of 2025 ranked by quality, file formats, and price. Looka, Brandmark, Canva AI, and more — create a professional logo in minutes.",
};

const logoTools = [
  {
    rank: 1,
    slug: "looka",
    name: "Looka",
    tagline: "Best AI logo generator — professional results with full brand kit",
    price: "From $20 one-time",
    rating: 4.3,
    badge: "🏆 Best Overall",
    why: "Looka generates hundreds of AI logo concepts and includes a complete brand kit with business cards, social assets, and more. Best-in-class output quality with vector files included.",
    affiliateUrl: "https://looka.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "brandmark",
    name: "Brandmark",
    tagline: "Unique AI-generated logos — not just templates",
    price: "From $25 one-time",
    rating: 4.2,
    badge: "✨ Most Unique",
    why: "Brandmark focuses on generating original logos rather than template combinations. Its AI produces distinctive mark-and-wordmark combos with a full brand book included.",
    affiliateUrl: "https://brandmark.io/?ref=besteai",
  },
  {
    rank: 3,
    slug: "namelix",
    name: "Namelix",
    tagline: "Free AI business name + logo generator",
    price: "Free",
    rating: 4.2,
    badge: "💸 Best Free",
    why: "Namelix generates catchy business names with logo mockups and checks domain availability in real time. Completely free — perfect for founders still naming their startup.",
    affiliateUrl: "https://namelix.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "looka",
    name: "Canva AI",
    tagline: "Logo design as part of a full creative suite",
    price: "Free / $15/mo",
    rating: 4.4,
    badge: "🎨 Most Versatile",
    why: "Canva's Magic Design AI generates logos alongside thousands of other design assets. Best if you're already using Canva for social media and marketing design.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "uizard",
    name: "Uizard",
    tagline: "AI UI design — for app and product branding",
    price: "Free / $19/mo",
    rating: 4.3,
    badge: "📱 Best for Apps",
    why: "Uizard is the go-to tool for designing app interfaces and product UI. While not a logo tool, it completes any brand identity with mockups of how your brand looks in-product.",
    affiliateUrl: "https://uizard.io/?ref=besteai",
  },
];

export default function BestAILogoGeneratorsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link href="/best" className="text-sm text-indigo-600 hover:underline">
          ← Best AI Tools
        </Link>
        <div className="mt-4">
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🎨 Logo Generators
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best AI Logo Generators 2025
          </h1>
          <p className="text-xl text-gray-600">
            AI logo generators create professional brand identities in minutes at a fraction of designer costs.
            We tested the best options — free and paid.
          </p>
        </div>
      </div>

      <div className="space-y-6 mb-14">
        {logoTools.map((tool) => (
          <div
            key={`${tool.slug}-${tool.rank}`}
            className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-pink-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-gray-300">#{tool.rank}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                  <p className="text-sm text-gray-500">{tool.tagline}</p>
                </div>
              </div>
              <span className="text-sm font-semibold bg-pink-50 text-pink-700 px-3 py-1 rounded-full whitespace-nowrap">
                {tool.badge}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{tool.why}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-700">{tool.price}</span>
                <span className="text-sm text-yellow-600 font-semibold">★ {tool.rating}</span>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="text-sm text-indigo-600 hover:underline font-medium"
                >
                  Full review →
                </Link>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  Try {tool.name} →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-pink-50 border border-pink-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-pink-900 mb-2">Free vs Paid AI Logo Generators</h2>
        <p className="text-pink-700 text-sm mb-3">
          Free tools (Namelix, Canva Free) are great for testing ideas. Paid tools (Looka, Brandmark) provide
          vector files, full commercial rights, and brand kits — essential for a serious business.
        </p>
        <p className="text-pink-700 text-sm">
          <strong>Rule of thumb:</strong> If you&apos;re pre-revenue, start free. Once you have customers, invest $20–$65 in a proper logo.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare Logo Tools</h2>
        <div className="flex gap-3 flex-wrap">
          <Link href="/compare/looka-vs-canva" className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:border-indigo-300 transition-colors">
            Looka vs Canva →
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        * This page may contain affiliate links. We earn a small commission at no extra cost to you. Rankings based on independent testing.
      </p>
    </main>
  );
}
