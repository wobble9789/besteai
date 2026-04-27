import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Summarizer Tools 2025 — Top 7 Ranked | BestAI.net",
  description:
    "The best AI summarizer tools of 2025. Save hours of reading — these tools extract key insights from articles, PDFs, videos, and meetings instantly.",
};

const summarizerTools = [
  {
    rank: 1,
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "Best free summarizer",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🏆 Best Free",
    why: "Summarizes any web page, article, or YouTube video with source citations. The free tier is genuinely powerful — just paste a URL and get instant insights.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 2,
    slug: "claude",
    name: "Claude",
    tagline: "Best for long documents",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "📄 Best for PDFs",
    why: "200,000-token context window means Claude can summarize entire books, long reports, and legal documents. The comprehension quality is exceptional.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 3,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best for custom summaries",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🎯 Most Flexible",
    why: "Customize exactly how you want your summary: bullet points, key decisions, action items, ELI5 explanations. Unmatched flexibility for any format.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "quillbot",
    name: "QuillBot",
    tagline: "Best quick summarizer",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "⚡ Fastest",
    why: "Purpose-built summarizer — paste text, choose key sentences or paragraph mode, set length, done in 5 seconds. Clean and simple.",
    affiliateUrl: "https://quillbot.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "notion",
    name: "Notion AI",
    tagline: "Best for workspace summaries",
    price: "+$10/mo",
    rating: 4.5,
    badge: "🗂️ Best In-Workspace",
    why: "Summarize any page or database in your Notion workspace. Ideal for meeting notes, research databases, and project documentation.",
    affiliateUrl: "https://notion.so/?ref=besteai",
  },
  {
    rank: 6,
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "Best for meeting summaries",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🎙️ Best Meetings",
    why: "Transcribes and summarizes meetings, podcasts, and interviews automatically. Generates action items and key points from every recording.",
    affiliateUrl: "https://otter.ai/?ref=besteai",
  },
  {
    rank: 7,
    slug: "gamma-ai",
    name: "Gamma AI",
    tagline: "Best for visual summaries",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "📊 Best Visual",
    why: "Transforms summaries into beautiful presentations and documents. Perfect when you need to share insights visually rather than as plain text.",
    affiliateUrl: "https://gamma.app/?ref=besteai",
  },
];

export default function BestAISummarizersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          ⚡ Summarizer Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Summarizer Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stop reading everything. These AI tools extract what matters from articles, PDFs, videos, and meetings in seconds — saving you hours every week.
        </p>
      </div>

      <div className="space-y-6">
        {summarizerTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-green-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Summarizer Tools Comparison</h2>
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
            {summarizerTools.map((tool) => (
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

      <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Free</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with <strong>Perplexity AI (free)</strong> for web articles and <strong>Claude (free)</strong> for long PDFs. These two tools alone will save you hours of reading every week at zero cost.
        </p>
      </div>
    </main>
  );
}
