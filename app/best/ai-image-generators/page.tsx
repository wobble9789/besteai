import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Image Generators 2025 — Top 8 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI image generators of 2025 compared. Midjourney, DALL-E 3, Flux, Stable Diffusion and more — find the right tool for your creative needs.",
};

const imageTools = [
  {
    rank: 1,
    name: "Midjourney",
    tagline: "Best for artistic quality",
    price: "$10/mo",
    rating: 4.8,
    badge: "🏆 Best Quality",
    why: "Produces the most visually stunning, artistic images of any AI generator. The gold standard for creative professionals, concept artists, and designers.",
    affiliateUrl: "https://midjourney.com/?ref=besteai",
  },
  {
    rank: 2,
    name: "DALL-E 3",
    tagline: "Best for prompt accuracy",
    price: "Included with ChatGPT",
    rating: 4.6,
    badge: "🎯 Most Accurate",
    why: "DALL-E 3 follows text prompts more accurately than any other generator. Built into ChatGPT — no extra subscription needed for Plus users.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 3,
    name: "Adobe Firefly",
    tagline: "Best for commercial use",
    price: "Free / $4.99/mo",
    rating: 4.5,
    badge: "⚖️ Commercially Safe",
    why: "Trained on licensed content. Every image is safe for commercial use without copyright concerns. The professional's choice for brand and marketing work.",
    affiliateUrl: "https://firefly.adobe.com/?ref=besteai",
  },
  {
    rank: 4,
    name: "Flux AI",
    tagline: "Best open-source option",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🔓 Best Open Source",
    why: "Black Forest Labs' Flux model produces photorealistic images rivaling Midjourney at a fraction of the cost. The best open-source image generator available.",
    affiliateUrl: "https://blackforestlabs.ai/?ref=besteai",
  },
  {
    rank: 5,
    name: "Stability AI",
    tagline: "Best for control and customization",
    price: "Free / $20/mo",
    rating: 4.3,
    badge: "🎛️ Most Customizable",
    why: "Run Stable Diffusion locally for complete control and privacy. Extensive fine-tuning options, ControlNet support, and the largest community of model creators.",
    affiliateUrl: "https://stability.ai/?ref=besteai",
  },
  {
    rank: 6,
    name: "Krea AI",
    tagline: "Best for designers",
    price: "Free / $24/mo",
    rating: 4.4,
    badge: "🎨 Best for Designers",
    why: "Real-time canvas lets you sketch rough ideas and watch AI render them instantly. The fastest way to explore visual concepts in a design workflow.",
    affiliateUrl: "https://krea.ai/?ref=besteai",
  },
  {
    rank: 7,
    name: "Ideogram",
    tagline: "Best for text in images",
    price: "Free / $7/mo",
    rating: 4.4,
    badge: "🔤 Best Text Rendering",
    why: "The only AI image generator that reliably renders legible text. Essential for posters, ads, social graphics, and any design that needs words.",
    affiliateUrl: "https://ideogram.ai/?ref=besteai",
  },
  {
    rank: 8,
    name: "Leonardo AI",
    tagline: "Best for game assets",
    price: "Free / $10/mo",
    rating: 4.3,
    badge: "🎮 Best for Gaming",
    why: "Specialized in character art, game assets, and consistent style generation. The top choice for game developers and 3D artists.",
    affiliateUrl: "https://leonardo.ai/?ref=besteai",
  },
];

export default function BestAIImageGeneratorsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🎨 Image Generators
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Image Generators 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The top AI image generators ranked by quality, accuracy, and value. Updated for 2025.
        </p>
      </div>

      <div className="space-y-6">
        {imageTools.map((tool) => (
          <div
            key={tool.rank}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-purple-600 font-medium mb-2">{tool.tagline}</p>
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
                className="flex-shrink-0 bg-purple-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors"
              >
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Test AI Image Generators</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We generate 50+ images with identical prompts across portrait photography, landscape art, product mockups, and abstract art. Rankings reflect quality, speed, price, and ease of use. Updated quarterly.
        </p>
      </div>
    </main>
  );
}
