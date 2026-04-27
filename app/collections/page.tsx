import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Collections & Bundles 2025 — Curated Stacks | BestAI.net",
  description:
    "Curated AI tool bundles for every use case. Content creators, developers, students, marketers, and freelancers — find the perfect AI stack for your workflow.",
};

interface CollectionTool {
  name: string;
  role: string;
  affiliateUrl: string;
  price: string;
}

interface Collection {
  id: string;
  emoji: string;
  name: string;
  description: string;
  bestFor: string;
  totalCost: string;
  tools: CollectionTool[];
  color: string;
  textColor: string;
  badgeBg: string;
  badgeText: string;
}

const collections: Collection[] = [
  {
    id: "content-creator",
    emoji: "🎨",
    name: "The Content Creator Stack",
    description:
      "Everything you need to ideate, write, design, voice, and distribute content at scale. This stack powers solo creators generating professional-quality content across every format.",
    bestFor: "YouTubers, bloggers, social media creators, podcasters",
    totalCost: "From $35/mo (or ~$140 full stack)",
    color: "from-purple-50 to-pink-50",
    textColor: "text-purple-700",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    tools: [
      {
        name: "Jasper AI",
        role: "Long-form writing & blog posts",
        affiliateUrl: "https://www.jasper.ai/?ref=besteai",
        price: "$39/mo",
      },
      {
        name: "Canva AI",
        role: "Graphics, thumbnails & designs",
        affiliateUrl: "https://www.canva.com/?ref=besteai",
        price: "Free / $15/mo",
      },
      {
        name: "ElevenLabs",
        role: "AI voiceovers & narration",
        affiliateUrl: "https://elevenlabs.io/?ref=besteai",
        price: "Free / $5/mo",
      },
      {
        name: "Buffer",
        role: "Social media scheduling",
        affiliateUrl: "https://buffer.com/?ref=besteai",
        price: "Free / $6/mo",
      },
      {
        name: "ChatGPT",
        role: "Ideas, outlines & repurposing",
        affiliateUrl: "https://chat.openai.com/?ref=besteai",
        price: "Free / $20/mo",
      },
    ],
  },
  {
    id: "developer",
    emoji: "💻",
    name: "The Developer Stack",
    description:
      "The AI toolkit that makes developers 10x more productive. Write code faster, debug smarter, and deploy with confidence. Used by engineers at top-tier tech companies.",
    bestFor: "Software engineers, indie hackers, full-stack developers",
    totalCost: "From $10/mo (or ~$50 full stack)",
    color: "from-gray-50 to-slate-50",
    textColor: "text-gray-700",
    badgeBg: "bg-gray-100",
    badgeText: "text-gray-700",
    tools: [
      {
        name: "GitHub Copilot",
        role: "AI code completion in your IDE",
        affiliateUrl: "https://github.com/features/copilot?ref=besteai",
        price: "$10/mo",
      },
      {
        name: "Cursor",
        role: "AI-native code editor",
        affiliateUrl: "https://cursor.sh/?ref=besteai",
        price: "Free / $20/mo",
      },
      {
        name: "Claude",
        role: "Architecture & code review",
        affiliateUrl: "https://claude.ai/?ref=besteai",
        price: "Free / $20/mo",
      },
      {
        name: "Together AI",
        role: "Run open-source AI models via API",
        affiliateUrl: "https://www.together.ai/?ref=besteai",
        price: "Pay-per-use",
      },
      {
        name: "ChatGPT",
        role: "Debugging & documentation",
        affiliateUrl: "https://chat.openai.com/?ref=besteai",
        price: "Free / $20/mo",
      },
    ],
  },
  {
    id: "student",
    emoji: "🎓",
    name: "The Student Stack",
    description:
      "Study smarter, write better essays, and ace your exams. This stack covers every aspect of student life — from flashcards and tutoring to research and writing assistance.",
    bestFor: "High school students, university students, lifelong learners",
    totalCost: "Free (all have strong free tiers)",
    color: "from-blue-50 to-indigo-50",
    textColor: "text-blue-700",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    tools: [
      {
        name: "ChatGPT",
        role: "Essays, research & concept explanations",
        affiliateUrl: "https://chat.openai.com/?ref=besteai",
        price: "Free / $20/mo",
      },
      {
        name: "Quizlet AI",
        role: "Flashcards & adaptive studying",
        affiliateUrl: "https://quizlet.com/?ref=besteai",
        price: "Free / $8/mo",
      },
      {
        name: "Elicit",
        role: "AI research assistant with citations",
        affiliateUrl: "https://elicit.com/?ref=besteai",
        price: "Free / $10/mo",
      },
      {
        name: "Grammarly",
        role: "Grammar, style & plagiarism checking",
        affiliateUrl: "https://grammarly.com/?ref=besteai",
        price: "Free / $12/mo",
      },
      {
        name: "Khanmigo",
        role: "AI tutor for guided learning",
        affiliateUrl: "https://www.khanacademy.org/khan-labs?ref=besteai",
        price: "Free",
      },
    ],
  },
  {
    id: "marketing",
    emoji: "📈",
    name: "The Marketing Stack",
    description:
      "Run campaigns, create content, schedule posts, and analyze performance — all with AI. This stack replaces an entire junior marketing team and works 24/7.",
    bestFor: "Marketing managers, growth hackers, small business owners",
    totalCost: "From $50/mo (or ~$200 full stack)",
    color: "from-green-50 to-emerald-50",
    textColor: "text-green-700",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    tools: [
      {
        name: "Semrush",
        role: "SEO, keyword research & competitors",
        affiliateUrl: "https://www.semrush.com/?ref=besteai",
        price: "$140/mo",
      },
      {
        name: "Jasper AI",
        role: "Ad copy, landing pages & blog content",
        affiliateUrl: "https://www.jasper.ai/?ref=besteai",
        price: "$39/mo",
      },
      {
        name: "Canva AI",
        role: "Creatives, social graphics & ads",
        affiliateUrl: "https://www.canva.com/?ref=besteai",
        price: "Free / $15/mo",
      },
      {
        name: "Predis AI",
        role: "AI social media post generation",
        affiliateUrl: "https://predis.ai/?ref=besteai",
        price: "$29/mo",
      },
      {
        name: "Buffer",
        role: "Multi-channel social scheduling",
        affiliateUrl: "https://buffer.com/?ref=besteai",
        price: "Free / $6/mo",
      },
    ],
  },
  {
    id: "freelancer",
    emoji: "🚀",
    name: "The Freelancer Stack",
    description:
      "The lean, powerful toolkit for freelancers and solopreneurs. Handle client work faster, communicate professionally, and automate repetitive tasks — all under $50/month.",
    bestFor: "Freelancers, consultants, solopreneurs, virtual assistants",
    totalCost: "From free (or ~$50/mo for full paid stack)",
    color: "from-orange-50 to-amber-50",
    textColor: "text-orange-700",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
    tools: [
      {
        name: "ChatGPT",
        role: "Writing, proposals & client communication",
        affiliateUrl: "https://chat.openai.com/?ref=besteai",
        price: "Free / $20/mo",
      },
      {
        name: "Grammarly",
        role: "Professional writing & email polish",
        affiliateUrl: "https://grammarly.com/?ref=besteai",
        price: "Free / $12/mo",
      },
      {
        name: "Canva AI",
        role: "Client deliverables & presentations",
        affiliateUrl: "https://www.canva.com/?ref=besteai",
        price: "Free / $15/mo",
      },
      {
        name: "Otter.ai",
        role: "Client call transcription & notes",
        affiliateUrl: "https://otter.ai/?ref=besteai",
        price: "Free / $10/mo",
      },
      {
        name: "Zapier",
        role: "Automation between all your tools",
        affiliateUrl: "https://zapier.com/?ref=besteai",
        price: "Free / $20/mo",
      },
    ],
  },
];

export default function CollectionsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🎒 Curated Bundles
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          AI Tool Collections
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stop building your stack from scratch. These curated AI tool bundles are
          optimized for specific workflows — pick your use case and go.
        </p>
      </div>

      <div className="space-y-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className={`bg-gradient-to-br ${collection.color} border border-gray-100 rounded-2xl p-8 shadow-sm`}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{collection.emoji}</span>
                  <h2 className={`text-2xl font-bold ${collection.textColor}`}>
                    {collection.name}
                  </h2>
                </div>
                <p className="text-gray-700 mb-3">{collection.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${collection.badgeBg} ${collection.badgeText}`}
                  >
                    Best for: {collection.bestFor}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-gray-600">
                    💰 {collection.totalCost}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-3 mt-6">
              {collection.tools.map((tool, i) => (
                <a
                  key={i}
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-400 w-5">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-gray-400 mx-2">—</span>
                      <span className="text-sm text-gray-500">{tool.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      {tool.price}
                    </span>
                    <span className="text-indigo-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Build Your Custom Stack
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Not sure which tools to combine? Browse all 130+ AI tools in our directory
          and filter by category, price, and use case.
        </p>
        <a
          href="/tools"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Browse All AI Tools →
        </a>
      </div>
    </main>
  );
}
