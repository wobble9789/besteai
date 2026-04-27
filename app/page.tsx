import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "Compare the Best AI Tools of 2025 — BestAI.net",
  description:
    "Discover and compare the best AI tools of 2025. From ChatGPT to Midjourney — find the right AI tool for your needs.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BestAI.net",
  url: "https://besteai.nl",
  description: "Compare the best AI tools of 2025",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://besteai.nl/tools?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  const featuredTools = tools.filter((t) => t.badge);
  const topTools = tools.slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            🚀 Updated April 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Compare the best{" "}
            <span className="text-indigo-600">AI tools</span> of 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Independent reviews of ChatGPT, Claude, Midjourney and more. Find the perfect AI tool for writing, design, research and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Compare all {tools.length} tools
            </Link>
            <Link
              href="/blog"
              className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-3 rounded-xl font-semibold hover:border-indigo-400 transition-colors text-lg"
            >
              Read our guides
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">Free • Independent • Up-to-date</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-indigo-600">{tools.length}+</div>
            <div className="text-sm text-gray-500">AI Tools</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">{categories.length}</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-sm text-gray-500">Independent</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                {cat.name.split(" ")[0]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      {featuredTools.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Featured tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* All tools */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">All AI tools</h2>
          <Link href="/tools" className="text-indigo-600 text-sm hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 px-4 my-12">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not sure which AI tool to choose?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Read our free guides and compare tools on price, features and ease of use.
          </p>
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
          >
            Read our guides
          </Link>
        </div>
      </section>
    </>
  );
}
