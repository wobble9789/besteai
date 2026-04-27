import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Productivity Tools 2025 — Top Tools to 10x Your Output | BestAI.net",
  description:
    "The best AI productivity tools in 2025. From Notion AI and ClickUp to Lindy and Bardeen, find the right AI tools to automate your work and boost output.",
};

const productivityTools = [
  {
    rank: 1,
    name: "Notion AI",
    slug: "notion-ai",
    tagline: "Best AI workspace for writing and knowledge management",
    price: "Free / $10/mo",
    rating: 4.6,
    badge: "🏆 Best Overall",
    why: "The most flexible AI workspace available. Write, summarize, plan, and manage knowledge — all in one tool. Perfect for individuals and teams that live in documents.",
    affiliateUrl: "https://affiliate.notion.so/besteai",
  },
  {
    rank: 2,
    name: "ClickUp AI",
    slug: "clickup-ai",
    tagline: "Best AI for project management productivity",
    price: "Free / $7/mo",
    rating: 4.4,
    badge: "📋 Best for Teams",
    why: "AI-powered project management that automates task creation, status updates, and reporting. The most feature-rich productivity platform for growing teams.",
    affiliateUrl: "https://clickup.com/?ref=besteai",
  },
  {
    rank: 3,
    name: "Lindy AI",
    slug: "lindy-ai",
    tagline: "Best AI executive assistant",
    price: "Free / $49/mo",
    rating: 4.4,
    badge: "🤖 Best AI Assistant",
    why: "Build AI agents that manage your email, calendar, and workflows autonomously. Like having a tireless digital EA that handles your busywork 24/7.",
    affiliateUrl: "https://lindy.ai/?ref=besteai",
  },
  {
    rank: 4,
    name: "Monday.com AI",
    slug: "monday-ai",
    tagline: "Best AI for visual work management",
    price: "$9/mo",
    rating: 4.3,
    badge: "📊 Best Visual PM",
    why: "Beautiful visual boards with AI-powered automation, timeline prediction, and workflow suggestions. Particularly strong for marketing and operations teams.",
    affiliateUrl: "https://monday.com/?ref=besteai",
  },
  {
    rank: 5,
    name: "Bardeen AI",
    slug: "bardeen-ai",
    tagline: "Best AI for browser productivity",
    price: "Free / $10/mo",
    rating: 4.3,
    badge: "⚡ Best for Sales Teams",
    why: "Automate repetitive browser tasks with natural language. Ideal for sales reps, recruiters, and researchers who spend hours doing manual data work.",
    affiliateUrl: "https://bardeen.ai/?ref=besteai",
  },
  {
    rank: 6,
    name: "Cody AI",
    slug: "cody-ai",
    tagline: "Best AI for company knowledge base",
    price: "$29/mo",
    rating: 4.3,
    badge: "🧠 Best Knowledge AI",
    why: "Train an AI on your company's documents and policies. Get instant accurate answers from your internal knowledge base — perfect for onboarding and support teams.",
    affiliateUrl: "https://meetcody.ai/?ref=besteai",
  },
];

export default function AIProductivityToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <Link href="/best" className="hover:text-indigo-600">Best</Link>
        <span>/</span>
        <span className="text-gray-900">AI Productivity Tools</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Best AI Productivity Tools 2025
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        The top AI productivity tools to write faster, manage projects better, automate busywork, and get more done without burning out.
      </p>

      <div className="space-y-6">
        {productivityTools.map((tool) => (
          <div key={tool.rank} className="border border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-indigo-600">#{tool.rank}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                  <p className="text-gray-500 text-sm">{tool.tagline}</p>
                </div>
              </div>
              <span className="text-sm font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">{tool.badge}</span>
            </div>

            <p className="text-gray-700 mt-3 mb-4">{tool.why}</p>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-medium text-gray-600">💰 {tool.price}</span>
              <span className="text-sm font-medium text-gray-600">⭐ {tool.rating}/5</span>
              <Link href={`/tools/${tool.slug}`} className="text-sm text-indigo-600 hover:underline">
                View details →
              </Link>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-xl">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Compare Productivity Tools</h2>
        <p className="text-gray-600 mb-4">
          Not sure which tool fits your workflow? Read our detailed comparisons.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href="/compare/notion-vs-clickup" className="text-indigo-600 hover:underline text-sm">Notion vs ClickUp</Link>
          <span className="text-gray-400">•</span>
          <Link href="/blog/notion-ai-vs-clickup-ai-2025" className="text-indigo-600 hover:underline text-sm">Notion AI vs ClickUp AI</Link>
          <span className="text-gray-400">•</span>
          <Link href="/blog/ai-productivity-replace-tech-stack-2025" className="text-indigo-600 hover:underline text-sm">Replace Your Whole Tech Stack</Link>
        </div>
      </div>
    </div>
  );
}
