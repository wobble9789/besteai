import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cheap AI Tools 2025 — Free & Budget Options Ranked | BestAI.net",
  description:
    "The best cheap and free AI tools of 2025. Get the power of AI without paying $20/mo — these tools deliver serious value at zero or low cost.",
};

const cheapTools = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT Free",
    tagline: "Best free AI chatbot",
    price: "Free",
    rating: 4.7,
    badge: "🏆 Best Free Overall",
    why: "The free version of ChatGPT still gives you GPT-4o access (with limits). Write, code, research, and create — the world's most capable AI at zero cost.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "gemini",
    name: "Gemini Free",
    tagline: "Best free Google AI",
    price: "Free",
    rating: 4.5,
    badge: "🔗 Best Free Google",
    why: "Google's Gemini 1.5 Flash is free, fast, and integrated with Google Search. No sign-up required at gemini.google.com — great for quick tasks.",
    affiliateUrl: "https://gemini.google.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "canva",
    name: "Canva Free",
    tagline: "Best free AI design tool",
    price: "Free",
    rating: 4.6,
    badge: "🎨 Best Free Design",
    why: "Canva's free plan includes AI image generation, background removal, and Magic Design. Professional-quality graphics at zero cost.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "perplexity",
    name: "Perplexity Free",
    tagline: "Best free research AI",
    price: "Free",
    rating: 4.6,
    badge: "🔍 Best Free Research",
    why: "Unlimited free searches with citations. The free tier uses Claude and GPT-4o alternately — you get premium-level research completely free.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 5,
    slug: "kling",
    name: "Kling AI Free",
    tagline: "Best free AI video",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🎬 Best Free Video",
    why: "Generate 5-second AI video clips for free every day. The quality rivals paid tools — best free option for AI video generation in 2025.",
    affiliateUrl: "https://klingai.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "elevenlabs",
    name: "ElevenLabs Free",
    tagline: "Best cheap voice AI",
    price: "Free / $5/mo",
    rating: 4.7,
    badge: "🎙️ Best Budget Voice",
    why: "10,000 characters/month free — enough for short videos and demos. The $5/mo Starter plan is the best deal in AI voice generation.",
    affiliateUrl: "https://elevenlabs.io/?ref=besteai",
  },
  {
    rank: 7,
    slug: "suno",
    name: "Suno Free",
    tagline: "Best free AI music",
    price: "Free / $8/mo",
    rating: 4.5,
    badge: "🎵 Best Free Music",
    why: "50 free credits daily — enough to generate several full songs every day. The most accessible AI music generator with impressive quality.",
    affiliateUrl: "https://suno.ai/?ref=besteai",
  },
  {
    rank: 8,
    slug: "grammarly",
    name: "Grammarly Free",
    tagline: "Best free writing AI",
    price: "Free / $12/mo",
    rating: 4.5,
    badge: "✍️ Best Free Writing",
    why: "The free Grammarly catches grammar errors, checks tone, and suggests rewrites — all without paying a cent. Works in every browser and app.",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
  },
];

export default function BestCheapAIToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💸 Free & Budget AI
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best Cheap AI Tools 2025 (Free & Budget)</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          You don&apos;t need to spend $100/mo to use powerful AI. These free and budget AI tools deliver serious value — ranked by quality and value for money.
        </p>
      </div>

      <div className="space-y-6">
        {cheapTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-emerald-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Free AI Tools Quick Comparison</h2>
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
            {cheapTools.map((tool) => (
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

      <div className="mt-12 bg-emerald-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">The Free AI Stack (Zero Cost)</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <strong>ChatGPT Free</strong> + <strong>Canva Free</strong> + <strong>Grammarly Free</strong> + <strong>Perplexity Free</strong> = a complete AI toolkit at $0/month. Start here, then upgrade only what you actually use daily.
        </p>
      </div>
    </main>
  );
}
