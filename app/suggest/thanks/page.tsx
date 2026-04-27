import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanks for Your Suggestion! — BestAI.net",
  description: "Thank you for suggesting an AI tool. We'll review it and consider adding it to BestAI.net.",
};

export default function SuggestThanksPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Thanks for the suggestion!</h1>
      <p className="text-lg text-gray-600 mb-8">
        We&apos;ll review your submission and consider adding it to BestAI.net. Most tools are reviewed within 1-2 weeks.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Back to Home →
      </Link>
    </div>
  );
}
