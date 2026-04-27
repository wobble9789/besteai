import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Marketing Tools 2025 — Top 6 Ranked | BestAI.net",
  description:
    "The best AI marketing tools of 2025. Jasper, Copy.ai, Semrush AI, Canva — ranked by ROI, features, and ease of use for marketers.",
};

const marketingTools = [
  {
    rank: 1,
    slug: "jasper",
    name: "Jasper AI",
    tagline: "Best for marketing copy",
    price: "From $39/mo",
    rating: 4.7,
    badge: "🏆 Editor's Choice",
    why: "Purpose-built for marketing teams. Brand voice training, 50+ templates, campaigns, and SEO mode in one platform. The premium choice for serious marketers.",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
  },
  {
    rank: 2,
    slug: "semrush",
    name: "Semrush AI",
    tagline: "Best for SEO marketing",
    price: "From $129/mo",
    rating: 4.7,
    badge: "🔍 Best SEO",
    why: "The industry-standard SEO tool now with AI content generation, keyword research, competitor analysis, and automated content briefs. Worth every penny.",
    affiliateUrl: "https://semrush.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "canva",
    name: "Canva AI",
    tagline: "Best for visual marketing",
    price: "Free / $15/mo",
    rating: 4.7,
    badge: "🎨 Best Visual",
    why: "AI-generated images, Magic Design, background removal, and brand kit in one tool. The go-to for creating scroll-stopping social media content at scale.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "writesonic",
    name: "Writesonic",
    tagline: "Best for SEO content creation",
    price: "Free / $16/mo",
    rating: 4.5,
    badge: "📝 Best Content",
    why: "Built-in Surfer SEO integration, factual AI web search, and a ChatSonic chatbot. Creates SEO-optimized blog posts that actually rank.",
    affiliateUrl: "https://writesonic.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "Best for automated workflows",
    price: "Free / $49/mo",
    rating: 4.4,
    badge: "⚡ Best Automation",
    why: "Copy.ai's GTM AI Platform automates your entire content workflow — from research to drafts to distribution. Game-changer for marketing ops teams.",
    affiliateUrl: "https://copy.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "grammarly",
    name: "Grammarly Business",
    tagline: "Best for brand voice consistency",
    price: "From $15/mo per member",
    rating: 4.5,
    badge: "✅ Best Brand Voice",
    why: "Enforce brand voice guidelines across your entire team's writing. Style guides, tone settings, and real-time feedback for every piece of content you publish.",
    affiliateUrl: "https://grammarly.com/business?ref=besteai",
  },
];

export default function BestAIMarketingToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          📢 Marketing Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Marketing Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI is transforming marketing. These tools help you create more content, rank higher on Google, and run better campaigns — with a fraction of the effort.
        </p>
      </div>

      <div className="space-y-6">
        {marketingTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-pink-100 text-pink-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-pink-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-pink-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-pink-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Marketing AI Tools Comparison</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border border-gray-200">Tool</th>
              <th className="text-left p-3 border border-gray-200">Best For</th>
              <th className="text-left p-3 border border-gray-200">Price</th>
              <th className="text-left p-3 border border-gray-200">Rating</th>
            </tr>
          </thead>
          <tbody>
            {marketingTools.map((tool) => (
              <tr key={tool.slug} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">{tool.name}</td>
                <td className="p-3 border border-gray-200">{tool.tagline}</td>
                <td className="p-3 border border-gray-200">{tool.price}</td>
                <td className="p-3 border border-gray-200">⭐ {tool.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 bg-pink-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Marketing Stack Recommendation</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with <strong>Canva AI</strong> (free) + <strong>Writesonic</strong> for content creation. Add <strong>Semrush</strong> when you&apos;re serious about SEO. Scale to <strong>Jasper</strong> when you have a team and need brand consistency at scale.
        </p>
      </div>
    </main>
  );
}
