import Link from "next/link";
import { categories } from "@/lib/tools";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          BestAI<span className="text-gray-400">.net</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="/tools" className="hover:text-indigo-600 transition-colors">
            All Tools
          </Link>
          {categories.slice(0, 4).map((cat) => (
            <Link key={cat.slug} href={`/categorie/${cat.slug}`} className="hover:text-indigo-600 transition-colors">
              {cat.name.split(" ")[0]}
            </Link>
          ))}
          <Link href="/best" className="hover:text-indigo-600 transition-colors">
            Best Tools
          </Link>
          <Link href="/compare" className="hover:text-indigo-600 transition-colors">
            Compare
          </Link>
          <Link href="/blog" className="hover:text-indigo-600 transition-colors">
            Blog
          </Link>
        </nav>
        <a
          href="/tools"
          className="hidden md:inline-block bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Compare tools
        </a>
      </div>
    </header>
  );
}
