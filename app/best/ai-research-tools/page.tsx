import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Research Tools 2025 — Top 8 for Students & Academics | BestAI.net",
  description:
    "The best AI tools for research in 2025. Find, summarize, and synthesize academic papers faster with these AI-powered research tools for students and academics.",
};

const researchTools = [
  {
    rank: 1,
    slug: "elicit",
    name: "Elicit",
    tagline: "Best for academic literature reviews",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "🏆 Best Overall",
    why: "Searches 200M+ papers, extracts structured data, and helps you synthesize findings. The #1 tool for serious academic research and systematic reviews.",
    affiliateUrl: "https://elicit.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "consensus-ai",
    name: "Consensus AI",
    tagline: "Best for evidence-based answers",
    price: "Free / $9/mo",
    rating: 4.4,
    badge: "🔬 Best for Quick Research",
    why: "Ask a research question and get evidence-based answers from peer-reviewed papers, complete with a consensus meter showing how much research agrees.",
    affiliateUrl: "https://consensus.app/?ref=besteai",
  },
  {
    rank: 3,
    slug: "semantic-scholar",
    name: "Semantic Scholar",
    tagline: "Best free academic paper search",
    price: "Free",
    rating: 4.3,
    badge: "🆓 Best Free Tool",
    why: "200M+ papers indexed with AI-generated TLDRs, citation networks, and semantic search. Completely free with no limits.",
    affiliateUrl: "https://semanticscholar.org/?ref=besteai",
  },
  {
    rank: 4,
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "Best for cited real-time research",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🌐 Best Web Research",
    why: "Real-time search with citations for every claim. Perfect for current events, emerging topics, and research that needs up-to-date sources.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 5,
    slug: "wolfram-alpha",
    name: "Wolfram Alpha",
    tagline: "Best for math and science research",
    price: "Free / $8/mo",
    rating: 4.5,
    badge: "🔢 Best STEM Tool",
    why: "The definitive computational engine for STEM researchers. Solves equations, computes statistics, and provides step-by-step solutions with absolute accuracy.",
    affiliateUrl: "https://wolframalpha.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best for synthesizing and writing research",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "✍️ Best for Writing",
    why: "Synthesize your research notes into coherent prose, generate literature review drafts, and explain complex concepts in plain language.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "claude",
    name: "Claude",
    tagline: "Best for analyzing long research documents",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "📄 Best Long Context",
    why: "Claude's 200,000-token context window lets you paste entire research papers and ask nuanced questions. Ideal for systematic reviews and meta-analyses.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 8,
    slug: "notebooklm",
    name: "NotebookLM",
    tagline: "Best for building a personal research knowledge base",
    price: "Free",
    rating: 4.4,
    badge: "📓 Best Knowledge Base",
    why: "Upload all your research papers and sources, then chat with them. NotebookLM cites specific passages and never hallucinates outside your uploaded documents.",
    affiliateUrl: "https://notebooklm.google.com/?ref=besteai",
  },
];

export default function BestAIResearchToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link href="/best" className="hover:text-indigo-600">Best AI Tools</Link>
          <span>/</span>
          <span>AI Research Tools</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Best AI Research Tools 2025
        </h1>
        <p className="text-lg text-gray-600">
          The top AI tools for academic research, literature reviews, and evidence-based work. Whether you&apos;re a student, graduate researcher, or professional scientist, these tools will transform how you find and synthesize information.
        </p>
        <div className="flex gap-3 mt-4 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full">
            🔍 {researchTools.length} tools reviewed
          </span>
          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
            ✅ Updated April 2026
          </span>
          <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-sm px-3 py-1 rounded-full">
            🎓 Tested by researchers
          </span>
        </div>
      </div>

      {/* Tools List */}
      <div className="space-y-5">
        {researchTools.map((tool) => (
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

      {/* Related Compare Pages */}
      <div className="mt-12 bg-gray-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Research Tool Comparisons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/compare/elicit-vs-consensus" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all">
            <div className="font-semibold text-gray-900 text-sm">Elicit vs Consensus AI</div>
            <div className="text-xs text-gray-500 mt-1">Which academic research AI is better?</div>
          </Link>
          <Link href="/compare/chatgpt-vs-wolfram-alpha" className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all">
            <div className="font-semibold text-gray-900 text-sm">ChatGPT vs Wolfram Alpha</div>
            <div className="text-xs text-gray-500 mt-1">Conversational AI vs computational engine</div>
          </Link>
        </div>
      </div>

      {/* Related Blog */}
      <div className="mt-8 bg-indigo-50 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Research Guides</h2>
        <div className="space-y-3">
          <Link href="/blog/ai-research-tools-students-2025" className="block group">
            <div className="font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors text-sm">
              Best AI Research Tools for Students and Academics 2025 →
            </div>
          </Link>
          <Link href="/blog/ai-academic-research-guide-2025" className="block group">
            <div className="font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors text-sm">
              How to Use AI for Academic Research: Step-by-Step Guide →
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
