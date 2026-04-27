import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Business 2025 — Top 8 Ranked | BestAI.net",
  description:
    "The best AI tools for business in 2025. Automate workflows, boost productivity, and grow revenue with these business-grade AI tools.",
};

const businessTools = [
  {
    rank: 1,
    slug: "chatgpt",
    name: "ChatGPT Enterprise",
    tagline: "Best AI for business teams",
    price: "From $25/user/mo",
    rating: 4.8,
    badge: "🏆 Editor's Choice",
    why: "Enterprise-grade security, no data training, unlimited GPT-4o access, and admin controls. The all-purpose AI tool every business team needs.",
    affiliateUrl: "https://openai.com/enterprise?ref=besteai",
  },
  {
    rank: 2,
    slug: "notion",
    name: "Notion AI",
    tagline: "Best for team knowledge management",
    price: "$10/mo add-on",
    rating: 4.6,
    badge: "📋 Best Knowledge",
    why: "Turn your company wiki into an AI-powered knowledge base. Summarize docs, generate action items, draft SOPs, and answer questions about your own data.",
    affiliateUrl: "https://notion.so/?ref=besteai",
  },
  {
    rank: 3,
    slug: "zapier",
    name: "Zapier AI",
    tagline: "Best for workflow automation",
    price: "Free / $19.99/mo",
    rating: 4.7,
    badge: "⚡ Best Automation",
    why: "Connect 7,000+ apps with AI-powered automation. AI Zaps understand natural language — describe what you want to automate and it builds the workflow.",
    affiliateUrl: "https://zapier.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "hubspot",
    name: "HubSpot AI",
    tagline: "Best for sales & CRM AI",
    price: "Free / From $45/mo",
    rating: 4.6,
    badge: "💼 Best CRM",
    why: "AI-powered CRM with email generation, deal scoring, content creation, and chatbots built-in. The most complete AI sales platform on the market.",
    affiliateUrl: "https://hubspot.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "microsoft-copilot",
    name: "Microsoft 365 Copilot",
    tagline: "Best for Office users",
    price: "$30/user/mo",
    rating: 4.5,
    badge: "🏢 Best Office AI",
    why: "AI built into Word, Excel, PowerPoint, Teams, and Outlook. Summarize emails, generate presentations, analyze spreadsheets — without leaving Microsoft apps.",
    affiliateUrl: "https://microsoft.com/copilot?ref=besteai",
  },
  {
    rank: 6,
    slug: "grammarly",
    name: "Grammarly Business",
    tagline: "Best for business communication",
    price: "From $15/user/mo",
    rating: 4.5,
    badge: "✉️ Best Communication",
    why: "Consistent, professional writing across your entire team. Brand voice settings, style guides, and real-time AI writing assistance everywhere you type.",
    affiliateUrl: "https://grammarly.com/business?ref=besteai",
  },
  {
    rank: 7,
    slug: "jasper",
    name: "Jasper AI Business",
    tagline: "Best for content marketing",
    price: "From $59/mo",
    rating: 4.5,
    badge: "📢 Best Marketing",
    why: "AI content generation at scale with brand voice, multi-channel campaigns, and team collaboration. Used by 100,000+ marketing teams worldwide.",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
  },
  {
    rank: 8,
    slug: "otter-ai",
    name: "Otter.ai Business",
    tagline: "Best for meeting productivity",
    price: "From $20/user/mo",
    rating: 4.4,
    badge: "🎙️ Best Meetings",
    why: "Transcribe, summarize, and extract action items from every meeting automatically. Integrates with Zoom, Teams, and Google Meet. ROI is immediate.",
    affiliateUrl: "https://otter.ai/business?ref=besteai",
  },
];

export default function BestAIToolsForBusinessPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="inline-block bg-slate-100 text-slate-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          💼 Business Tools
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Tools for Business 2025</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The businesses winning in 2025 are the ones using AI to automate, create, and communicate faster. These are the tools with the highest business ROI.
        </p>
      </div>

      <div className="space-y-6">
        {businessTools.map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                  <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                <p className="text-sm text-slate-600 font-medium mb-2">{tool.tagline}</p>
                <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐ {tool.rating}</span>
                  <span>💰 {tool.price}</span>
                </div>
              </div>
              <a href={tool.affiliateUrl} target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 bg-slate-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-colors">
                Try Free →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Business AI Tools Comparison</h2>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 border border-gray-200">Tool</th>
              <th className="text-left p-3 border border-gray-200">Best For</th>
              <th className="text-left p-3 border border-gray-200">Price</th>
              <th className="text-left p-3 border border-gray-200">Rating</th>
            </tr>
          </thead>
          <tbody>
            {businessTools.map((tool) => (
              <tr key={tool.slug} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">{tool.name}</td>
                <td className="p-3 border border-gray-200">{tool.tagline}</td>
                <td className="p-3 border border-gray-200">{tool.price}</td>
                <td className="p-3 border border-gray-200">⭐ {tool.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 bg-slate-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Where to Start</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Every business should start with <strong>ChatGPT</strong> and <strong>Zapier AI</strong> — highest versatility, massive ROI. Microsoft shop? <strong>Copilot 365</strong> integrates into your existing workflow immediately. Build from there.
        </p>
      </div>
    </main>
  );
}
