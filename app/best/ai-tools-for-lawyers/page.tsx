import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Tools for Lawyers 2025 — Top 6 Legal AI Platforms | BestAI.net",
  description:
    "The best AI tools for lawyers and legal professionals in 2025. From legal research and contract review to drafting and due diligence — ranked and reviewed.",
};

const legalTools = [
  {
    rank: 1,
    slug: "harvey-ai",
    name: "Harvey AI",
    tagline: "Best enterprise AI for law firms",
    price: "Enterprise",
    rating: 4.4,
    badge: "🏆 Best for Large Firms",
    why: "Purpose-built for law with fine-tuned legal models. Handles contract review, legal research, and due diligence at scale. Trusted by AmLaw 100 firms and global legal departments.",
    affiliateUrl: "https://harvey.ai/?ref=besteai",
  },
  {
    rank: 2,
    slug: "casetext",
    name: "CaseText (CoCounsel)",
    tagline: "Best AI legal research + drafting",
    price: "$90/mo",
    rating: 4.3,
    badge: "⚖️ Best Legal Research",
    why: "CoCounsel by Thomson Reuters combines comprehensive case law databases with AI drafting. Reviews contracts, researches case law, drafts memos, and preps depositions.",
    affiliateUrl: "https://casetext.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "claude",
    name: "Claude",
    tagline: "Best for long-document legal drafting",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "📄 Best for Drafting",
    why: "Claude's 200K token context handles entire contracts and legal briefs. Excellent for drafting demand letters, contracts, and legal memos at a fraction of the cost of specialized tools.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 4,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best general AI for legal tasks",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🤖 Most Versatile",
    why: "For solo attorneys and small firms, ChatGPT handles drafting client letters, explaining legal concepts, summarizing documents, and researching general legal questions.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "Best for quick legal research with citations",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🔍 Best for Quick Research",
    why: "Real-time legal research with cited sources. Great for regulatory updates, jurisdictional overviews, and getting cited answers to general legal questions quickly.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "Best for client meeting transcription",
    price: "Free / $17/mo",
    rating: 4.3,
    badge: "🎙️ Best for Client Meetings",
    why: "Automatically transcribes and summarizes client consultations, depositions, and team meetings. Searchable records of every conversation with AI-generated action items.",
    affiliateUrl: "https://otter.ai/?ref=besteai",
  },
];

export default function BestAIToolsForLawyersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link href="/best" className="hover:text-indigo-600">Best AI Tools</Link>
          <span>/</span>
          <span>AI Tools for Lawyers</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best AI Tools for Lawyers 2025
        </h1>
        <p className="text-lg text-gray-600">
          The top AI tools for legal professionals in 2025. Law firms using AI tools report saving 4-10 hours per attorney per week on research, drafting, and document review.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full">
            ⚖️ {legalTools.length} tools reviewed
          </span>
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
            ✅ Updated April 2026
          </span>
          <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">
            🔒 Covers data security & ethics
          </span>
        </div>
      </div>

      {/* Important disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-900">
        <strong>⚠️ Legal AI Ethics Note:</strong> Always verify AI-generated case citations before use. Never input privileged client data into consumer AI tools. Check your bar association&apos;s AI guidance.
      </div>

      {/* Tools List */}
      <div className="space-y-5">
        {legalTools.map((tool) => (
          <div
            key={tool.slug}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">
                  {tool.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                    <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{tool.tagline}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{tool.why}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-sm font-medium text-gray-900">{tool.price}</span>
                    <span className="text-sm text-yellow-600">★ {tool.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <Link
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors text-center"
                >
                  Try Free →
                </Link>
                <Link
                  href={`/tools/${tool.slug}`}
                  className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-xl hover:border-indigo-300 hover:text-indigo-600 transition-colors text-center"
                >
                  Review
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Related Blog */}
      <div className="mt-12 bg-indigo-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Legal AI Guides</h2>
        <div className="space-y-3">
          <Link href="/blog/ai-tools-lawyers-2025" className="block group">
            <div className="font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors text-sm">
              Best AI Tools for Lawyers and Legal Professionals 2025 →
            </div>
          </Link>
          <Link href="/blog/ai-tools-healthcare-2025" className="block group">
            <div className="font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors text-sm">
              AI Tools for Healthcare Professionals in 2025 →
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
