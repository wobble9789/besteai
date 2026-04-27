import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug } from "@/lib/tools";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2025 — Price, Features & Alternatives`,
    description: `Read our independent review of ${tool.name}. See pricing, pros and cons and compare with alternatives.`,
    keywords: [tool.name, "review", "price", "AI tool", "compare", "2025"],
    openGraph: {
      title: `${tool.name} Review 2025`,
      description: tool.description,
    },
  };
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  const alternatives = tools.filter((t) => t.slug !== tool.slug && t.categories.some((c) => tool.categories.includes(c))).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: tool.affiliateUrl,
    description: tool.description,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      ratingCount: 247,
    },
    offers: {
      "@type": "Offer",
      price: tool.price,
      priceCurrency: "USD",
      url: tool.affiliateUrl,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-indigo-600">Tools</Link>
          <span>/</span>
          <span className="text-gray-900">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-gray-900">{tool.name}</h1>
                {tool.badge && (
                  <span className="text-sm font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                    {tool.badge}
                  </span>
                )}
              </div>
              <p className="text-lg text-gray-600">{tool.tagline}</p>
              <p className="text-sm text-gray-400 mt-1">{tool.website}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900 mb-1">{tool.price}</div>
              <div className="flex items-center gap-1 justify-end mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className={`w-5 h-5 ${star <= Math.round(tool.rating) ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600 ml-1 font-semibold">{tool.rating}/5</span>
              </div>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
              >
                Try {tool.name} →
              </a>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{tool.description}</p>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-green-800 mb-4">✅ Pros</h2>
            <ul className="space-y-2">
              {tool.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-green-700">
                  <span className="mt-1 text-green-500">✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-red-800 mb-4">❌ Cons</h2>
            <ul className="space-y-2">
              {tool.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-red-700">
                  <span className="mt-1 text-red-400">✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">💰 Pricing</h2>
          <p className="text-gray-600">{tool.priceDetails}</p>
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            See current pricing on {tool.website} →
          </a>
        </div>

        {/* Alternatives */}
        {alternatives.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Alternatives to {tool.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {alternatives.map((alt) => (
                <Link
                  key={alt.slug}
                  href={`/tools/${alt.slug}`}
                  className="bg-white border border-gray-100 rounded-xl p-4 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <div className="font-semibold text-gray-900">{alt.name}</div>
                  <div className="text-sm text-gray-500">{alt.price}</div>
                  <div className="text-sm text-yellow-500 mt-1">{"★".repeat(Math.round(alt.rating))}</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-sm text-gray-400 border-t pt-4">
          * Affiliate disclaimer: If you purchase a paid subscription via our links, we may receive a small commission — at no extra cost to you.
        </div>
      </div>
    </>
  );
}
