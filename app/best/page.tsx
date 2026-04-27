import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools — All Categories 2025 | BestAI.net",
  description:
    "Browse all our Best AI Tools hub pages. Find the top-ranked AI tools for writing, video, coding, marketing, students, business, and more.",
};

const bestPages = [
  {
    slug: "ai-writing-tools",
    title: "Best AI Writing Tools 2025",
    description: "ChatGPT, Claude, Jasper, Grammarly — the top AI writers ranked.",
    emoji: "✍️",
    badge: "Most Popular",
    badgeColor: "bg-indigo-100 text-indigo-700",
    color: "border-indigo-200 hover:border-indigo-400",
  },
  {
    slug: "ai-image-generators",
    title: "Best AI Image Generators 2025",
    description: "Midjourney, DALL-E 3, Stable Diffusion — top image AI ranked.",
    emoji: "🎨",
    badge: "Top Rated",
    badgeColor: "bg-pink-100 text-pink-700",
    color: "border-pink-200 hover:border-pink-400",
  },
  {
    slug: "free-ai-tools",
    title: "Best Free AI Tools 2025",
    description: "Powerful AI tools you can use today at zero cost.",
    emoji: "💸",
    badge: "Free",
    badgeColor: "bg-green-100 text-green-700",
    color: "border-green-200 hover:border-green-400",
  },
  {
    slug: "ai-video-tools",
    title: "Best AI Video Tools 2025",
    description: "Runway, HeyGen, Sora, Pika — AI video generators ranked.",
    emoji: "🎬",
    badge: "New",
    badgeColor: "bg-purple-100 text-purple-700",
    color: "border-purple-200 hover:border-purple-400",
  },
  {
    slug: "ai-coding-tools",
    title: "Best AI Coding Tools 2025",
    description: "Cursor, GitHub Copilot, Claude — the best AI for developers.",
    emoji: "💻",
    badge: "New",
    badgeColor: "bg-green-100 text-green-700",
    color: "border-green-200 hover:border-green-400",
  },
  {
    slug: "ai-chatbots",
    title: "Best AI Chatbots 2025",
    description: "ChatGPT, Claude, Gemini, Perplexity — top chatbots compared.",
    emoji: "💬",
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-700",
    color: "border-blue-200 hover:border-blue-400",
  },
  {
    slug: "ai-tools-for-students",
    title: "Best AI Tools for Students 2025",
    description: "Study smarter with AI. Most tools free or cheap.",
    emoji: "🎓",
    badge: "Students",
    badgeColor: "bg-yellow-100 text-yellow-700",
    color: "border-yellow-200 hover:border-yellow-400",
  },
  {
    slug: "ai-tools-for-marketing",
    title: "Best AI Marketing Tools 2025",
    description: "Jasper, Semrush, Canva — AI tools that drive real ROI.",
    emoji: "📢",
    badge: "Marketing",
    badgeColor: "bg-pink-100 text-pink-700",
    color: "border-pink-200 hover:border-pink-400",
  },
  {
    slug: "ai-audio-tools",
    title: "Best AI Audio Tools 2025",
    description: "ElevenLabs, Suno, Murf — voice and music AI ranked.",
    emoji: "🎵",
    badge: "Audio",
    badgeColor: "bg-orange-100 text-orange-700",
    color: "border-orange-200 hover:border-orange-400",
  },
  {
    slug: "ai-tools-for-business",
    title: "Best AI Tools for Business 2025",
    description: "Automate, create, and scale with the best business AI.",
    emoji: "💼",
    badge: "Business",
    badgeColor: "bg-slate-100 text-slate-700",
    color: "border-slate-200 hover:border-slate-400",
  },
  {
    slug: "cheap-ai-tools",
    title: "Best Cheap AI Tools 2025",
    description: "Free and budget AI tools that punch above their weight.",
    emoji: "🤑",
    badge: "Budget",
    badgeColor: "bg-emerald-100 text-emerald-700",
    color: "border-emerald-200 hover:border-emerald-400",
  },
  {
    slug: "ai-website-builders",
    title: "Best AI Website Builders 2025",
    description: "Framer AI, Durable, Wix ADI — build a site in minutes with AI.",
    emoji: "🌐",
    badge: "New",
    badgeColor: "bg-blue-100 text-blue-700",
    color: "border-blue-200 hover:border-blue-400",
  },
  {
    slug: "ai-logo-generators",
    title: "Best AI Logo Generators 2025",
    description: "Looka, Brandmark, Namelix — create a professional logo in minutes.",
    emoji: "🎨",
    badge: "New",
    badgeColor: "bg-pink-100 text-pink-700",
    color: "border-pink-200 hover:border-pink-400",
  },
];

export default function BestAIToolsIndexPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🏆 Best AI Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Tools — All Categories 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Expert-ranked lists for every use case. Updated quarterly with hands-on testing. Find the right AI tool for your specific needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bestPages.map((page) => (
          <Link
            key={page.slug}
            href={`/best/${page.slug}`}
            className={`bg-white border-2 rounded-2xl p-6 transition-all hover:shadow-md ${page.color}`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{page.emoji}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${page.badgeColor}`}>
                {page.badge}
              </span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{page.title}</h2>
            <p className="text-sm text-gray-500">{page.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Rank AI Tools</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every ranking on BestAI.net is based on hands-on testing with real use cases. We evaluate quality, price, features, and long-term value. Rankings are updated quarterly. We earn a small commission through affiliate links — at no extra cost to you.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link href="/tools" className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors">
            Browse All 87 Tools →
          </Link>
          <Link href="/compare" className="bg-white border border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:border-indigo-300 transition-colors">
            Compare Tools Side-by-Side →
          </Link>
        </div>
      </div>
    </main>
  );
}
