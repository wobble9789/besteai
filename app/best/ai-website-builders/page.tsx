import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Website Builders 2025 — Top 5 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI website builders of 2025 ranked by speed, design quality, and price. Framer AI, Durable AI, Wix ADI, and more — find the right one for your project.",
};

const websiteBuilders = [
  {
    rank: 1,
    slug: "framer-ai",
    name: "Framer AI",
    tagline: "Best design quality — AI-generated websites that wow",
    price: "Free / $20/mo",
    rating: 4.5,
    badge: "🏆 Best Design",
    why: "Framer AI generates the most visually impressive websites of any AI builder. Describe your site in plain language and get a professionally designed, animated site in seconds.",
    affiliateUrl: "https://framer.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "durable-ai",
    name: "Durable AI",
    tagline: "Fastest AI website builder — live in 30 seconds",
    price: "Free / $15/mo",
    rating: 4.2,
    badge: "⚡ Fastest",
    why: "Durable generates a complete business website with copy, images, and contact form in under 30 seconds. Includes built-in CRM and invoicing — perfect for service businesses.",
    affiliateUrl: "https://durable.co/?ref=besteai",
  },
  {
    rank: 3,
    slug: "wix-adi",
    name: "Wix ADI",
    tagline: "Most feature-complete AI website builder",
    price: "Free / $17/mo",
    rating: 4.2,
    badge: "🔧 Most Features",
    why: "Wix ADI combines AI generation with Wix's massive ecosystem of 500+ apps. The only AI builder with full e-commerce, booking, and events built in.",
    affiliateUrl: "https://wix.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "mixo-ai",
    name: "Mixo AI",
    tagline: "Best AI landing page builder for idea validation",
    price: "$29/mo",
    rating: 4.3,
    badge: "🚀 Best for MVPs",
    why: "Mixo turns a single sentence into a landing page with email capture. The fastest way to validate a startup idea and build a waitlist before you write any code.",
    affiliateUrl: "https://mixo.io/?ref=besteai",
  },
  {
    rank: 5,
    slug: "uizard",
    name: "Uizard",
    tagline: "Best AI UI/UX prototyping tool",
    price: "Free / $19/mo",
    rating: 4.3,
    badge: "🎨 Best UI Tool",
    why: "Uizard converts text prompts and sketches into interactive UI mockups. Not a website builder per se, but the best tool for designing app interfaces with AI.",
    affiliateUrl: "https://uizard.io/?ref=besteai",
  },
];

export default function BestAIWebsiteBuildersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <Link href="/best" className="text-sm text-indigo-600 hover:underline">
          ← Best AI Tools
        </Link>
        <div className="mt-4">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🌐 Website Builders
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best AI Website Builders 2025
          </h1>
          <p className="text-xl text-gray-600">
            AI website builders generate professional sites in minutes — no coding or design skills required.
            We tested the top tools so you don&apos;t have to.
          </p>
        </div>
      </div>

      <div className="space-y-6 mb-14">
        {websiteBuilders.map((tool) => (
          <div
            key={tool.slug}
            className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-indigo-200 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-gray-300">#{tool.rank}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                  <p className="text-sm text-gray-500">{tool.tagline}</p>
                </div>
              </div>
              <span className="text-sm font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full whitespace-nowrap">
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

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-blue-900 mb-2">How We Rank AI Website Builders</h2>
        <p className="text-blue-700 text-sm">
          We evaluate AI website builders on: generation speed, design quality, feature depth, ease of use,
          pricing, and hosting performance. Rankings are updated quarterly with hands-on testing.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare AI Website Builders</h2>
        <div className="flex gap-3 flex-wrap">
          <Link href="/compare/framer-vs-webflow" className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:border-indigo-300 transition-colors">
            Framer vs Webflow →
          </Link>
          <Link href="/compare/durable-vs-wix" className="text-sm bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:border-indigo-300 transition-colors">
            Durable vs Wix →
          </Link>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center">
        * This page may contain affiliate links. We earn a small commission at no extra cost to you. Rankings based on independent testing.
      </p>
    </main>
  );
}
