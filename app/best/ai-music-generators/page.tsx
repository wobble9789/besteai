import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Music Generators 2025 — Top 8 Ranked | BestAI.net",
  description:
    "The best AI music generators of 2025. Suno, Aiva, Soundraw, Beatoven, Boomy — ranked for music quality, pricing, and use cases. Create royalty-free music with AI.",
};

const musicTools = [
  {
    rank: 1,
    slug: "suno",
    name: "Suno",
    tagline: "Best AI song generator with vocals",
    price: "Free / $8/mo",
    rating: 4.7,
    badge: "🏆 Most Popular",
    why: "Generate complete songs — lyrics, vocals, and full instrumentation — from a text prompt in seconds. The most viral AI music tool of 2025 with surprisingly professional results.",
    affiliateUrl: "https://suno.ai/?ref=besteai",
  },
  {
    rank: 2,
    slug: "aiva",
    name: "Aiva AI",
    tagline: "Best for cinematic and orchestral music",
    price: "Free / €11/mo",
    rating: 4.5,
    badge: "🎼 Best Composition",
    why: "Trained on classical masterworks, Aiva generates professional cinematic, orchestral, and game music. Used by film composers and game studios worldwide. Full commercial license on paid plans.",
    affiliateUrl: "https://aiva.ai/?ref=besteai",
  },
  {
    rank: 3,
    slug: "soundraw",
    name: "Soundraw",
    tagline: "Best for YouTube & content creators",
    price: "$17/mo",
    rating: 4.4,
    badge: "📺 Best for YouTube",
    why: "Generate unlimited royalty-free background music by mood, genre, and energy. YouTube Content ID whitelisted — essential for monetised creators. Unlimited downloads on all paid plans.",
    affiliateUrl: "https://soundraw.io/?ref=besteai",
  },
  {
    rank: 4,
    slug: "beatoven",
    name: "Beatoven AI",
    tagline: "Best budget AI music generator",
    price: "Free / $7/mo",
    rating: 4.3,
    badge: "💰 Best Value",
    why: "Creates emotion-aware background music that adapts to your content's mood. At just $7/month for 2 hours of music, it's the most affordable quality option. Free tier includes 15 minutes/month.",
    affiliateUrl: "https://beatoven.ai/?ref=besteai",
  },
  {
    rank: 5,
    slug: "loudly",
    name: "Loudly AI",
    tagline: "Best for music producers",
    price: "Free / $9/mo",
    rating: 4.2,
    badge: "🎛️ Most Control",
    why: "The only AI music tool with stem-level editing — adjust individual instruments, layer energy, and customise your track like a real producer. Ideal for music creators who want real control.",
    affiliateUrl: "https://loudly.com/?ref=besteai",
  },
  {
    rank: 6,
    slug: "boomy",
    name: "Boomy AI",
    tagline: "Create and release music to Spotify",
    price: "Free / $10/mo",
    rating: 4.2,
    badge: "🚀 Publish to Spotify",
    why: "Generate songs in seconds and release them directly to Spotify, Apple Music, and more. Over 18 million songs created. The easiest way to become a 'published' music artist with AI.",
    affiliateUrl: "https://boomy.com/?ref=besteai",
  },
  {
    rank: 7,
    slug: "udio",
    name: "Udio",
    tagline: "Best for detailed music composition",
    price: "Free / $10/mo",
    rating: 4.5,
    badge: "🎵 Best Detail",
    why: "Udio creates incredibly detailed AI music with precise genre control. Its unique 'extend' feature lets you continue and build longer tracks from any point — great for full productions.",
    affiliateUrl: "https://udio.com/?ref=besteai",
  },
  {
    rank: 8,
    slug: "elevenlabs",
    name: "ElevenLabs Sound Effects",
    tagline: "Best for AI sound effects & audio",
    price: "Free / $5/mo",
    rating: 4.9,
    badge: "🔊 Best Audio",
    why: "Beyond voice, ElevenLabs now generates AI sound effects and ambient audio from text prompts. Perfect for game developers and filmmakers needing custom sound design.",
    affiliateUrl: "https://elevenlabs.io/?ref=besteai",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best AI music generator in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suno is the best AI music generator for complete songs with vocals. Aiva AI is best for cinematic and orchestral music. Soundraw is best for YouTube creators needing royalty-free background music.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI music generators royalty-free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most AI music generators offer royalty-free licenses on paid plans. Soundraw is YouTube Content ID whitelisted. Always check commercial license terms before using in monetised content.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI generate music for free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Suno offers 50 credits/day free, Beatoven AI gives 15 minutes/month free, and Aiva has a limited free plan. Free tiers typically restrict commercial use.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI music tool is best for YouTube?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soundraw is the best choice for YouTube creators. It's YouTube Content ID whitelisted, offers unlimited royalty-free downloads, and produces consistently professional background music.",
      },
    },
  ],
};

export default function BestAIMusicGeneratorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            🎵 Music AI
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Best AI Music Generators 2025</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create royalty-free music, full songs with vocals, cinematic scores, and background tracks — all with AI. No musical experience required. Ranked by quality, licensing, and value.
          </p>
        </div>

        <div className="space-y-6">
          {musicTools.map((tool) => (
            <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-gray-200">#{tool.rank}</span>
                    <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-1 rounded-full">{tool.badge}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
                  <p className="text-sm text-purple-600 font-medium mb-2">{tool.tagline}</p>
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
                  className="flex-shrink-0 bg-purple-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  Try Free →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Music Generators Comparison</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border border-gray-200">Tool</th>
                <th className="text-left p-3 border border-gray-200">Best For</th>
                <th className="text-left p-3 border border-gray-200">Price</th>
                <th className="text-left p-3 border border-gray-200">Free Tier</th>
                <th className="text-left p-3 border border-gray-200">Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Suno</td>
                <td className="p-3 border border-gray-200">Full songs + vocals</td>
                <td className="p-3 border border-gray-200">Free / $8/mo</td>
                <td className="p-3 border border-gray-200">✅ 50 credits/day</td>
                <td className="p-3 border border-gray-200">⭐ 4.7</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Aiva AI</td>
                <td className="p-3 border border-gray-200">Cinematic / orchestral</td>
                <td className="p-3 border border-gray-200">Free / €11/mo</td>
                <td className="p-3 border border-gray-200">✅ Limited</td>
                <td className="p-3 border border-gray-200">⭐ 4.5</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Soundraw</td>
                <td className="p-3 border border-gray-200">YouTube background music</td>
                <td className="p-3 border border-gray-200">$17/mo</td>
                <td className="p-3 border border-gray-200">❌</td>
                <td className="p-3 border border-gray-200">⭐ 4.4</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Beatoven AI</td>
                <td className="p-3 border border-gray-200">Budget creators</td>
                <td className="p-3 border border-gray-200">Free / $7/mo</td>
                <td className="p-3 border border-gray-200">✅ 15 min/mo</td>
                <td className="p-3 border border-gray-200">⭐ 4.3</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Loudly AI</td>
                <td className="p-3 border border-gray-200">Producers / stem editing</td>
                <td className="p-3 border border-gray-200">Free / $9/mo</td>
                <td className="p-3 border border-gray-200">✅ 10 downloads/mo</td>
                <td className="p-3 border border-gray-200">⭐ 4.2</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200 font-medium">Boomy AI</td>
                <td className="p-3 border border-gray-200">Publish to Spotify</td>
                <td className="p-3 border border-gray-200">Free / $10/mo</td>
                <td className="p-3 border border-gray-200">✅ 25 songs</td>
                <td className="p-3 border border-gray-200">⭐ 4.2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Our AI Music Picks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For most creators: start with <strong>Suno</strong> (free, incredibly fun) or <strong>Soundraw</strong> (YouTube-safe, professional). Scoring a film or game? <strong>Aiva AI</strong> is in a league of its own.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
