import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — SpotlightTool",
  description:
    "SpotlightTool participates in affiliate programs. Read our full disclosure about how we earn commissions and how it affects our reviews.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Affiliate Disclosure</h1>
      <p className="text-gray-500 mb-8 text-sm">Last updated: April 2026</p>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to Transparency</h2>
          <p>
            SpotlightTool (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to full transparency about how we operate and how we earn revenue.
            This page explains our use of affiliate links in accordance with the Federal Trade Commission (FTC) guidelines and applicable advertising disclosure laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Affiliate Links?</h2>
          <p>
            Some of the links on SpotlightTool are &ldquo;affiliate links.&rdquo; This means that if you click on one of those links and make a purchase or sign up for a service,
            we may receive a small commission or referral fee — at <strong>no additional cost to you</strong>. The price you pay is always the same whether or not you use our affiliate link.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Which Programs We Participate In</h2>
          <p>SpotlightTool participates in affiliate programs offered by various tool vendors, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-gray-600">
            <li>AI writing and productivity tool affiliate programs (e.g., Jasper, Writesonic, Copy.ai, Grammarly)</li>
            <li>Design and creative tool programs (e.g., Canva, Midjourney)</li>
            <li>SEO and marketing tool programs (e.g., Semrush, Surfer SEO)</li>
            <li>Automation and productivity platforms (e.g., Zapier, Make.com, ClickUp, Notion)</li>
            <li>AI chatbot and productivity tool programs (e.g., OpenAI/ChatGPT)</li>
            <li>Other tool vendor affiliate programs we may join from time to time</li>
          </ul>
          <p className="mt-3">
            Affiliate links are typically identified with tracking parameters in the URL (e.g., <code className="bg-gray-100 px-1 rounded text-sm">?ref=spotlighttool</code>, <code className="bg-gray-100 px-1 rounded text-sm">?via=spotlighttool</code>, or <code className="bg-gray-100 px-1 rounded text-sm">?fpr=spotlighttool</code>).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">How This Affects Our Reviews</h2>
          <p>
            Our editorial independence is non-negotiable. Affiliate relationships <strong>do not influence</strong> our reviews, ratings, or recommendations.
            We only recommend tools we genuinely believe provide value to our users. Tools are rated based on features, pricing, ease of use, and real-world performance — not on commission rates.
          </p>
          <p className="mt-3">
            We may sometimes review tools that have no affiliate program at all, and we will never recommend an inferior product simply because it pays a higher commission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">FTC Compliance</h2>
          <p>
            In accordance with the <a href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">FTC&rsquo;s guidelines on endorsements and testimonials</a>,
            SpotlightTool discloses all material connections to the products and services we review or recommend.
            This page serves as our site-wide disclosure. Individual tool pages and comparison articles may also include inline disclosures for clarity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Questions?</h2>
          <p>
            If you have any questions about our affiliate relationships or editorial policy, please feel free to reach out via our{" "}
            <Link href="/suggest" className="text-indigo-600 hover:underline">contact page</Link>.
          </p>
        </section>

      </div>
    </div>
  );
}
