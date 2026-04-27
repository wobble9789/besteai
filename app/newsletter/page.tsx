import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly AI Newsletter — Get the Best AI Tools Delivered | BestAI.net",
  description:
    "Join thousands of AI enthusiasts. Get the best new AI tools, exclusive deals, and weekly roundups delivered to your inbox every week. No spam, unsubscribe anytime.",
};

const sampleNewsletterTools = [
  {
    emoji: "🎵",
    name: "Suno AI",
    tagline: "Generate complete songs from text",
    deal: "Free tier: 50 songs/day",
    url: "https://suno.ai/?ref=besteai",
  },
  {
    emoji: "🧠",
    name: "Woebot",
    tagline: "CBT-based mental wellness AI",
    deal: "100% Free — no subscription",
    url: "https://woebothealth.com/?ref=besteai",
  },
  {
    emoji: "🎼",
    name: "Aiva AI",
    tagline: "Cinematic music composition AI",
    deal: "Free plan available",
    url: "https://aiva.ai/?ref=besteai",
  },
];

export default function NewsletterPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          📬 Weekly Newsletter
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Get the Best AI Tools<br />Delivered Weekly
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Join 12,000+ professionals who stay ahead of the AI curve — every Monday morning.
        </p>
      </div>

      {/* Value Props */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-orange-50 rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">🛠️</div>
          <h3 className="font-bold text-gray-900 mb-1">New tools every week</h3>
          <p className="text-sm text-gray-600">Curated AI tools you haven&apos;t heard of yet</p>
        </div>
        <div className="bg-green-50 rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">💸</div>
          <h3 className="font-bold text-gray-900 mb-1">Exclusive deals</h3>
          <p className="text-sm text-gray-600">Discounts and offers not available elsewhere</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">🚫</div>
          <h3 className="font-bold text-gray-900 mb-1">No spam</h3>
          <p className="text-sm text-gray-600">One email per week. Unsubscribe any time.</p>
        </div>
      </div>

      {/* Signup Form */}
      <div className="bg-gray-900 rounded-3xl p-8 md:p-10 mb-12">
        <h2 className="text-2xl font-bold text-white mb-2">Join the list</h2>
        <p className="text-gray-400 mb-6">Free forever. Unsubscribe with one click.</p>
        <form
          action="https://formsubmit.co/henkvrai@outlook.com"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value="New BestAI Newsletter Subscriber!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://besteai.net/newsletter/thanks" />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl text-lg transition-colors"
          >
            Subscribe — It&apos;s Free →
          </button>
          <p className="text-xs text-gray-500 text-center">
            No spam. No sharing your data. Unsubscribe anytime.
          </p>
        </form>
      </div>

      {/* Sample Newsletter Preview */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What you&apos;ll get every week</h2>
        <p className="text-gray-600 mb-6">Here&apos;s a preview of a typical issue:</p>

        {/* Fake Newsletter Card */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-gray-50">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
            <span className="text-2xl">📮</span>
            <div>
              <p className="font-bold text-gray-900 text-sm">BestAI Weekly — Issue #47</p>
              <p className="text-xs text-gray-500">Monday, April 28 · 3 min read</p>
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-4">
            <strong>Hey 👋</strong> — This week we found 3 tools worth your time:
          </p>

          <div className="space-y-3">
            {sampleNewsletterTools.map((tool, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-3">
                <span className="text-2xl">{tool.emoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">{tool.name}</p>
                  <p className="text-xs text-gray-600">{tool.tagline}</p>
                  <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                    {tool.deal}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 mt-4 text-center">
            + deal of the week · AI news digest · 1 pro tip
          </p>
        </div>
      </div>

      {/* Social Proof */}
      <div className="text-center bg-orange-50 rounded-2xl p-8">
        <p className="text-4xl font-extrabold text-orange-600 mb-1">12,000+</p>
        <p className="text-gray-700 font-medium mb-4">subscribers already on the list</p>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          &quot;The only AI newsletter I actually look forward to every Monday.&quot;
          <br />
          <span className="text-gray-400">— Sarah T., Product Designer</span>
        </p>
      </div>
    </main>
  );
}
