import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Coding Tools 2025 — Top 6 Ranked & Reviewed | BestAI.net",
  description:
    "The best AI coding tools of 2025 ranked. GitHub Copilot, Cursor, Claude, and more — find the AI coding assistant that makes you 10x faster.",
};

const codingTools = [
  {
    rank: 1,
    slug: "cursor",
    name: "Cursor",
    tagline: "Best AI code editor",
    price: "Free / $20/mo",
    rating: 4.9,
    badge: "🏆 Editor's Choice",
    why: "The most powerful AI-native code editor. Understands your entire codebase, writes multi-file changes, and has an agent mode that ships features autonomously.",
    affiliateUrl: "https://cursor.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "Best IDE integration",
    price: "Free / $10/mo",
    rating: 4.7,
    badge: "⚙️ Best Integration",
    why: "Works natively in VS Code, JetBrains, and Neovim. Inline autocomplete, chat, and pull request summaries — the most mature AI coding tool on the market.",
    affiliateUrl: "https://github.com/features/copilot?ref=besteai",
  },
  {
    rank: 3,
    slug: "claude",
    name: "Claude API",
    tagline: "Best for complex coding tasks",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🧠 Best for Complex Code",
    why: "Claude 3.5 Sonnet consistently tops coding benchmarks. Its 200K context window handles entire codebases. Preferred by senior engineers for architecture discussions.",
    affiliateUrl: "https://claude.ai/?ref=besteai",
  },
  {
    rank: 4,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best for learning to code",
    price: "Free / $20/mo",
    rating: 4.6,
    badge: "📚 Best for Learning",
    why: "Explains code like a patient tutor. GPT-4o can debug, explain, and teach coding concepts at any level. Best starting point for beginners.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "together-ai",
    name: "Together AI",
    tagline: "Best for open-source models",
    price: "Pay per token",
    rating: 4.4,
    badge: "🔓 Best Open-Source",
    why: "Run Llama 3, Mixtral, and other open models via API at low cost. Great for teams that want privacy and model flexibility without infrastructure headaches.",
    affiliateUrl: "https://together.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "cohere",
    name: "Cohere",
    tagline: "Best for enterprise coding AI",
    price: "Free trial / Custom",
    rating: 4.3,
    badge: "🏢 Best Enterprise",
    why: "Command R+ is purpose-built for enterprise use cases. On-premise deployment, RAG support, and grounded code generation with citations.",
    affiliateUrl: "https://cohere.com/?ref=besteai",
  },
];

export default function BestAICodingToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💻 Coding Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Coding Tools 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI has permanently changed how developers write code. These are the tools that actually make you faster — tested by engineers, ranked by real-world usefulness.
        </p>
      </div>

      <div className="space-y-6">
        {codingTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-green-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors">
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
            {codingTools.map((tool) => (
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

      <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Which AI Coding Tool Should You Use?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          <strong>Cursor</strong> is the best all-in-one AI editor for serious developers. <strong>GitHub Copilot</strong> is the safest choice if you want to stay in your current IDE. For one-off complex problems, <strong>Claude</strong> consistently delivers the best reasoning.
        </p>
      </div>
    </main>
  );
}
