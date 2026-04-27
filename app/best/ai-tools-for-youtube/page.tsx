import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for YouTube Creators 2025 — Top 8 Ranked | BestAI.net",
  description:
    "The top AI tools for YouTube creators in 2025. Script faster, edit smarter, and grow your channel with CapCut AI, InVideo, ElevenLabs, and more.",
};

const youtubeTools = [
  {
    rank: 1,
    slug: "capcut-ai",
    name: "CapCut AI",
    tagline: "Best AI video editor for YouTube",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "🏆 Editor's Choice",
    why: "The go-to editor for YouTube creators. AI auto-captions, text-to-video, background removal, and viral templates — all on a generous free plan. Works on mobile and desktop.",
    affiliateUrl: "https://capcut.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "invideo-ai",
    name: "InVideo AI",
    tagline: "Best for faceless YouTube channels",
    price: "Free / $30/mo",
    rating: 4.3,
    badge: "🤖 Best Faceless",
    why: "Type a prompt, get a full YouTube video. InVideo picks stock footage, generates a script, adds AI voiceover, and assembles the video automatically. Ideal for faceless channels and news content.",
    affiliateUrl: "https://invideo.io/?ref=besteai",
  },
  {
    rank: 3,
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Best AI voiceover for YouTube",
    price: "Free / $5/mo",
    rating: 4.8,
    badge: "🎙️ Best Voice",
    why: "Ultra-realistic AI voices in any language. Create professional voiceovers without recording yourself — perfect for faceless channels, multilingual content, and accessibility.",
    affiliateUrl: "https://elevenlabs.io/?ref=besteai",
  },
  {
    rank: 4,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best for YouTube script writing",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "✍️ Best Scripts",
    why: "Your scriptwriting co-pilot. Generate compelling hooks, full scripts, video descriptions, and CTAs in minutes. The highest ROI tool in any YouTube creator's stack.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "pictory-ai",
    name: "Pictory AI",
    tagline: "Best for repurposing YouTube videos",
    price: "$23/mo",
    rating: 4.3,
    badge: "♻️ Best Repurposing",
    why: "Convert your long YouTube videos into Shorts, TikToks, and Instagram Reels automatically. Pictory finds the best moments and creates shareable clips with captions.",
    affiliateUrl: "https://pictory.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Best for YouTube thumbnails",
    price: "From $10/mo",
    rating: 4.7,
    badge: "🖼️ Best Thumbnails",
    why: "Generate eye-catching thumbnail concepts with AI art. Combine Midjourney images with Canva text overlays for thumbnails that maximise CTR and stand out in search.",
    affiliateUrl: "https://midjourney.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "descript",
    name: "Descript",
    tagline: "Best for editing YouTube interviews",
    price: "Free / $12/mo",
    rating: 4.5,
    badge: "✂️ Best Editing",
    why: "Edit your YouTube videos by editing the transcript. Remove filler words in one click, cut silences automatically, and fix mistakes without re-recording.",
    affiliateUrl: "https://descript.com/?ref=besteai",
  },
  {
    rank: 8,
    slug: "canva",
    name: "Canva AI",
    tagline: "Best for YouTube channel art",
    price: "Free / $15/mo",
    rating: 4.5,
    badge: "🎨 Best Design",
    why: "Create thumbnails, channel banners, and end cards with AI. Canva Magic Design generates on-brand visuals from a text prompt — no design skills needed.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best AI tools for YouTube creators in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top AI tools for YouTube creators are CapCut AI (editing), InVideo AI (faceless channels), ElevenLabs (voiceover), ChatGPT (scripting), and Midjourney (thumbnails).",
      },
    },
    {
      "@type": "Question",
      name: "Can AI fully automate a YouTube channel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for faceless channels. InVideo AI or Pictory AI can generate full videos from text prompts, with AI voiceover and footage. Many creators run profitable automated YouTube channels this way.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to use AI tools for YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete AI YouTube stack (editing, scripting, voiceover, thumbnails) costs $30-70/month. CapCut AI and ChatGPT have strong free tiers to start with zero cost.",
      },
    },
  ],
};

export default function BestAIToolsForYoutubePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            ▶️ YouTube
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Tools for YouTube Creators 2025</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The top YouTube creators use AI to script faster, edit smarter, and grow their channels. Here are the 8 tools that give the biggest edge.
          </p>
        </div>

        <div className="space-y-6">
          {youtubeTools.map((tool) => (
            <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                    <span className="text-xs bg-red-100 text-red-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                  <p className="text-sm text-red-600 font-medium mb-2">{tool.tagline}</p>
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
                  className="flex-shrink-0 bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors"
                >
                  Try Free →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">The Complete Creator Stack</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-4">
            Script with <strong className="text-white">ChatGPT</strong> → Edit with <strong className="text-white">CapCut AI</strong> → Voice with <strong className="text-white">ElevenLabs</strong> → Thumbnail with <strong className="text-white">Midjourney</strong> → Repurpose with <strong className="text-white">Pictory AI</strong>.
          </p>
          <p className="text-gray-400 text-sm">Total cost: under $50/month. Time saved: 5+ hours per video.</p>
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
