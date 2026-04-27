import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Video Editors 2025 — Top 8 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI video editors of 2025 ranked. CapCut AI, Veed.io, Descript, and more — find the right AI video editing tool for creators, marketers, and teams.",
};

const videoEditors = [
  {
    rank: 1,
    slug: "capcut-ai",
    name: "CapCut AI",
    tagline: "Best free AI video editor",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "🏆 Best Free",
    why: "The most generous free video editor on the market. AI auto-captions, text-to-video, background removal, and a massive template library. Hugely popular with TikTok and YouTube Shorts creators.",
    affiliateUrl: "https://capcut.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "veed-io",
    name: "Veed.io",
    tagline: "Best browser-based AI editor",
    price: "Free / $18/mo",
    rating: 4.4,
    badge: "🌐 Best Browser",
    why: "Edit videos entirely in your browser — no download needed. Auto-subtitles in 100+ languages, AI background remover, and team collaboration tools make it ideal for professionals.",
    affiliateUrl: "https://veed.io/?ref=besteai",
  },
  {
    rank: 3,
    slug: "descript",
    name: "Descript",
    tagline: "Edit video like a document",
    price: "Free / $12/mo",
    rating: 4.5,
    badge: "✂️ Most Innovative",
    why: "Descript lets you edit video by editing the transcript. Remove filler words automatically, clone your voice, and fix mistakes without re-recording. A game-changer for podcasters and video creators.",
    affiliateUrl: "https://descript.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "invideo-ai",
    name: "InVideo AI",
    tagline: "Best for text-to-video",
    price: "Free / $30/mo",
    rating: 4.3,
    badge: "📝 Best Text-to-Video",
    why: "Describe what you want in text and InVideo assembles a full video with footage, voiceover, and captions. Perfect for faceless YouTube channels and fast marketing content.",
    affiliateUrl: "https://invideo.io/?ref=besteai",
  },
  {
    rank: 5,
    slug: "pictory-ai",
    name: "Pictory AI",
    tagline: "Best for content repurposing",
    price: "$23/mo",
    rating: 4.3,
    badge: "♻️ Best Repurposing",
    why: "Turn blog posts, scripts, and long videos into short, branded social clips automatically. Pictory AI-selects the best footage, adds captions, and builds the video for you.",
    affiliateUrl: "https://pictory.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "runway",
    name: "Runway",
    tagline: "Best for AI-generated video",
    price: "Free / $12/mo",
    rating: 4.8,
    badge: "🎬 Best AI Generation",
    why: "The industry standard for AI video generation. Gen-3 Alpha produces stunning cinematic clips from text prompts. More generation than editing, but essential for creative teams.",
    affiliateUrl: "https://runwayml.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "loom",
    name: "Loom AI",
    tagline: "Best for async video messaging",
    price: "Free / $12.50/mo",
    rating: 4.4,
    badge: "📹 Best Async",
    why: "Record screen and camera, then let AI summarize and add chapters automatically. The go-to for remote teams replacing emails and meetings with short video messages.",
    affiliateUrl: "https://loom.com/?ref=besteai",
  },
  {
    rank: 8,
    slug: "heygen",
    name: "HeyGen",
    tagline: "Best for AI avatar videos",
    price: "Free / $29/mo",
    rating: 4.7,
    badge: "🎭 Best Avatars",
    why: "Create professional spokesperson videos with realistic AI avatars in 40+ languages. No camera crew needed — ideal for product demos, training videos, and marketing.",
    affiliateUrl: "https://heygen.com/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI video editor in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapCut AI is the best free AI video editor in 2025. For browser-based editing, Veed.io leads. For transcript-based editing, Descript is unmatched.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free AI video editor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — CapCut AI offers the most generous free plan with AI auto-captions, templates, and background removal. Veed.io and Descript also have free tiers.",
      },
    },
    {
      "@type": "Question",
      name: "What AI video editor is best for YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CapCut AI is the top choice for YouTube Shorts and long-form videos. For faceless channels, InVideo AI automates the entire production process from a text prompt.",
      },
    },
  ],
};

export default function BestAIVideoEditorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            ✂️ Video Editors
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Video Editors 2025</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI has transformed video editing. From browser-based tools to transcript-editing and text-to-video — these are the best AI video editors available right now.
          </p>
        </div>

        <div className="space-y-6">
          {videoEditors.map((tool) => (
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
              {videoEditors.map((tool) => (
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
            For most creators, <strong>CapCut AI</strong> is the best free choice. Teams needing collaboration should try <strong>Veed.io</strong>. For podcast and interview editing, <strong>Descript</strong> is in a class of its own. Rankings updated April 2026.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
