import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Writing Tools 2025 — Top 8 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI writing tools of 2025, ranked by quality, price, and use case. From ChatGPT to Jasper, find the right AI writer for your needs.",
};

const writingTools = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best overall AI writing tool",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🏆 Editor's Choice",
    why: "The most capable all-around AI writer. Handles blog posts, emails, creative writing, scripts, and more with GPT-4o quality.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "claude",
    name: "Claude",
    tagline: "Best for long-form writing",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "✍️ Best Long-Form",
    why: "Anthropic's Claude writes the most natural, human-like prose of any AI tool. Handles 200,000 token documents without losing context.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 3,
    slug: "jasper",
    name: "Jasper AI",
    tagline: "Best for marketing copy",
    price: "From $39/mo",
    rating: 4.5,
    badge: "📢 Best for Marketers",
    why: "Purpose-built for marketing teams. Brand voice training, 50+ templates, and SEO mode make it the top choice for content marketing.",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
  },
  {
    rank: 4,
    slug: "grammarly",
    name: "Grammarly",
    tagline: "Best writing assistant",
    price: "Free / $12/mo",
    rating: 4.6,
    badge: "✅ Best Assistant",
    why: "Works everywhere you write. Real-time suggestions, tone adjustments, and plagiarism detection make every piece of writing better.",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "writesonic",
    name: "Writesonic",
    tagline: "Best for SEO content",
    price: "Free / $16/mo",
    rating: 4.4,
    badge: "🔍 Best for SEO",
    why: "Built-in Surfer SEO integration and a full suite of SEO writing tools make Writesonic the go-to for content marketers focused on organic search.",
    affiliateUrl: "https://writesonic.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "notion",
    name: "Notion AI",
    tagline: "Best for teams",
    price: "$10/mo add-on",
    rating: 4.4,
    badge: "👥 Best for Teams",
    why: "AI built directly into your team's workspace. Write, summarize, and generate content without leaving Notion.",
    affiliateUrl: "https://notion.so/?ref=besteai",
  },
  {
    rank: 7,
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "Best free option",
    price: "Free / $49/mo",
    rating: 4.3,
    badge: "💸 Best Free Plan",
    why: "Generous free plan with 2,000 words/month. Good for small business owners who need occasional AI writing assistance.",
    affiliateUrl: "https://copy.ai/?ref=besteai",
  },
  {
    rank: 8,
    slug: "perplexity-pages",
    name: "Perplexity Pages",
    tagline: "Best for research-based writing",
    price: "Free / $20/mo",
    rating: 4.4,
    badge: "🔬 Best for Research",
    why: "Combines real-time web research with beautiful document publishing. Every claim is cited — ideal for fact-based content.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
];

export default function BestAIWritingToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          ✍️ Writing Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Writing Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The top AI writing tools ranked by quality, price, and use case. Updated for 2025.
        </p>
      </div>

      <div className="space-y-6">
        {writingTools.map((tool) => (
          <div
            key={tool.slug}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2 py-1 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-indigo-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-indigo-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Rank AI Writing Tools</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We test every tool with identical prompts across writing quality, speed, accuracy, and value for money. Rankings are updated quarterly. We earn a small commission when you use our affiliate links — at no extra cost to you.
        </p>
      </div>
    </main>
  );
}
