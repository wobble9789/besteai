import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Tools Blog — Gidsen, reviews en tips voor 2025",
  description:
    "Lees onze onafhankelijke AI tools gidsen. Van ChatGPT vs Claude tot beginnersgidsen — alles wat je nodig hebt om de beste AI tool te kiezen.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">AI Tools Blog</h1>
      <p className="text-xl text-gray-600 mb-10">
        Onafhankelijke gidsen, vergelijkingen en tips voor het kiezen van de beste AI tool.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
              <span>{new Date(post.datum).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>•</span>
              <span>{post.leestijd} leestijd</span>
              <span>•</span>
              <span className="capitalize bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{post.categorie}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                {post.titel}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.samenvatting}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 font-semibold text-sm hover:underline"
            >
              Lees meer →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
