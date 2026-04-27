import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Tool Comparisons 2025 — Side-by-Side Reviews | BestAI.net",
  description:
    "Compare the top AI tools side by side. ChatGPT vs Claude, Midjourney vs DALL-E, GitHub Copilot vs Cursor and more.",
};

const comparisons = [
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    desc: "The two most popular AI assistants — which one wins for writing, coding, and research?",
    searches: "200k+/mo",
    emoji: "🤖",
  },
  {
    slug: "midjourney-vs-dall-e",
    title: "Midjourney vs DALL-E",
    desc: "Battle of the AI image generators. Which produces better art for your projects?",
    searches: "90k+/mo",
    emoji: "🎨",
  },
  {
    slug: "grammarly-vs-writesonic",
    title: "Grammarly vs Writesonic",
    desc: "Writing assistant vs AI content generator — find out which fits your workflow.",
    searches: "30k+/mo",
    emoji: "✍️",
  },
  {
    slug: "github-copilot-vs-cursor",
    title: "GitHub Copilot vs Cursor",
    desc: "The two leading AI coding tools compared. Which IDE assistant makes you more productive?",
    searches: "50k+/mo",
    emoji: "💻",
  },
  {
    slug: "elevenlabs-vs-murf",
    title: "ElevenLabs vs Murf",
    desc: "Top AI voice generators face off. Which delivers the most realistic audio?",
    searches: "20k+/mo",
    emoji: "🎙️",
  },
];

export default function ComparePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          ⚔️ Head-to-Head
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">AI Tool Comparisons</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Unbiased side-by-side comparisons to help you pick the right AI tool.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {comparisons.map((c) => (
          <Link
            key={c.slug}
            href={`/compare/${c.slug}`}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group"
          >
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
              {c.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{c.desc}</p>
            <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
              🔥 {c.searches} searches
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
