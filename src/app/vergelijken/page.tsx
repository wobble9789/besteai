import { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "AI Tools Vergelijken",
  description:
    "Vergelijk de beste AI tools naast elkaar. Onafhankelijke vergelijkingen van ChatGPT, Claude, Jasper, GitHub Copilot en meer.",
};

export default function VergelijkenPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AI Tools Vergelijken</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kies de juiste AI-tool door populaire opties naast elkaar te zetten.
          Eerlijke vergelijkingen op prijs, functies en gebruiksvriendelijkheid.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {comparisons.map((comparison) => (
          <Link
            key={comparison.slug}
            href={`/vergelijken/${comparison.slug}`}
            className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">
                {comparison.category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              {comparison.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{comparison.description}</p>
            <div className="flex items-center text-indigo-600 text-sm font-semibold">
              Bekijk vergelijking →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
