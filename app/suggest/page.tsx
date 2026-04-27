import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Suggest a Tool — Submit an AI Tool to BestAI.net",
  description:
    "Know an AI tool we haven't reviewed yet? Suggest it here and we'll consider adding it to BestAI.net. Help the community discover the best AI tools.",
};

export default function SuggestToolPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Suggest a Tool</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Suggest an AI Tool 🛠️
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Found an AI tool we haven&apos;t reviewed yet? Tell us about it. We review every submission and add the best tools to BestAI.net.
      </p>

      <form
        action="https://formsubmit.co/henkvrai@outlook.com"
        method="POST"
        className="space-y-6"
      >
        {/* Honeypot */}
        <input type="text" name="_honey" className="hidden" />
        {/* Disable captcha */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Subject */}
        <input type="hidden" name="_subject" value="New Tool Suggestion — BestAI.net" />
        {/* Redirect after submit */}
        <input type="hidden" name="_next" value="https://besteai.nl/suggest/thanks" />

        <div>
          <label htmlFor="tool_name" className="block text-sm font-semibold text-gray-700 mb-1">
            Tool Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="tool_name"
            name="tool_name"
            required
            placeholder="e.g. Perplexity AI"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="tool_url" className="block text-sm font-semibold text-gray-700 mb-1">
            Tool URL <span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            id="tool_url"
            name="tool_url"
            required
            placeholder="https://example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">Select a category…</option>
            <option value="writing">Writing & Content</option>
            <option value="coding">Coding & Development</option>
            <option value="automation">Automation & Workflows</option>
            <option value="research">Research & Analysis</option>
            <option value="image">Image & Design</option>
            <option value="video">Video & Audio</option>
            <option value="chatbot">Chatbots & Assistants</option>
            <option value="seo">SEO & Marketing</option>
            <option value="productivity">Productivity</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-1">
            Why should we add it? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="reason"
            name="reason"
            required
            rows={4}
            placeholder="What makes this tool special? Who is it for? What problem does it solve?"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Your email <span className="text-gray-400 font-normal">(optional — we&apos;ll notify you if we add it)</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
        >
          Submit Tool →
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6 text-center">
        We review every submission. Most tools are reviewed within 1-2 weeks.
        We don&apos;t add paid placements — only tools we genuinely think are useful.
      </p>
    </div>
  );
}
