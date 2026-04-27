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

      {/* Editor's Choice */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">⭐ Editor&apos;s Choice</span>
          <h2 className="text-3xl font-extrabold text-gray-900">Top AI picks for 2025</h2>
          <p className="text-gray-500 mt-2">Hand-picked by our team for quality, value and impact</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {([
            { slug: "chatgpt", badge: "Best Overall", emoji: "🥇" },
            { slug: "claude", badge: "Best for Writing", emoji: "✍️" },
            { slug: "midjourney", badge: "Best for Images", emoji: "🎨" },
            { slug: "grammarly", badge: "Best Free Tool", emoji: "✅" },
            { slug: "elevenlabs", badge: "Best for Audio", emoji: "🎙️" },
            { slug: "github-copilot", badge: "Best for Developers", emoji: "💻" },
          ] as { slug: string; badge: string; emoji: string }[]).map(({ slug, badge, emoji }) => {
            const tool = tools.find((t) => t.slug === slug);
            if (!tool) return null;
            return (
              <div key={slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{emoji} {badge}</span>
                  <span className="text-xs text-gray-400">{tool.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{tool.tagline}</p>
                <div className="flex items-center gap-1 mb-3">
                  <span className="text-amber-400 text-sm">{'★'.repeat(Math.round(tool.rating))}</span>
                  <span className="text-sm text-gray-500">{tool.rating}/5</span>
                </div>
                <p className="text-sm text-gray-600 flex-1 mb-4 line-clamp-2">{tool.description.slice(0, 100)}…</p>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-auto block text-center bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Try {tool.name} →
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Recently Added */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">🆕 New This Week</span>
          <h2 className="text-3xl font-extrabold text-gray-900">New AI tools</h2>
          <p className="text-gray-500 mt-2">The latest tools added to our directory</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.slice(-6).reverse().map((tool) => (
            <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">🆕 New</span>
                <span className="text-xs text-gray-400">{tool.price}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{tool.tagline}</p>
              <div className="flex items-center gap-1 mb-3">
                <span className="text-amber-400 text-sm">{"★".repeat(Math.round(tool.rating))}</span>
                <span className="text-sm text-gray-500">{tool.rating}/5</span>
              </div>
              <p className="text-sm text-gray-600 flex-1 mb-4 line-clamp-2">{tool.description.slice(0, 100)}…</p>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-auto block text-center bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors"
              >
                Try {tool.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Use Case */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">🗂️ Use Cases</span>
          <h2 className="text-3xl font-extrabold text-gray-900">Browse by Use Case</h2>
          <p className="text-gray-500 mt-2">Find the right AI tool for what you actually need</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { emoji: "✍️", label: "Writing", href: "/categorie/writing", color: "bg-blue-50 hover:bg-blue-100 text-blue-700" },
            { emoji: "🎨", label: "Images", href: "/categorie/images", color: "bg-pink-50 hover:bg-pink-100 text-pink-700" },
            { emoji: "🎬", label: "Video", href: "/categorie/video", color: "bg-purple-50 hover:bg-purple-100 text-purple-700" },
            { emoji: "🔊", label: "Audio", href: "/categorie/audio", color: "bg-orange-50 hover:bg-orange-100 text-orange-700" },
            { emoji: "🤖", label: "Automation", href: "/categorie/automation", color: "bg-green-50 hover:bg-green-100 text-green-700" },
            { emoji: "🔍", label: "Research", href: "/categorie/research", color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700" },
            { emoji: "📈", label: "Marketing", href: "/categorie/marketing", color: "bg-red-50 hover:bg-red-100 text-red-700" },
            { emoji: "🎨", label: "Design", href: "/categorie/design", color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-700" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${item.color} rounded-2xl p-5 text-center transition-colors group cursor-pointer border border-transparent hover:border-current hover:border-opacity-20`}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-semibold text-sm">{item.label}</div>
            </Link>
          ))}
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

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-14 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">📧 Get weekly AI tool reviews</h2>
          <p className="text-gray-500 mb-6">New tools, comparisons and deals — delivered every week. No spam.</p>
          <form
            action="https://formsubmit.co/henkvrai@outlook.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input type="hidden" name="_subject" value="New subscriber — BestAI.net" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter CTA Banner */}
      <section className="bg-orange-50 border border-orange-100 py-4 px-4 my-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-sm font-medium">
            📬 <strong>Weekly AI Newsletter</strong> — New tools, exclusive deals, no spam.
          </p>
          <Link
            href="/newsletter"
            className="flex-shrink-0 bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Subscribe Free →
          </Link>
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
