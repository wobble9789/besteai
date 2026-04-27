import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Chatbots 2025 — Top 7 Ranked & Reviewed | BestAI.net",
  description:
    "ChatGPT, Claude, Gemini, Perplexity — the best AI chatbots of 2025 ranked by intelligence, features, and value. Find your perfect AI assistant.",
};

const chatbots = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best overall AI chatbot",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🏆 Editor's Choice",
    why: "The most capable and versatile AI chatbot. GPT-4o handles text, images, voice, files, and web search in one place. The gold standard everyone compares against.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "claude",
    name: "Claude",
    tagline: "Best for nuanced conversation",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "✍️ Best Conversationalist",
    why: "Anthropic's Claude is preferred for thoughtful, nuanced responses. Its 200K context window is unmatched, and it's notably more willing to engage with complex topics.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 3,
    slug: "gemini",
    name: "Gemini",
    tagline: "Best for Google users",
    price: "Free / $20/mo",
    rating: 4.6,
    badge: "🔗 Best Google Integration",
    why: "Deep integration with Google Workspace, YouTube, and Search makes Gemini uniquely powerful if you live in the Google ecosystem.",
    affiliateUrl: "https://gemini.google.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "perplexity",
    name: "Perplexity",
    tagline: "Best for research & facts",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🔍 Best for Research",
    why: "Every answer comes with real-time web sources. The best chatbot when accuracy and citations matter — researchers, journalists, and students love it.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 5,
    slug: "grok",
    name: "Grok",
    tagline: "Best for real-time news",
    price: "Free / $16/mo",
    rating: 4.4,
    badge: "📰 Best for News",
    why: "Built by xAI with direct access to X/Twitter data. Uniquely good at real-time events, trending topics, and has a witty, uncensored personality.",
    affiliateUrl: "https://grok.x.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "meta-ai",
    name: "Meta AI",
    tagline: "Best free chatbot",
    price: "Free",
    rating: 4.3,
    badge: "💸 Best Free",
    why: "Powered by Llama 3, Meta AI is built into WhatsApp, Instagram, and Facebook. Zero cost, surprisingly capable, and meets you where you already are.",
    affiliateUrl: "https://ai.meta.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "character-ai",
    name: "Character.AI",
    tagline: "Best for AI personas",
    price: "Free / $9.99/mo",
    rating: 4.2,
    badge: "🎭 Best Personas",
    why: "Create and chat with custom AI characters. Massively popular for roleplay, entertainment, and language practice. 20M+ daily users.",
    affiliateUrl: "https://character.ai/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI chatbot in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT is the best overall AI chatbot. Claude is best for writing and long documents. Perplexity AI is best for real-time research with cited sources.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI chatbots free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, ChatGPT, Claude, Gemini, and Perplexity all offer free tiers sufficient for everyday tasks.",
      },
    },
    {
      "@type": "Question",
      name: "Is Claude better than ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude excels at long-form writing and handling large documents. ChatGPT wins for coding and versatility. Your use case determines the winner.",
      },
    }
  ],
};

export default function BestAIChatbotsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💬 AI Chatbots
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Chatbots 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The AI chatbot wars have never been more competitive. We tested them all — here are the 7 best AI chatbots of 2025, ranked by real-world performance.
        </p>
      </div>

      <div className="space-y-6">
        {chatbots.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-blue-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Chatbot Comparison 2025</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border border-gray-200">Chatbot</th>
              <th className="text-left p-3 border border-gray-200">Best For</th>
              <th className="text-left p-3 border border-gray-200">Price</th>
              <th className="text-left p-3 border border-gray-200">Rating</th>
            </tr>
          </thead>
          <tbody>
            {chatbots.map((tool) => (
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

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Which AI Chatbot Is Best for You?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For most people, <strong>ChatGPT</strong> or <strong>Claude</strong> is the best choice — both offer free tiers and $20/mo premium plans. Need research with sources? Use <strong>Perplexity</strong>. Want real-time news? Try <strong>Grok</strong>.
        </p>
      </div>


        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div key={"0"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">What is the best AI chatbot in 2025?</h3>
                <p className="text-gray-600 text-sm">ChatGPT is the best overall AI chatbot. Claude is best for writing and long documents. Perplexity AI is best for real-time research with cited sources.</p>
              </div>
            <div key={"1"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Are AI chatbots free to use?</h3>
                <p className="text-gray-600 text-sm">Yes, ChatGPT, Claude, Gemini, and Perplexity all offer free tiers sufficient for everyday tasks.</p>
              </div>
            <div key={"2"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Is Claude better than ChatGPT?</h3>
                <p className="text-gray-600 text-sm">Claude excels at long-form writing and handling large documents. ChatGPT wins for coding and versatility. Your use case determines the winner.</p>
              </div>
          </div>
        </div>
    </main>
    </>
  );
}
