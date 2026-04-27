import Link from "next/link";
import { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
          <p className="text-sm text-gray-500">{tool.website}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          {tool.isNew && (
            <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap">
              🆕 New
            </span>
          )}
          {tool.badge && (
            <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full whitespace-nowrap">
              {tool.badge}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 flex-grow">{tool.tagline}</p>

      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= Math.round(tool.rating) ? "text-yellow-400" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-500 ml-1">{tool.rating}/5</span>
      </div>

      <div className="flex items-center justify-between mb-5">
        <span className="text-lg font-bold text-gray-900">{tool.price}</span>
        <div className="flex gap-1">
          {tool.categories.slice(0, 2).map((cat) => (
            <span key={cat} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize">
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <Link
          href={`/tools/${tool.slug}`}
          className="flex-1 text-center text-sm border border-indigo-600 text-indigo-600 rounded-lg py-2 hover:bg-indigo-50 transition-colors"
        >
          More info
        </Link>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-sm bg-indigo-600 text-white rounded-lg py-2 hover:bg-indigo-700 transition-colors font-semibold"
        >
          Try free →
        </a>
      </div>
    </div>
  );
}
