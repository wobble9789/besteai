import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Automation Tools 2025 — Top Workflow Automation Software | BestAI.net",
  description:
    "The best AI automation tools in 2025. From Zapier and Make.com to Lindy AI and Bardeen, find the right automation platform for your business.",
};

const automationTools = [
  {
    rank: 1,
    name: "Zapier AI",
    slug: "zapier-ai",
    tagline: "Best automation tool for beginners",
    price: "Free / $20/mo",
    rating: 4.5,
    badge: "🏆 Best for Beginners",
    why: "The easiest way to connect 6,000+ apps and build automated workflows. AI-powered Zap builder lets you describe automations in plain English.",
    affiliateUrl: "https://zapier.com/?ref=besteai",
  },
  {
    rank: 2,
    name: "Make.com",
    slug: "make-com",
    tagline: "Best for complex visual workflows",
    price: "Free / $9/mo",
    rating: 4.5,
    badge: "⚡ Best Value",
    why: "Visual drag-and-drop scenario builder with powerful data transformation. 10x cheaper than Zapier at scale. Perfect for power users and agencies.",
    affiliateUrl: "https://make.com/?ref=besteai",
  },
  {
    rank: 3,
    name: "Lindy AI",
    slug: "lindy-ai",
    tagline: "Best AI agent platform",
    price: "Free / $49/mo",
    rating: 4.4,
    badge: "🤖 Best AI Agents",
    why: "Build autonomous AI agents that handle email, calendar, CRM, and support workflows. Like having a digital executive assistant that works 24/7.",
    affiliateUrl: "https://lindy.ai/?ref=besteai",
  },
  {
    rank: 4,
    name: "Bardeen AI",
    slug: "bardeen-ai",
    tagline: "Best browser automation tool",
    price: "Free / $10/mo",
    rating: 4.3,
    badge: "🌐 Best Browser Automation",
    why: "Automate repetitive browser tasks with natural language commands. Perfect for sales prospecting, data extraction, and web workflows.",
    affiliateUrl: "https://bardeen.ai/?ref=besteai",
  },
  {
    rank: 5,
    name: "ClickUp AI",
    slug: "clickup-ai",
    tagline: "Best for project automation",
    price: "Free / $7/mo",
    rating: 4.4,
    badge: "📋 Best Project Automation",
    why: "AI-powered project management with automated task creation, status updates, and workflow triggers. Replaces multiple tools in one platform.",
    affiliateUrl: "https://clickup.com/?ref=besteai",
  },
  {
    rank: 6,
    name: "n8n",
    slug: "n8n",
    tagline: "Best for developers (self-hosted)",
    price: "Free (self-host) / $20/mo",
    rating: 4.5,
    badge: "🔧 Best for Developers",
    why: "Open-source workflow automation you can self-host for free. Full JavaScript execution, 400+ integrations, and complete data privacy.",
    affiliateUrl: "https://n8n.io/?ref=besteai",
  },
];

export default function AIAutomationToolsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <Link href="/best" className="hover:text-indigo-600">Best</Link>
        <span>/</span>
        <span className="text-gray-900">AI Automation Tools</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Best AI Automation Tools 2025
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        The top AI-powered automation platforms to eliminate repetitive work, connect your apps, and scale your business without hiring more people.
      </p>

      <div className="space-y-6">
        {automationTools.map((tool) => (
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
        <h2 className="text-xl font-bold text-gray-900 mb-3">How We Picked These Tools</h2>
        <p className="text-gray-600 mb-4">
          We evaluated automation tools on ease of use, power and flexibility, app library size, pricing value, and AI capabilities. Each tool was tested hands-on over multiple weeks.
        </p>
        <h3 className="font-semibold text-gray-800 mb-2">Compare Automation Tools</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/compare/zapier-vs-make" className="text-indigo-600 hover:underline text-sm">Zapier vs Make.com</Link>
          <span className="text-gray-400">•</span>
          <Link href="/compare/bardeen-vs-zapier" className="text-indigo-600 hover:underline text-sm">Bardeen vs Zapier</Link>
          <span className="text-gray-400">•</span>
          <Link href="/compare/zapier-vs-make-vs-n8n-2025" className="text-indigo-600 hover:underline text-sm">Zapier vs Make vs n8n</Link>
        </div>
      </div>
    </div>
  );
}
