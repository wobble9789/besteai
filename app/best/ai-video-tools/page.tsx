import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Video Tools 2025 — Top 8 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI video tools of 2025 ranked. From Sora to Runway to HeyGen — find the right AI video generator for creators, marketers, and businesses.",
};

const videoTools = [
  {
    rank: 1,
    slug: "runway",
    name: "Runway",
    tagline: "Best overall AI video generator",
    price: "Free / $12/mo",
    rating: 4.8,
    badge: "🏆 Editor's Choice",
    why: "The industry standard for AI video generation. Gen-3 Alpha produces stunning cinematic clips with precise motion control. Used by Hollywood studios.",
    affiliateUrl: "https://runwayml.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "heygen",
    name: "HeyGen",
    tagline: "Best for AI avatar videos",
    price: "Free / $29/mo",
    rating: 4.7,
    badge: "🎭 Best Avatars",
    why: "Create professional spokesperson videos with realistic AI avatars. Perfect for sales, training, and marketing videos without a camera crew.",
    affiliateUrl: "https://heygen.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "synthesia",
    name: "Synthesia",
    tagline: "Best for corporate video",
    price: "From $22/mo",
    rating: 4.6,
    badge: "🏢 Best Corporate",
    why: "150+ AI avatars, 120+ languages, and a teleprompter-style script system. The go-to for enterprise training and explainer videos.",
    affiliateUrl: "https://synthesia.io/?ref=besteai",
  },
  {
    rank: 4,
    slug: "pika",
    name: "Pika",
    tagline: "Best for quick AI clips",
    price: "Free / $8/mo",
    rating: 4.5,
    badge: "⚡ Best Speed",
    why: "Generate short video clips from text or images in seconds. Simple interface, great results for social media content.",
    affiliateUrl: "https://pika.art/?ref=besteai",
  },
  {
    rank: 5,
    slug: "kling",
    name: "Kling AI",
    tagline: "Best free video generator",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "💸 Best Free",
    why: "Kling produces surprisingly high-quality 5-second clips from text prompts. Generous free tier makes it accessible for everyone.",
    affiliateUrl: "https://klingai.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "descript",
    name: "Descript",
    tagline: "Best for video editing + AI",
    price: "Free / $12/mo",
    rating: 4.5,
    badge: "✂️ Best Editing",
    why: "Edit video like a document. Remove filler words, clone your voice, and use AI overdub to fix mistakes without re-recording.",
    affiliateUrl: "https://descript.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "sora",
    name: "Sora",
    tagline: "Best AI for cinematic video",
    price: "Included in ChatGPT Plus",
    rating: 4.6,
    badge: "🎬 Most Cinematic",
    why: "OpenAI's Sora creates breathtaking cinematic videos up to 1 minute long. Available to ChatGPT Plus subscribers.",
    affiliateUrl: "https://openai.com/sora?ref=besteai",
  },
  {
    rank: 8,
    slug: "loom",
    name: "Loom AI",
    tagline: "Best for async video messaging",
    price: "Free / $12.50/mo",
    rating: 4.4,
    badge: "📹 Best Async",
    why: "Record, share, and now auto-summarize screen recordings with AI. Indispensable for remote teams and product demos.",
    affiliateUrl: "https://loom.com/?ref=besteai",
  },
];

export default function BestAIVideoToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🎬 Video Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Video Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI video generation has exploded in 2025. Whether you need cinematic clips, avatar-based explainers, or fast social content — these are the tools that deliver.
        </p>
      </div>

      <div className="space-y-6">
        {videoTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-purple-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-purple-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
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
            {videoTools.map((tool) => (
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

      <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Verdict</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For most creators, <strong>Runway</strong> is the best all-around choice. Need AI avatars? Go with <strong>HeyGen</strong> or <strong>Synthesia</strong>. On a budget? <strong>Kling AI</strong> offers the best free tier. Rankings updated April 2025.
        </p>
      </div>
    </main>
  );
}
