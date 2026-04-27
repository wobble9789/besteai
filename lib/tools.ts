export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  affiliateUrl: string;
  price: string;
  priceDetails: string;
  categories: string[];
  rating: number;
  pros: string[];
  cons: string[];
  badge?: string;
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "The world's most popular AI chatbot",
    description:
      "ChatGPT by OpenAI is the most widely used AI assistant. Perfect for writing, coding, analysis, and much more. With GPT-4 you get powerful results for virtually any task.",
    website: "openai.com",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
    price: "Free / $20/mo",
    priceDetails: "Free basic version available. ChatGPT Plus for $20/month.",
    categories: ["writing", "automation", "research"],
    rating: 4.8,
    pros: ["Most versatile", "Large community", "Excellent coding support", "Plugin ecosystem"],
    cons: ["Free version limited", "Occasionally slow responses", "Privacy concerns"],
    badge: "Most Popular",
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Safe and accurate AI by Anthropic",
    description:
      "Claude by Anthropic is known for its safe, nuanced responses and excellent writing quality. Ideal for long documents and complex analyses.",
    website: "anthropic.com",
    affiliateUrl: "https://claude.ai/?ref=besteai",
    price: "Free / $20/mo",
    priceDetails: "Free basic version. Claude Pro for $20/month with more capacity.",
    categories: ["writing", "research", "automation"],
    rating: 4.7,
    pros: ["Large context window", "High writing quality", "Safety-focused", "Nuanced answers"],
    cons: ["Fewer plugins", "No image generation", "Sometimes too cautious"],
    badge: "Best Quality",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Professional AI image generation",
    description:
      "Midjourney is the gold standard for AI-generated images. Create stunning illustrations, concept art, and marketing visuals with simple text prompts.",
    website: "midjourney.com",
    affiliateUrl: "https://midjourney.com/?ref=besteai",
    price: "From $10/mo",
    priceDetails: "Basic plan $10/month. Standard $30/month for more usage.",
    categories: ["images", "design"],
    rating: 4.9,
    pros: ["Best image quality", "Artistic styles", "Active community", "V6 model impressive"],
    cons: ["Discord only", "No free tier", "Learning curve"],
    badge: "Best Images",
  },
  {
    slug: "gemini",
    name: "Gemini",
    tagline: "Google's powerful multimodal AI",
    description:
      "Gemini by Google combines text, images, and data analysis in one powerful tool. Seamless integration with Google Workspace makes it ideal for business use.",
    website: "gemini.google.com",
    affiliateUrl: "https://gemini.google.com/?ref=besteai",
    price: "Free / $20/mo",
    priceDetails: "Free with Google account. Gemini Advanced for $20/month.",
    categories: ["writing", "research", "automation"],
    rating: 4.5,
    pros: ["Google integration", "Multimodal", "Generous free tier", "Real-time info"],
    cons: ["Less creative than GPT-4", "Google privacy", "Sometimes inconsistent"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "AI for professional marketing copy",
    description:
      "Jasper is built specifically for marketing teams. Write blog posts, ads, emails, and social media content in your brand's voice.",
    website: "jasper.ai",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
    price: "$49/mo",
    priceDetails: "Creator plan $49/month. Teams plan $125/month for 3 users.",
    categories: ["writing", "marketing"],
    rating: 4.3,
    pros: ["Marketing-optimised", "Brand voice", "Template library", "Team features"],
    cons: ["Expensive for solo use", "Less flexible", "Requires good prompts"],
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "Fast marketing copy in seconds",
    description:
      "Copy.ai generates marketing copy, product descriptions, and social media posts at lightning speed. Hundreds of templates get you productive instantly.",
    website: "copy.ai",
    affiliateUrl: "https://copy.ai/?ref=besteai",
    price: "Free / $36/mo",
    priceDetails: "Free plan with 2,000 words/month. Pro plan $36/month.",
    categories: ["writing", "marketing"],
    rating: 4.2,
    pros: ["Many templates", "User-friendly", "Fast output", "Good free tier"],
    cons: ["Less nuanced", "Repetition in long texts", "Limited customisation"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    tagline: "AI search engine with sources",
    description:
      "Perplexity combines AI with real-time web searches. Get accurate answers with source citations — ideal for research and fact-checking.",
    website: "perplexity.ai",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
    price: "Free / $20/mo",
    priceDetails: "Free basic version. Perplexity Pro for $20/month with more searches.",
    categories: ["research", "automation"],
    rating: 4.6,
    pros: ["Real-time sources", "Great free tier", "Accurate answers", "Clean interface"],
    cons: ["Less creative", "Depends on internet", "Pro pricey for heavy use"],
    badge: "Best Research",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Realistic AI voices and audio",
    description:
      "ElevenLabs creates stunningly realistic AI voices for podcasts, videos, and apps. Clone your own voice or choose from hundreds of professional voices.",
    website: "elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io/?ref=besteai",
    price: "Free / $5/mo",
    priceDetails: "Free plan with 10,000 characters/month. Starter $5/month for more.",
    categories: ["audio", "automation"],
    rating: 4.7,
    pros: ["Most realistic voices", "Voice clone feature", "API available", "Multiple languages"],
    cons: ["Free tier limited", "Ethical concerns with voice cloning", "Expensive at high volume"],
    badge: "Best Audio",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "AI-powered productivity and writing inside Notion",
    description:
      "Notion AI brings artificial intelligence directly into your Notion workspace. Draft documents, summarize notes, generate action items, and brainstorm ideas without leaving your workflow.",
    website: "notion.so",
    affiliateUrl: "https://notion.so/?ref=besteai",
    price: "$10/mo",
    priceDetails: "Notion AI add-on costs $10/month per member on top of any Notion plan.",
    categories: ["writing", "automation"],
    rating: 4.5,
    pros: ["Integrated into Notion workspace", "Great for note-taking and docs", "Summarization and action items", "Collaborative"],
    cons: ["Requires Notion subscription", "Not standalone", "Limited compared to dedicated AI tools"],
  },
  {
    slug: "grammarly",
    name: "Grammarly",
    tagline: "AI writing assistant for flawless English",
    description:
      "Grammarly is the leading AI-powered writing assistant. It checks grammar, spelling, clarity, tone, and plagiarism in real-time across browsers, documents, and email clients.",
    website: "grammarly.com",
    affiliateUrl: "https://grammarly.com/?ref=besteai",
    price: "Free / $30/mo",
    priceDetails: "Free plan covers basic grammar. Premium $30/month for advanced suggestions and plagiarism detection.",
    categories: ["writing"],
    rating: 4.6,
    pros: ["Works everywhere (browser, Word, Gmail)", "Real-time suggestions", "Tone detection", "Great free tier"],
    cons: ["Premium is pricey", "Can over-correct style", "Privacy concerns for sensitive docs"],
    badge: "Best Grammar",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    tagline: "AI-powered design for everyone",
    description:
      "Canva AI brings powerful design intelligence to the world's most popular design platform. Generate images, write copy, remove backgrounds, and create stunning visuals with no design experience needed.",
    website: "canva.com",
    affiliateUrl: "https://canva.com/?ref=besteai",
    price: "Free / $15/mo",
    priceDetails: "Free plan available. Canva Pro $15/month unlocks AI features and premium assets.",
    categories: ["design", "images"],
    rating: 4.7,
    pros: ["Beginner-friendly", "Huge template library", "AI image generation included", "Great free tier"],
    cons: ["Less powerful than Midjourney for pure image gen", "Pro needed for best AI features", "Can feel limiting for advanced designers"],
    badge: "Best Design",
  },
  {
    slug: "runway-ml",
    name: "Runway ML",
    tagline: "AI video and image generation for creatives",
    description:
      "Runway ML is a cutting-edge creative AI platform for video generation, image editing, and visual effects. Used by filmmakers and content creators to produce professional-grade AI video.",
    website: "runwayml.com",
    affiliateUrl: "https://runwayml.com/?ref=besteai",
    price: "From $15/mo",
    priceDetails: "Standard plan from $15/month. Pro plan $35/month for more credits and features.",
    categories: ["images", "design"],
    rating: 4.4,
    pros: ["Best AI video generation", "Professional-grade output", "Active development", "Used in Hollywood productions"],
    cons: ["Expensive for heavy use", "Learning curve", "Credits run out fast"],
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "AI meeting transcription and notes",
    description:
      "Otter.ai automatically transcribes meetings, interviews, and lectures in real-time. Get AI-generated summaries, action items, and searchable transcripts for every conversation.",
    website: "otter.ai",
    affiliateUrl: "https://otter.ai/?ref=besteai",
    price: "Free / $17/mo",
    priceDetails: "Free plan includes 300 minutes/month. Pro $17/month for 1,200 minutes and advanced features.",
    categories: ["audio", "automation"],
    rating: 4.3,
    pros: ["Real-time transcription", "Zoom/Meet/Teams integration", "Speaker identification", "Searchable transcripts"],
    cons: ["Free tier limited", "Accuracy varies with accents", "Not ideal for noisy environments"],
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    tagline: "Create AI videos with virtual presenters",
    description:
      "Synthesia lets you create professional AI-generated videos with realistic virtual avatars. No camera or studio needed — just type your script and pick an avatar. Perfect for training videos and product demos.",
    website: "synthesia.io",
    affiliateUrl: "https://synthesia.io/?ref=besteai",
    price: "From $29/mo",
    priceDetails: "Starter plan $29/month for 10 minutes of video. Creator plan $89/month for more.",
    categories: ["automation"],
    rating: 4.4,
    pros: ["No camera needed", "120+ languages", "Professional avatars", "Easy script-to-video workflow"],
    cons: ["Expensive for high volume", "Avatars can look uncanny", "Limited customization on lower tiers"],
  },
  {
    slug: "copy-ai-2",
    name: "Copy.ai",
    tagline: "AI copywriting for marketers and teams",
    description:
      "Copy.ai is an AI-powered copywriting platform built for marketing teams. Generate blog posts, social media content, email sequences, and ad copy at scale using advanced AI workflows.",
    website: "copy.ai",
    affiliateUrl: "https://copy.ai/?ref=besteai",
    price: "Free / $49/mo",
    priceDetails: "Free plan with 2,000 words/month. Pro plan $49/month for unlimited words and workflows.",
    categories: ["writing", "marketing"],
    rating: 4.3,
    pros: ["Marketing-focused templates", "Workflow automation", "Team collaboration", "Good free tier"],
    cons: ["Quality varies", "Can be repetitive", "Pro is pricey for solo users"],
  },
  {
    slug: "deepl",
    name: "DeepL",
    tagline: "The world's most accurate AI translator",
    description:
      "DeepL uses advanced neural networks to deliver the most accurate translations available. Supports 30+ languages with nuanced, natural-sounding output. Trusted by professionals and businesses worldwide.",
    website: "deepl.com",
    affiliateUrl: "https://deepl.com/?ref=besteai",
    price: "Free / $8/mo",
    priceDetails: "Free plan for casual use. DeepL Pro from $8/month for unlimited text and document translation.",
    categories: ["writing"],
    rating: 4.8,
    pros: ["Best translation accuracy", "Natural-sounding output", "Document translation", "API available"],
    cons: ["Fewer languages than Google Translate", "Pro needed for heavy use", "No image translation"],
    badge: "Best Translation",
  },
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    tagline: "Automate workflows with AI-powered Zaps",
    description:
      "Zapier AI brings artificial intelligence to workflow automation. Build AI-powered automations that connect 6,000+ apps, make decisions, and handle complex logic — all without coding.",
    website: "zapier.com",
    affiliateUrl: "https://zapier.com/?ref=besteai",
    price: "Free / $20/mo",
    priceDetails: "Free plan for basic automations. Starter $20/month for AI features and more Zaps.",
    categories: ["automation"],
    rating: 4.2,
    pros: ["6,000+ app integrations", "No-code AI automation", "Reliable and battle-tested", "Good free tier"],
    cons: ["Complex Zaps get expensive", "AI features still maturing", "Learning curve for advanced workflows"],
  },
  {
    slug: "grok",
    name: "Grok",
    tagline: "xAI's witty and unfiltered AI assistant",
    description:
      "Grok is xAI's AI assistant, integrated into X (Twitter). Known for its wit, real-time access to X posts, and willingness to answer edgier questions. Great for research, brainstorming, and staying current.",
    website: "x.ai",
    affiliateUrl: "https://x.ai/?ref=besteai",
    price: "Free / $16/mo",
    priceDetails: "Available free on X. X Premium+ at $16/month unlocks full Grok access.",
    categories: ["research", "writing"],
    rating: 4.3,
    pros: ["Real-time X/Twitter data", "Less censored responses", "Witty personality", "Strong reasoning model (Grok-3)"],
    cons: ["Requires X Premium for full access", "Smaller ecosystem than OpenAI", "Less polished than ChatGPT"],
  },
];

export const categories = [
  { slug: "writing", name: "Writing & Text", icon: "✍️", description: "AI tools for blog posts, copywriting and content creation" },
  { slug: "images", name: "Images & Design", icon: "🎨", description: "Generate professional visuals with AI" },
  { slug: "automation", name: "Automation", icon: "⚡", description: "Automate your workflows with AI" },
  { slug: "research", name: "Research & Analysis", icon: "🔍", description: "AI-powered research and data analysis" },
  { slug: "marketing", name: "Marketing & Sales", icon: "📈", description: "Boost your marketing with AI copywriting" },
  { slug: "audio", name: "Audio & Voice", icon: "🎙️", description: "AI-generated voices and audio content" },
  { slug: "design", name: "Design & Creativity", icon: "🖌️", description: "Creative tools for designers" },
];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categories.includes(categorySlug));
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
