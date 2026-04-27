import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getToolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `Best AI Tools for ${cat.name} 2025`,
    description: `Compare the best AI tools for ${cat.name.toLowerCase()} in 2025. ${cat.description}.`,
    keywords: [cat.name, "AI tools", "compare", "2025", "best"],
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) notFound();

  const catTools = getToolsByCategory(params.slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Category</span>
        <span>/</span>
        <span className="text-gray-900">{cat.name}</span>
      </nav>

      <div className="mb-10">
        <div className="text-4xl mb-3">{cat.icon}</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Best AI Tools for {cat.name}
        </h1>
        <p className="text-xl text-gray-600">{cat.description}</p>
      </div>

      {catTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {catTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No tools found for this category.</p>
      )}

      <div className="mt-12 p-6 bg-indigo-50 rounded-2xl">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Other categories</h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {categories
            .filter((c) => c.slug !== params.slug)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/categorie/${c.slug}`}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm hover:border-indigo-400 transition-colors"
              >
                <span>{c.icon}</span>
                <span>{c.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
