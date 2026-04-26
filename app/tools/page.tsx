import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "Alle AI Tools vergelijken 2025",
  description:
    "Vergelijk alle AI tools van 2025 op prijs, functies en gebruiksgemak. Van ChatGPT tot ElevenLabs — vind de beste AI tool voor jou.",
};

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Alle AI Tools</h1>
        <p className="text-xl text-gray-600">
          Vergelijk {tools.length} AI tools op prijs, functies en gebruiksgemak.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
