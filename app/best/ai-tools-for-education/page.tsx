import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Education 2025 — Top 8 Ranked | BestAI.net",
  description:
    "The best AI tools for education in 2025. AI tutors, homework helpers, and study apps for students, teachers, and schools. Most have free plans.",
};

const educationTools = [
  {
    rank: 1,
    slug: "khanmigo",
    name: "Khanmigo",
    tagline: "Best AI tutor for students",
    price: "Free",
    rating: 4.5,
    badge: "🏆 Best Tutor",
    why: "Khan Academy's GPT-4 powered tutor guides students with Socratic questioning — no cheating, genuine learning. Free for all students. Best-in-class for K-12.",
    affiliateUrl: "https://www.khanacademy.org/khan-labs?ref=besteai",
  },
  {
    rank: 2,
    slug: "duolingo-ai",
    name: "Duolingo AI",
    tagline: "Best for language learning",
    price: "Free / $7/mo",
    rating: 4.6,
    badge: "🌍 Best Languages",
    why: "40+ languages, GPT-4 powered Roleplay conversations, and gamification that builds daily habits. Duolingo Max adds AI conversation practice that rivals real tutors.",
    affiliateUrl: "https://www.duolingo.com/?ref=besteai",
  },
  {
    rank: 3,
    slug: "quizlet-ai",
    name: "Quizlet AI",
    tagline: "Best for flashcards & studying",
    price: "Free / $8/mo",
    rating: 4.4,
    badge: "📚 Best Flashcards",
    why: "500M+ study sets, AI-generated flashcards, and an adaptive Q-Chat tutor. The world's largest student learning platform just keeps getting smarter.",
    affiliateUrl: "https://quizlet.com/?ref=besteai",
  },
  {
    rank: 4,
    slug: "photomath",
    name: "Photomath",
    tagline: "Best for math homework",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "🔢 Best Math",
    why: "Point your phone at any math problem and get step-by-step solutions instantly. Covers arithmetic through calculus. The free tier handles most student needs.",
    affiliateUrl: "https://photomath.com/?ref=besteai",
  },
  {
    rank: 5,
    slug: "coursera-ai",
    name: "Coursera AI",
    tagline: "Best for online courses",
    price: "Free / $59/mo",
    rating: 4.5,
    badge: "🎓 Best Courses",
    why: "7,000+ courses from Stanford, Google, and Meta with AI-personalized recommendations and Coursera Coach AI tutor. Certificates recognized by employers worldwide.",
    affiliateUrl: "https://www.coursera.org/?ref=besteai",
  },
  {
    rank: 6,
    slug: "socratic",
    name: "Socratic by Google",
    tagline: "Free homework helper by Google",
    price: "Free",
    rating: 4.4,
    badge: "🔍 Best Free Tool",
    why: "Completely free, Google-backed AI for all school subjects. Take a photo of any question and get clear visual explanations. No account required.",
    affiliateUrl: "https://socratic.org/?ref=besteai",
  },
  {
    rank: 7,
    slug: "brainly-ai",
    name: "Brainly AI",
    tagline: "AI + community homework help",
    price: "Free / $24/mo",
    rating: 4.2,
    badge: "👥 Best Community",
    why: "Combines AI with 350M+ students and teacher-verified answers. Covers all subjects from elementary through college. Great for finding diverse explanations.",
    affiliateUrl: "https://brainly.com/?ref=besteai",
  },
  {
    rank: 8,
    slug: "explain-everything",
    name: "Explain Everything",
    tagline: "Best AI whiteboard for teachers",
    price: "Free / $12/mo",
    rating: 4.2,
    badge: "📋 Best for Teachers",
    why: "Interactive AI whiteboard used by educators in 150+ countries. Create animated explainer videos, collaborate in real-time, and build engaging lessons with AI assistance.",
    affiliateUrl: "https://explaineverything.com/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI tool for education in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Khanmigo by Khan Academy is the best AI tutor for K-12 students. Duolingo AI is best for language learning. Quizlet AI is best for studying and flashcards. Coursera AI is best for university-level and professional learning.",
      },
    },
    {
      "@type": "Question",
      name: "Are there free AI education tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Khanmigo, Socratic by Google, and Duolingo (basic) are completely free. Quizlet and Brainly offer free tiers. Most paid tools have free trials.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tools do teachers use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teachers commonly use Explain Everything for interactive lessons, Khanmigo to support student learning, ChatGPT for lesson planning, and Coursera for professional development.",
      },
    },
  ],
};

export default function BestAIToolsForEducationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🎓 Education Tools
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Best AI Tools for Education 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI tutors, homework helpers, language apps, and study tools for students, teachers, and schools. Ranked by effectiveness — most have free plans.
          </p>
        </div>

        <div className="space-y-6">
          {educationTools.map((tool) => (
            <div
              key={tool.slug}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-gray-200">
                      #{tool.rank}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {tool.name}
                  </h2>
                  <p className="text-sm text-blue-600 font-medium mb-2">
                    {tool.tagline}
                  </p>
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
                  className="flex-shrink-0 bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Try Free →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Education AI Tools Comparison
          </h2>
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
              {educationTools.map((tool) => (
                <tr key={tool.slug} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200 font-medium">
                    {tool.name}
                  </td>
                  <td className="p-3 border border-gray-200">{tool.tagline}</td>
                  <td className="p-3 border border-gray-200">{tool.price}</td>
                  <td className="p-3 border border-gray-200">
                    ⭐ {tool.rating}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Free Education AI Starter Pack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with <strong>Khanmigo Free</strong> (tutoring) +{" "}
            <strong>Duolingo Free</strong> (languages) +{" "}
            <strong>Quizlet Free</strong> (flashcards) +{" "}
            <strong>Socratic Free</strong> (homework). That&apos;s a complete AI
            education toolkit at zero cost.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
