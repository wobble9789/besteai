import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getComparisonBySlug,
  getToolsForComparison,
  getAllComparisonSlugs,
} from "@/lib/comparisons";
import { Tool } from "@/types";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) return {};
  return {
    title: comparison.title,
    description: comparison.description,
  };
}

function PriceTag({ tool }: { tool: Tool }) {
  if (tool.pricing.free && !tool.pricing.startingPrice) {
    return <span className="text-green-600 font-semibold">Gratis</span>;
  }
  if (tool.pricing.free) {
    return (
      <span className="text-gray-700">
        Gratis + vanaf &euro;{tool.pricing.startingPrice}/{tool.pricing.currency === "USD" ? "mo" : "mo"}
      </span>
    );
  }
  return (
    <span className="text-gray-700">
      Vanaf &euro;{tool.pricing.startingPrice}/mo
    </span>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="font-bold text-gray-800 ml-1">{rating}/5</span>
    </div>
  );
}

function ToolColumn({ tool, isWinner }: { tool: Tool; isWinner: boolean }) {
  return (
    <div className={`flex-1 rounded-2xl border-2 p-6 flex flex-col gap-5 ${isWinner ? "border-indigo-500 bg-indigo-50 shadow-lg" : "border-gray-200 bg-white"}`}>
      {isWinner && (
        <div className="bg-indigo-600 text-white text-xs font-bold text-center py-1.5 px-3 rounded-full w-fit mx-auto -mt-3">
          🏆 Aanbevolen
        </div>
      )}

      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-indigo-600 mb-3">
          {tool.name.charAt(0)}
        </div>
        <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{tool.tagline}</p>
      </div>

      <StarRating rating={tool.rating} />

      <div className="bg-white rounded-xl p-4 border border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Prijs</p>
        <PriceTag tool={tool} />
        {tool.pricing.freeTier && (
          <p className="text-xs text-gray-400 mt-1">{tool.pricing.freeTier}</p>
        )}
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Voordelen</p>
        <ul className="flex flex-col gap-2">
          {tool.pros.slice(0, 4).map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckIcon />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Nadelen</p>
        <ul className="flex flex-col gap-2">
          {tool.cons.slice(0, 3).map((con) => (
            <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
              <CrossIcon />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Functies</p>
        <ul className="flex flex-col gap-1.5">
          {tool.features.slice(0, 5).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Beste voor</p>
        <p className="text-sm text-gray-700">{tool.bestFor}</p>
      </div>

      <a
        href={tool.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={`w-full py-3 px-4 rounded-xl font-semibold text-center text-sm transition-all ${
          isWinner
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
      >
        Probeer {tool.name} →
      </a>
    </div>
  );
}

export default function ComparisonPage({ params }: Props) {
  const comparison = getComparisonBySlug(params.slug);
  if (!comparison) notFound();

  const comparisonTools = getToolsForComparison(comparison);
  if (comparisonTools.length < 2) notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <Link href="/vergelijken" className="hover:text-indigo-600">Vergelijken</Link>
        <span>/</span>
        <span className="text-gray-900">{comparison.title}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {comparison.category}
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{comparison.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{comparison.description}</p>
        <p className="text-xs text-gray-400 mt-3">Bijgewerkt: {comparison.updatedAt}</p>
      </div>

      {/* Comparison columns */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        {comparisonTools.map((tool) => (
          <ToolColumn
            key={tool.slug}
            tool={tool}
            isWinner={tool.slug === comparison.winner}
          />
        ))}
      </div>

      {/* Winner verdict */}
      {comparison.winner && comparison.winnerReason && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🏆</div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">Ons oordeel</h2>
              <p className="text-gray-700">{comparison.winnerReason}</p>
            </div>
          </div>
        </div>
      )}

      {/* Feature comparison table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Functievergelijking</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Functie</th>
                {comparisonTools.map((tool) => (
                  <th key={tool.slug} className="text-center py-3 px-4 text-sm font-semibold text-gray-900">
                    {tool.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">Gratis tier</td>
                {comparisonTools.map((tool) => (
                  <td key={tool.slug} className="py-3 px-4 text-center">
                    {tool.pricing.free
                      ? <span className="text-green-500 font-bold">✓</span>
                      : <span className="text-red-400 font-bold">✗</span>
                    }
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">Startprijs</td>
                {comparisonTools.map((tool) => (
                  <td key={tool.slug} className="py-3 px-4 text-center text-sm text-gray-700">
                    {tool.pricing.startingPrice
                      ? `$${tool.pricing.startingPrice}/mo`
                      : "Gratis"
                    }
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">Beoordeling</td>
                {comparisonTools.map((tool) => (
                  <td key={tool.slug} className="py-3 px-4 text-center text-sm font-semibold text-gray-900">
                    {tool.rating}/5
                  </td>
                ))}
              </tr>
              {/* Dynamic feature rows */}
              {comparisonTools[0].features.slice(0, 5).map((feature) => (
                <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-700">{feature}</td>
                  {comparisonTools.map((tool) => (
                    <td key={tool.slug} className="py-3 px-4 text-center">
                      {tool.features.includes(feature)
                        ? <span className="text-green-500 font-bold">✓</span>
                        : <span className="text-gray-300 font-bold">—</span>
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-3">Klaar om te beginnen?</h2>
        <p className="text-indigo-100 mb-6 max-w-md mx-auto">
          Kies de tool die het beste bij jouw situatie past en probeer het vandaag nog.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {comparisonTools.map((tool) => (
            <a
              key={tool.slug}
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                tool.slug === comparison.winner
                  ? "bg-white text-indigo-700 hover:bg-indigo-50"
                  : "bg-indigo-500 text-white hover:bg-indigo-400 border border-indigo-400"
              }`}
            >
              {tool.slug === comparison.winner ? `✓ ${tool.name} proberen` : `${tool.name} proberen`}
            </a>
          ))}
        </div>
        <p className="text-xs text-indigo-200 mt-4">
          * Gesponsorde links. We ontvangen mogelijk een commissie bij aankoop.
        </p>
      </div>
    </main>
  );
}
