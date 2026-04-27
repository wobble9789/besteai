import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Tools Blog — Guides, Reviews and Tips for 2025",
  description:
    "Read our independent AI tools guides. From ChatGPT vs Claude to beginner guides — everything you need to choose the best AI tool.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">AI Tools Blog</h1>
      <p className="text-xl text-gray-600 mb-10">
        Independent guides, comparisons and tips for choosing the best AI tool.
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
              <span>{new Date(post.date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
              <span>•</span>
              <span className="capitalize bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">{post.category}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-600 font-semibold text-sm hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
