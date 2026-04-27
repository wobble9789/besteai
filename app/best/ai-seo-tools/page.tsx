import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI SEO Tools 2025 — Top 8 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI SEO tools of 2025, ranked by features, price, and results. From Surfer SEO to Semrush, find the right SEO tool for your needs.",
};

const seoTools = [
  {
    rank: 1,
    slug: "surfer-seo",
    name: "Surfer SEO",
    tagline: "Best for on-page content optimization",
    price: "$89/mo",
    rating: 4.4,
    badge: "🏆 Best Content Optimizer",
    why: "The industry standard for on-page SEO. Write inside Surfer's Content Editor and get real-time scores based on NLP analysis of the top-ranking pages for your keyword.",
    affiliateUrl: "https://surferseo.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "semrush",
    name: "Semrush",
    tagline: "Best all-in-one SEO platform",
    price: "$139/mo",
    rating: 4.6,
    badge: "🔧 Most Complete SEO Suite",
    why: "The most comprehensive SEO platform available. Covers keyword research, competitor analysis, backlinks, technical audits, and content optimization in one place.",
    affiliateUrl: "https://semrush.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "clearscope",
    name: "Clearscope",
    tagline: "Best for enterprise content teams",
    price: "$189/mo",
    rating: 4.4,
    badge: "🏢 Best Enterprise Option",
    why: "Trusted by Adobe, HubSpot, and Condé Nast. Clearscope provides reliable content grading and integrates cleanly into enterprise workflows.",
    affiliateUrl: "https://clearscope.io/?ref=besteai",
  },
  {
    rank: 4,
    slug: "scalenut",
    name: "Scalenut",
    tagline: "Best affordable SEO content platform",
    price: "$39/mo",
    rating: 4.2,
    badge: "💰 Best Value SEO Tool",
    why: "Combines AI writing with keyword clustering and SERP analysis at a fraction of the price of Surfer SEO. Great for bloggers and small agencies.",
    affiliateUrl: "https://scalenut.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "writesonic",
    name: "Writesonic",
    tagline: "Best AI writer with built-in SEO",
    price: "Free / $16/mo",
    rating: 4.4,
    badge: "✍️ Best AI Writer + SEO",
    why: "Writesonic combines AI content generation with native Surfer SEO integration, making it a strong choice for SEO-focused content teams on a budget.",
    affiliateUrl: "https://writesonic.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "jasper",
    name: "Jasper AI",
    tagline: "Best marketing copy with SEO integration",
    price: "From $39/mo",
    rating: 4.5,
    badge: "📢 Best for Marketing SEO",
    why: "Jasper's native Surfer SEO integration lets marketing teams write brand-consistent SEO content at scale. The best choice for content marketing teams.",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
  },
  {
    rank: 7,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best general AI for SEO tasks",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🤖 Best Budget SEO Assist",
    why: "With the right prompts, ChatGPT can handle keyword research, meta descriptions, title tags, content outlines, and more. The most affordable starting point.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 8,
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "Best for AI-powered SEO research",
    price: "Free / $20/mo",
    rating: 4.5,
    badge: "🔍 Best for Research",
    why: "Perplexity's cited search results make it ideal for SEO research: finding stats, checking competitor angles, and discovering content gaps quickly.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
];

export default function BestAISEOToolsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
          Best Lists
        </span>
        <h1 className="text-4xl font-bold mt-2 mb-4">
          Best AI SEO Tools 2025
        </h1>
        <p className="text-xl text-gray-600">
          The top AI-powered SEO tools ranked by features, value, and real-world
          results. Whether you need content optimization, keyword research, or a
          complete SEO suite, this list has you covered.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <p className="text-sm text-blue-800">
          <strong>How we rank:</strong> Tools are evaluated on SEO feature depth,
          content optimization quality, integrations, value for money, and
          real-world ranking results.
        </p>
      </div>

      <div className="space-y-6">
        {seoTools.map((tool) => (
          <div
            key={tool.rank}
            className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {tool.rank}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl font-bold">{tool.name}</h2>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-2">{tool.tagline}</p>
                <p className="text-gray-700 mb-4">{tool.why}</p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-600">
                      {tool.price}
                    </span>
                    <span className="text-sm text-yellow-600">
                      {"★".repeat(Math.floor(tool.rating))} {tool.rating}
                    </span>
                  </div>
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Try {tool.name} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-xl font-bold mb-3">How to Choose an AI SEO Tool</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Content creators & bloggers:</strong> Start with{" "}
            <strong>Surfer SEO</strong> for on-page optimization. Its Content
            Editor is the best tool for ranking new articles.
          </li>
          <li>
            <strong>SEO agencies:</strong> <strong>Semrush</strong> covers
            everything — technical, backlinks, content, and rank tracking in one
            platform.
          </li>
          <li>
            <strong>Budget-conscious:</strong> <strong>Scalenut</strong> at
            $39/mo gives you keyword clustering and SERP analysis at a fraction
            of competitor prices.
          </li>
          <li>
            <strong>Enterprise teams:</strong> <strong>Clearscope</strong>{" "}
            integrates cleanly into enterprise workflows with reliable,
            consistent content grading.
          </li>
        </ul>
      </div>
    </main>
  );
}
