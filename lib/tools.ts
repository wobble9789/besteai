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
