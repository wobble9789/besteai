import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.titel,
    description: post.samenvatting,
    openGraph: {
      title: post.titel,
      description: post.samenvatting,
      type: "article",
      publishedTime: post.datum,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titel,
    description: post.samenvatting,
    datePublished: post.datum,
    author: { "@type": "Organization", name: post.auteur },
    publisher: { "@type": "Organization", name: "BesteAI.nl", url: "https://besteai.nl" },
  };

  // Convert markdown-ish content to HTML-ish display
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace("### ", "")}</h3>;
      if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace("## ", "")}</h2>;
      if (line.startsWith("#### ")) return <h4 key={i} className="text-lg font-semibold text-gray-900 mt-4 mb-2">{line.replace("#### ", "")}</h4>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-gray-800 mb-2">{line.replace(/\*\*/g, "")}</p>;
      if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc text-gray-700 mb-1">{line.replace("- ", "")}</li>;
      if (line.match(/^\d+\./)) return <li key={i} className="ml-4 list-decimal text-gray-700 mb-1">{line.replace(/^\d+\. /, "")}</li>;
      if (line.trim() === "") return <br key={i} />;
      return <p key={i} className="text-gray-700 mb-3 leading-relaxed">{line}</p>;
    });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{post.titel}</span>
        </nav>

        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
          <span>{new Date(post.datum).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}</span>
          <span>•</span>
          <span>{post.leestijd} leestijd</span>
          <span>•</span>
          <span>{post.auteur}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">{post.titel}</h1>
        <p className="text-xl text-gray-600 mb-8 pb-8 border-b">{post.samenvatting}</p>

        <article className="prose-sm md:prose max-w-none">
          {renderContent(post.content)}
        </article>

        <div className="mt-12 p-6 bg-indigo-50 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-2">Vergelijk zelf de beste AI tools</h3>
          <p className="text-gray-600 text-sm mb-4">Bekijk onze overzichtspagina en vind de tool die bij jou past.</p>
          <Link href="/tools" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
            Bekijk alle tools →
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/blog" className="text-indigo-600 hover:underline text-sm">← Terug naar blog</Link>
        </div>
      </div>
    </>
  );
}
