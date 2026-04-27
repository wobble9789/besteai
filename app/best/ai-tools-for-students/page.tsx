import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Students 2025 — Top 7 Ranked | BestAI.net",
  description:
    "The best AI tools for students in 2025. Study smarter, write better essays, and ace your research with these student-approved AI tools.",
};

const studentTools = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best all-round study AI",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🏆 Best Overall",
    why: "Explains any concept, helps with essays, solves math problems, and tutors you step-by-step. GPT-4o is like having a tutor available 24/7.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "perplexity",
    name: "Perplexity",
    tagline: "Best for research",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🔍 Best Research",
    why: "Get cited, real-time answers to research questions. Every claim is backed by sources you can verify — essential for academic integrity.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 3,
    slug: "grammarly",
    name: "Grammarly",
    tagline: "Best for essay writing",
    price: "Free / $12/mo",
    rating: 4.7,
    badge: "✍️ Best Writing",
    why: "Catches grammar errors, improves clarity, and checks tone. The free version alone will improve every essay and email you write.",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "notion",
    name: "Notion AI",
    tagline: "Best for notes & organization",
    price: "$10/mo add-on",
    rating: 4.5,
    badge: "📓 Best Notes",
    why: "Organize all your class notes, summaries, and projects in one place with AI that summarizes lectures and generates study guides automatically.",
    affiliateUrl: "https://notion.so/?ref=besteai",
  },
  {
    rank: 5,
    slug: "wolfram-alpha",
    name: "Wolfram Alpha",
    tagline: "Best for math & science",
    price: "Free / $7.25/mo",
    rating: 4.6,
    badge: "🔢 Best STEM",
    why: "The ultimate computational engine for STEM students. Solves equations, plots graphs, and explains every step of the solution.",
    affiliateUrl: "https://wolframalpha.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "Best for lecture transcription",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🎙️ Best Transcription",
    why: "Records and transcribes lectures in real-time. Never miss a word — searchable transcripts, AI summaries, and action items from every class.",
    affiliateUrl: "https://otter.ai/?ref=besteai",
  },
  {
    rank: 7,
    slug: "canva",
    name: "Canva AI",
    tagline: "Best for presentations",
    price: "Free / $15/mo",
    rating: 4.5,
    badge: "🎨 Best Design",
    why: "Create stunning presentations and infographics with AI design tools. Magic Design generates complete slide decks from a single prompt.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
];

export default function BestAIToolsForStudentsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🎓 Student Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Tools for Students 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Study smarter, write better, and learn faster. These are the AI tools every student should know about in 2025 — most have generous free plans.
        </p>
      </div>

      <div className="space-y-6">
        {studentTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-yellow-100 text-yellow-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-yellow-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-yellow-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Student AI Tools Comparison</h2>
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
            {studentTools.map((tool) => (
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

      <div className="mt-12 bg-yellow-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Student Budget Tip</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with <strong>ChatGPT Free</strong> + <strong>Grammarly Free</strong> + <strong>Perplexity Free</strong> — that combination covers 90% of student AI needs at zero cost. Upgrade to paid plans only when you hit the limits.
        </p>
      </div>
    </main>
  );
}
