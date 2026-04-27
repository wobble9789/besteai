import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Customer Service Tools 2025 — Top 7 Ranked | BestAI.net",
  description:
    "Tidio, Intercom AI, Zendesk AI, Gorgias — the best AI customer service tools of 2025 ranked by automation rate, pricing, and ease of use. Cut support costs by 70%.",
};

const tools = [
  {
    rank: 1,
    slug: "tidio",
    name: "Tidio",
    tagline: "Best for e-commerce & Shopify stores",
    price: "Free / $29/mo",
    rating: 4.5,
    badge: "🏆 Best for E-commerce",
    why: "Lyro AI resolves up to 70% of customer queries in under 6 seconds. Native Shopify and WooCommerce integration pulls live order data. Free plan available — the best starting point for online stores.",
    affiliateUrl: "https://www.tidio.com/?ref=besteai",
  },
  {
    rank: 2,
    slug: "intercom-ai",
    name: "Intercom AI",
    tagline: "Best for SaaS companies",
    price: "$39/mo",
    rating: 4.4,
    badge: "⚙️ Best for SaaS",
    why: "Fin AI resolves 50%+ of support tickets instantly across 45 languages. Deep product integration, in-app messaging, and product tours make it the complete SaaS customer platform.",
    affiliateUrl: "https://www.intercom.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "zendesk-ai",
    name: "Zendesk AI",
    tagline: "Best for enterprise support teams",
    price: "$55/mo",
    rating: 4.3,
    badge: "🏢 Best Enterprise",
    why: "Trusted by 100,000+ businesses. AI-powered triage, routing, and agent copilot. Best-in-class reporting suite. The gold standard for large support operations.",
    affiliateUrl: "https://www.zendesk.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "freshdesk-ai",
    name: "Freshdesk AI",
    tagline: "Best value — free plan for 10 agents",
    price: "Free / $18/mo",
    rating: 4.3,
    badge: "💰 Best Value",
    why: "Freddy AI auto-resolves tickets and suggests responses. Free plan supports up to 10 agents — no other major helpdesk matches this. Perfect for SMBs wanting enterprise features cheaply.",
    affiliateUrl: "https://www.freshdesk.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "gorgias",
    name: "Gorgias",
    tagline: "Best for Shopify DTC brands",
    price: "$10/mo",
    rating: 4.4,
    badge: "🛍️ Best for DTC",
    why: "The #1 helpdesk for Shopify. AI auto-answers order status, shipping, and return queries — the top 3 support reasons for any online store. 10,000+ DTC brands trust it.",
    affiliateUrl: "https://www.gorgias.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "crisp-ai",
    name: "Crisp AI",
    tagline: "Best free option for startups",
    price: "Free / $25/mo",
    rating: 4.3,
    badge: "🆓 Best Free",
    why: "Free plan forever (2 seats). MagicReply AI suggests responses. Multichannel inbox consolidates WhatsApp, Instagram, email, and chat. The best starting point for bootstrapped startups.",
    affiliateUrl: "https://crisp.chat/?ref=besteai",
  },
  {
    rank: 7,
    slug: "reamaze",
    name: "Re:amaze",
    tagline: "Unified customer service for online businesses",
    price: "$29/mo",
    rating: 4.3,
    badge: "🔄 Best All-in-One",
    why: "Combines live chat, helpdesk, chatbots, and push notifications in one platform. Affordable alternative to Gorgias with solid Shopify integration. Good for growing brands on a budget.",
    affiliateUrl: "https://www.reamaze.com/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI customer service tool in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tidio is best for e-commerce and Shopify stores. Intercom AI is best for SaaS companies. Zendesk AI is best for enterprise. Freshdesk AI offers the best value with a free plan for up to 10 agents.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI really handle customer service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Modern AI customer service tools like Tidio's Lyro and Intercom's Fin resolve 50-70% of tickets automatically. They handle order status, FAQs, returns, and product questions with response times under 6 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free AI customer service tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freshdesk offers the best free plan — up to 10 agents forever. Tidio and Crisp also have free plans for small businesses and startups.",
      },
    },
  ],
};

export default function BestAICustomerServiceToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🎧 Customer Service AI
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best AI Customer Service Tools 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI customer service tools resolve 50–70% of tickets automatically — cutting costs while improving response times. We tested them all. Here are the best.
          </p>
        </div>

        <div className="space-y-6">
          {tools.map((tool) => (
            <div
              key={tool.slug}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                    <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                  <p className="text-sm text-green-600 font-medium mb-2">{tool.tagline}</p>
                  <p className="text-gray-600 text-sm mb-3">{tool.why}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>⭐ {tool.rating}</span>
                    <span>💰 {tool.price}</span>
                  </div>
                </div>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-green-700 transition-colors"
                >
                  Try Free →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI Customer Service Tools Comparison 2025
          </h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Tool</th>
                <th className="text-left p-3 border border-gray-200">Best For</th>
                <th className="text-left p-3 border border-gray-200">Price</th>
                <th className="text-left p-3 border border-gray-200">Free Plan</th>
                <th className="text-left p-3 border border-gray-200">Rating</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">{tool.name}</td>
                  <td className="p-3 border border-gray-200">{tool.tagline}</td>
                  <td className="p-3 border border-gray-200">{tool.price}</td>
                  <td className="p-3 border border-gray-200">
                    {tool.price.includes("Free") ? "✅" : "❌"}
                  </td>
                  <td className="p-3 border border-gray-200">⭐ {tool.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-green-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Which AI Customer Service Tool Is Right for You?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            E-commerce / Shopify? → <strong>Tidio</strong> or <strong>Gorgias</strong>. SaaS? →{" "}
            <strong>Intercom AI</strong>. Enterprise? → <strong>Zendesk AI</strong>. Budget/free? →{" "}
            <strong>Freshdesk</strong> or <strong>Crisp</strong>.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                What is the best AI customer service tool in 2025?
              </h3>
              <p className="text-gray-600 text-sm">
                Tidio is best for e-commerce and Shopify stores. Intercom AI is best for SaaS
                companies. Zendesk AI is best for enterprise. Freshdesk AI offers the best value
                with a free plan for up to 10 agents.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                Can AI really handle customer service?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes. Modern AI customer service tools like Tidio&apos;s Lyro and Intercom&apos;s Fin resolve
                50–70% of tickets automatically. They handle order status, FAQs, returns, and
                product questions with response times under 6 seconds.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">
                What is the best free AI customer service tool?
              </h3>
              <p className="text-gray-600 text-sm">
                Freshdesk offers the best free plan — up to 10 agents forever. Tidio and Crisp also
                have free plans for small businesses and startups.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
