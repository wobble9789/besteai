"use client";

import { useState } from "react";
import { tools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export default function ToolsPage() {
  const [freeOnly, setFreeOnly] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [search, setSearch] = useState("");

  let displayed = freeOnly
    ? tools.filter((t) => t.price.toLowerCase().includes("free"))
    : [...tools];

  if (search.trim()) {
    const q = search.toLowerCase();
    displayed = displayed.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
    );
  }

  if (topRated) {
    displayed = [...displayed].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">All AI Tools</h1>
        <p className="text-xl text-gray-600 mb-6">
          Compare {tools.length} AI tools on price, features and ease of use.
        </p>

        {/* Search bar */}
        <div className="relative mb-4">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search tools by name or description…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setFreeOnly((v) => !v)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              freeOnly
                ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                : "bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-600"
            }`}
          >
            <span>{freeOnly ? "✅" : "🆓"}</span>
            {freeOnly ? `Showing ${displayed.length} free tools` : "Show Free Tools Only"}
          </button>
          <button
            onClick={() => setTopRated((v) => !v)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              topRated
                ? "bg-amber-500 text-white border-amber-500 hover:bg-amber-600"
                : "bg-white text-gray-700 border-gray-300 hover:border-amber-400 hover:text-amber-600"
            }`}
          >
            <span>⭐</span>
            {topRated ? "Sorted: Top Rated" : "Sort by Top Rated"}
          </button>
          {(freeOnly || topRated || search) && (
            <button
              onClick={() => { setFreeOnly(false); setTopRated(false); setSearch(""); }}
              className="text-sm text-gray-400 hover:text-gray-600 underline"
            >
              Reset filters
            </button>
          )}
          {search && (
            <span className="text-sm text-gray-500">
              {displayed.length} result{displayed.length !== 1 ? "s" : ""} for &quot;{search}&quot;
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayed.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
      {displayed.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-3">🔍</div>
          <div className="text-lg font-medium">No tools found for &quot;{search}&quot;</div>
          <div className="text-sm mt-1">Try a different search term</div>
        </div>
      )}
    </div>
  );
}
