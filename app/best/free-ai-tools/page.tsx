import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free AI Tools 2025 — Top Free AI Tools That Actually Work | BestAI.net",
  description:
    "The best free AI tools of 2025 — no credit card required. From ChatGPT free to Canva AI, here are the top free AI tools worth using today.",
};

const freeTools = [
  {
    rank: 1,
    name: "ChatGPT (Free)",
    tagline: "Best free AI assistant",
    freeLimit: "Unlimited GPT-3.5, limited GPT-4o",
    rating: 4.7,
    badge: "🏆 Best Overall Free",
    why: "The most capable free AI tool available. GPT-3.5 is free forever with no limits. Even the free plan gets limited access to GPT-4o.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    name: "Google Gemini",
    tagline: "Best free AI with Google integration",
    freeLimit: "Unlimited on free plan",
    rating: 4.5,
    badge: "🔍 Best Free + Search",
    why: "Completely free with real-time Google search. Integrated into Gmail, Drive, and Google Workspace. Excellent for research and daily tasks.",
    affiliateUrl: "https://gemini.google.com/?ref=besteai",
  },
  {
    rank: 3,
    name: "Claude (Free)",
    tagline: "Best free AI for writing",
    freeLimit: "Daily usage limits apply",
    rating: 4.6,
    badge: "✍️ Best Free Writer",
    why: "Claude's free plan produces the best writing quality of any free AI tool. Daily limits apply but are generous for occasional use.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 4,
    name: "Fathom AI",
    tagline: "Best free meeting tool",
    freeLimit: "Unlimited meeting recordings",
    rating: 4.5,
    badge: "🎙️ Best Free Meetings",
    why: "Fathom's free plan includes unlimited meeting recordings, transcriptions, and AI summaries. One of the most generous free plans in AI.",
    affiliateUrl: "https://fathom.video/?ref=besteai",
  },
  {
    rank: 5,
    name: "Canva (Free)",
    tagline: "Best free design AI",
    freeLimit: "Free templates + limited AI credits",
    rating: 4.5,
    badge: "🎨 Best Free Design",
    why: "Canva's free plan includes thousands of templates and basic AI features including background removal and text-to-image generation.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
  {
    rank: 6,
    name: "Perplexity AI",
    tagline: "Best free AI search",
    freeLimit: "5 Pro searches/day, unlimited standard",
    rating: 4.5,
    badge: "🔎 Best Free Search",
    why: "Free plan includes unlimited AI-powered search with citations. 5 Pro searches per day. Replaces Google for most research tasks.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 7,
    name: "Meta AI",
    tagline: "Best free AI in social apps",
    freeLimit: "Completely free",
    rating: 4.2,
    badge: "📱 Best Free Mobile",
    why: "Completely free, no account needed. Built into WhatsApp, Instagram, and Facebook. Llama-powered and surprisingly capable for everyday tasks.",
    affiliateUrl: "https://meta.ai/?ref=besteai",
  },
  {
    rank: 8,
    name: "Adobe Firefly (Free)",
    tagline: "Best free AI image tool",
    freeLimit: "25 generative credits/month",
    rating: 4.3,
    badge: "🖼️ Best Free Images",
    why: "25 free generative credits per month. Commercially safe images from the most trustworthy image AI on the market. No credit card required.",
    affiliateUrl: "https://firefly.adobe.com/?ref=besteai",
  },
  {
    rank: 9,
    name: "Grammarly (Free)",
    tagline: "Best free writing assistant",
    freeLimit: "Basic grammar and spell check",
    rating: 4.4,
    badge: "📝 Best Free Writing Help",
    why: "The free plan catches grammar errors, spelling mistakes, and basic style issues everywhere you write. Works in Gmail, Google Docs, and your browser.",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
  },
  {
    rank: 10,
    name: "Gamma AI (Free)",
    tagline: "Best free presentation tool",
    freeLimit: "400 AI credits",
    rating: 4.3,
    badge: "📊 Best Free Presentations",
    why: "400 free AI credits generates 3-4 complete presentations. More than enough to test whether AI presentation tools fit your workflow.",
    affiliateUrl: "https://gamma.app/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best completely free AI tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT free tier, Perplexity AI free, and Google Gemini free are the best completely free AI tools in 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free alternative to ChatGPT Plus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Gemini offers GPT-4 level quality for free. Claude.ai has a generous free tier. Perplexity AI provides real-time web search for free.",
      },
    },
    {
      "@type": "Question",
      name: "What free AI tools are best for content creation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For writing: ChatGPT or Claude free tier. For images: Adobe Firefly free. For voice: ElevenLabs free (10,000 chars/mo).",
      },
    }
  ],
};

export default function BestFreeAIToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💸 Free Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best Free AI Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The best AI tools you can use right now — for free. No credit card required.
        </p>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
        <p className="text-green-800 text-sm font-medium text-center">
          ✅ All tools below have genuine free plans. We have tested each one and confirmed the free tier is actually useful.
        </p>
      </div>

      <div className="space-y-6">
        {freeTools.map((tool) => (
          <div
            key={tool.rank}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-green-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full">🆓 {tool.freeLimit}</span>
                </div>
              </div>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors"
              >
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Want More Power? Upgrade When You Are Ready.</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every tool above has a paid upgrade. Start free, find what works for you, then invest in the tools that actually save you time. Most paid plans cost less than a coffee per day.
        </p>
      </div>


        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div key={"0"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">What is the best completely free AI tool?</h3>
                <p className="text-gray-600 text-sm">ChatGPT free tier, Perplexity AI free, and Google Gemini free are the best completely free AI tools in 2025.</p>
              </div>
            <div key={"1"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">Is there a free alternative to ChatGPT Plus?</h3>
                <p className="text-gray-600 text-sm">Google Gemini offers GPT-4 level quality for free. Claude.ai has a generous free tier. Perplexity AI provides real-time web search for free.</p>
              </div>
            <div key={"2"} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">What free AI tools are best for content creation?</h3>
                <p className="text-gray-600 text-sm">For writing: ChatGPT or Claude free tier. For images: Adobe Firefly free. For voice: ElevenLabs free (10,000 chars/mo).</p>
              </div>
          </div>
        </div>
    </main>
    </>
  );
}
