import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best AI Resume Builders 2025 — Top Picks for Job Seekers | BestAI.net",
  description:
    "The best AI resume builders of 2025 ranked by job-landing power, ATS compatibility, and price. Find the right AI resume tool to get hired faster.",
};

const resumeBuilders = [
  {
    rank: 1,
    name: "Kickresume AI",
    tagline: "Best AI resume builder overall",
    price: "Free / $19/mo",
    rating: 4.4,
    badge: "🏆 Best Overall",
    why: "GPT-4-powered resume and cover letter generation from scratch. Candidates who used Kickresume have landed roles at Google, Apple, and Amazon. Includes a built-in job tracker.",
    affiliateUrl: "https://www.kickresume.com/?ref=besteai",
    slug: "kickresume",
    pros: ["GPT-4 writing", "Cover letter included", "Job tracker built-in", "Beautiful templates"],
    bestFor: "Tech workers and ambitious professionals",
  },
  {
    rank: 2,
    name: "Resume.io AI",
    tagline: "Best for speed and ATS compatibility",
    price: "Free / $25/mo",
    rating: 4.4,
    badge: "⚡ Fastest Results",
    why: "The smoothest resume building experience available. 35+ ATS-optimised templates and AI content suggestions mean you can go from blank page to downloadable PDF in under 15 minutes.",
    affiliateUrl: "https://resume.io/?ref=besteai",
    slug: "resume-io",
    pros: ["ATS-optimised templates", "Drag-and-drop editor", "AI content suggestions", "Cover letter builder"],
    bestFor: "Job seekers who want professional results fast",
  },
  {
    rank: 3,
    name: "Teal AI Resume Builder",
    tagline: "Best free AI resume builder",
    price: "Free",
    rating: 4.3,
    badge: "🆓 Best Free",
    why: "Teal's free AI resume builder tailors your resume to specific job descriptions using keyword analysis. The job tracker and application manager make it a complete free job search suite.",
    affiliateUrl: "https://www.tealhq.com/?ref=besteai",
    slug: "chatgpt",
    pros: ["Truly free", "Job description tailoring", "Application tracker", "Keyword analysis"],
    bestFor: "Budget-conscious job seekers",
  },
  {
    rank: 4,
    name: "Rezi AI",
    tagline: "Best for ATS keyword optimisation",
    price: "Free / $29/mo",
    rating: 4.2,
    badge: "🤖 Best ATS Score",
    why: "Rezi analyses job descriptions and rewrites your resume to maximise ATS keyword match. Ideal for large companies with automated screening systems that reject 75% of applications before a human reads them.",
    affiliateUrl: "https://www.rezi.ai/?ref=besteai",
    slug: "chatgpt",
    pros: ["ATS score checker", "Keyword gap analysis", "Clean formatting", "Cover letter tool"],
    bestFor: "Candidates applying to large companies with ATS systems",
  },
  {
    rank: 5,
    name: "ChatGPT",
    tagline: "Best for maximum customisation",
    price: "Free / $20/mo",
    rating: 4.8,
    badge: "🔧 Most Flexible",
    why: "ChatGPT is not a resume builder but it is the most powerful AI writing tool available. Use it to craft perfectly tailored bullet points, summaries, and cover letters, then import into a template tool.",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
    slug: "chatgpt",
    pros: ["Infinite customisation", "Best cover letters", "Free GPT-3.5 tier", "Tailors per job description"],
    bestFor: "Experienced professionals who want full control",
  },
];

const faqs = [
  {
    q: "Do AI resume builders actually work?",
    a: "Yes — when used correctly. AI resume builders produce ATS-optimised, professionally formatted resumes faster than writing from scratch. The key is tailoring the output to each job description rather than sending one generic resume everywhere.",
  },
  {
    q: "Which AI resume builder is best for ATS?",
    a: "Resume.io and Rezi are the strongest for ATS compatibility. Both use clean formatting without tables, graphics, or columns that break automated parsers. Rezi also scores your resume against specific job descriptions.",
  },
  {
    q: "Can I use ChatGPT to write my resume?",
    a: "Yes, but ChatGPT cannot format or design a resume — it produces plain text. The best approach: use ChatGPT to write your bullet points and summary, then paste them into a resume builder like Resume.io or Kickresume for formatting.",
  },
  {
    q: "Are AI resume builders free?",
    a: "Most offer a free tier to create a resume but require payment to download. Teal is the most generous free option. Kickresume and Resume.io both offer free plans with watermarks. Expect to pay $19-25/month for full access.",
  },
  {
    q: "What is the best AI resume builder for tech jobs?",
    a: "Kickresume is the top choice for tech roles — its GPT-4 generator writes developer-friendly bullet points, and its templates are modern enough to match startup culture. Many candidates who got jobs at FAANG companies used Kickresume.",
  },
];

export default function BestAIResumeBuildersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="mb-10">
        <div className="text-sm text-indigo-600 font-semibold mb-2">Best AI Tools → Resume Builders</div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Best AI Resume Builders 2025
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          AI resume builders have levelled the playing field for job seekers. The best tools write achievement-focused bullet points, optimise for ATS systems, and produce interview-ready resumes in under 15 minutes.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          Updated April 2026 · Tested by BestAI Editorial team · {resumeBuilders.length} tools reviewed
        </p>
      </div>

      {/* Quick picks */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Picks</h2>
        <div className="space-y-2">
          {resumeBuilders.slice(0, 3).map((tool) => (
            <div key={tool.rank} className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold text-sm w-4 shrink-0">{tool.rank}.</span>
              <div>
                <span className="font-semibold text-gray-900">{tool.name}</span>
                <span className="text-gray-500 text-sm ml-2">— {tool.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool cards */}
      <div className="space-y-8 mb-14">
        {resumeBuilders.map((tool) => (
          <div key={tool.rank} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-extrabold text-gray-300">#{tool.rank}</span>
                  <h2 className="text-xl font-bold text-gray-900">{tool.name}</h2>
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {tool.badge}
                  </span>
                </div>
                <p className="text-gray-500 text-sm">{tool.tagline}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-bold text-gray-900">{tool.price}</div>
                <div className="text-amber-500 text-sm">{"★".repeat(Math.round(tool.rating))} {tool.rating}</div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{tool.why}</p>

            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Features</div>
              <div className="flex flex-wrap gap-2">
                {tool.pros.map((pro) => (
                  <span key={pro} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full border border-green-100">
                    ✓ {pro}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Best for: {tool.bestFor}</span>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="bg-indigo-600 text-white text-sm px-5 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Try {tool.name} →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* How to choose */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an AI Resume Builder</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "🤖", title: "ATS Compatibility", desc: "Your resume must pass automated screening before a human reads it. Look for clean, single-column templates without graphics or tables." },
            { icon: "✍️", title: "AI Writing Quality", desc: "The best tools write achievement-focused bullet points with metrics — not generic filler like 'responsible for managing projects.'" },
            { icon: "📄", title: "Template Selection", desc: "You need at least 10 professional templates covering minimal, creative, and corporate styles. More is better." },
            { icon: "💰", title: "Price vs Value", desc: "Most tools cost $19-29/month. If you are actively job searching, this pays for itself with one extra interview. Free tiers work for casual use." },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-200 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{faq.q}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="bg-gray-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link href="/blog/best-ai-resume-builders-2025" className="text-indigo-600 hover:underline text-sm">
            → Best AI Resume Builders 2025 (full review)
          </Link>
          <Link href="/blog/ai-resume-writing-guide-2025" className="text-indigo-600 hover:underline text-sm">
            → How to Write a Resume with AI: Step-by-Step
          </Link>
          <Link href="/blog/ai-cover-letter-tools-2025" className="text-indigo-600 hover:underline text-sm">
            → Can AI Write Your Cover Letter? We Tested 5 Tools
          </Link>
          <Link href="/compare/resume-io-vs-kickresume" className="text-indigo-600 hover:underline text-sm">
            → Resume.io vs Kickresume: Head-to-Head
          </Link>
        </div>
      </section>

      <p className="text-xs text-gray-400 text-center mt-8">
        * This page may contain affiliate links. We earn a small commission at no extra cost to you.
      </p>
    </main>
  );
}
