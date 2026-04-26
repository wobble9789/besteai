import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "Vergelijk de beste AI tools van 2025 — BesteAI.nl",
  description:
    "Ontdek en vergelijk de beste AI tools van 2025. Van ChatGPT tot Midjourney — vind de juiste AI tool voor jouw behoeften.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BesteAI.nl",
  url: "https://besteai.nl",
  description: "Vergelijk de beste AI tools van 2025",
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
            🚀 Bijgewerkt April 2025
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Vergelijk de beste{" "}
            <span className="text-indigo-600">AI tools</span> van 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Onafhankelijke reviews van ChatGPT, Claude, Midjourney en meer. Vind de perfecte AI tool voor schrijven, design, onderzoek en automatisering.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tools"
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Alle {tools.length} tools vergelijken
            </Link>
            <Link
              href="/blog"
              className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-3 rounded-xl font-semibold hover:border-indigo-400 transition-colors text-lg"
            >
              Lees onze gidsen
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">Gratis • Onafhankelijk • Actueel</p>
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
            <div className="text-sm text-gray-500">Categorieën</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">100%</div>
            <div className="text-sm text-gray-500">Onafhankelijk</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Zoek per categorie</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-indigo-300 hover:shadow-sm transition-all group"
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                {cat.naam.split(" ")[0]}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      {featuredTools.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Uitgelichte tools</h2>
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
          <h2 className="text-2xl font-bold text-gray-900">Alle AI tools</h2>
          <Link href="/tools" className="text-indigo-600 text-sm hover:underline">
            Alles bekijken →
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
          <h2 className="text-3xl font-bold mb-4">Weet je niet welke AI tool je moet kiezen?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Lees onze gratis gidsen en vergelijk de tools op prijs, functies en gebruiksgemak.
          </p>
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
          >
            Lees onze gidsen
          </Link>
        </div>
      </section>
    </>
  );
}
