import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Teachers 2025 — Top 8 Ranked | BestAI.net",
  description:
    "The best AI tools for teachers in 2025. Save hours on lesson planning, grading, and admin with these educator-approved AI tools.",
};

const teacherTools = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Best all-round AI for educators",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🏆 Best Overall",
    why: "Generate lesson plans, quiz questions, rubrics, and parent emails in minutes. GPT-4o handles any grade level, subject, or teaching style.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "grammarly",
    name: "Grammarly",
    tagline: "Best for student feedback",
    price: "Free / $12/mo",
    rating: 4.7,
    badge: "✍️ Best Feedback",
    why: "Give faster, more consistent feedback on student writing. Works in every browser and document tool. The free version is genuinely useful.",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "canva",
    name: "Canva AI",
    tagline: "Best for classroom materials",
    price: "Free / $15/mo",
    rating: 4.6,
    badge: "🎨 Best Design",
    why: "Create engaging worksheets, presentations, and posters with AI design tools. Magic Design generates professional slides from a single prompt.",
    affiliateUrl: "https://canva.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "notion",
    name: "Notion AI",
    tagline: "Best for lesson organization",
    price: "+$10/mo",
    rating: 4.5,
    badge: "📋 Best Organization",
    why: "Keep all your lesson plans, resources, and notes organized with AI that summarizes, generates, and helps you plan curriculum.",
    affiliateUrl: "https://notion.so/?ref=besteai",
  },
  {
    rank: 5,
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "Best for transcription",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🎙️ Best Transcription",
    why: "Transcribe lectures, meetings, and IEP discussions in real-time. Auto-generates summaries and action items from every session.",
    affiliateUrl: "https://otter.ai/?ref=besteai",
  },
  {
    rank: 6,
    slug: "quillbot",
    name: "QuillBot",
    tagline: "Best for writing improvement",
    price: "Free / $10/mo",
    rating: 4.4,
    badge: "🔄 Best Paraphraser",
    why: "Help students improve their writing by demonstrating paraphrasing, summarizing source material, and checking grammar across all assignments.",
    affiliateUrl: "https://quillbot.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "Best for research prep",
    price: "Free / $20/mo",
    rating: 4.7,
    badge: "🔍 Best Research",
    why: "Research lesson topics quickly with cited, real-time answers. Great for staying current and finding credible sources for classroom materials.",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
  },
  {
    rank: 8,
    slug: "gamma-ai",
    name: "Gamma AI",
    tagline: "Best for engaging presentations",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "📊 Best Slides",
    why: "Generate beautiful, interactive presentations from a text prompt. Turn any lesson topic into an engaging deck in under 2 minutes.",
    affiliateUrl: "https://gamma.app/?ref=besteai",
  },
];

export default function BestAIToolsForTeachersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          🍎 Teacher Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Tools for Teachers 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Save hours on planning, grading, and admin. These are the AI tools that thousands of educators are already using to work smarter in 2025.
        </p>
      </div>

      <div className="space-y-6">
        {teacherTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-blue-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Teacher AI Tools Comparison</h2>
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
            {teacherTools.map((tool) => (
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

      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Free to Start</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Start with <strong>ChatGPT Free</strong> + <strong>Canva Free</strong> + <strong>Grammarly Free</strong> — this trio alone can save a teacher 3-5 hours per week at zero cost.
        </p>
      </div>
    </main>
  );
}
