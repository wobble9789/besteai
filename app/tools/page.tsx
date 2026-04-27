import type { Metadata } from "next";
import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "Compare All AI Tools 2025",
  description:
    "Compare all AI tools of 2025 on price, features and ease of use. From ChatGPT to ElevenLabs — find the best AI tool for you.",
};

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">All AI Tools</h1>
        <p className="text-xl text-gray-600">
          Compare {tools.length} AI tools on price, features and ease of use.
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
