import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import { categories } from "@/lib/tools";
import { blogPosts } from "@/lib/blog";

const comparePages = [
  "chatgpt-vs-claude",
  "midjourney-vs-dall-e",
  "grammarly-vs-writesonic",
  "github-copilot-vs-cursor",
  "elevenlabs-vs-murf",
  "chatgpt-vs-gemini",
  "notion-vs-notion-ai",
  "canva-vs-adobe-firefly",
  "jasper-vs-copy-ai",
  "chatgpt-vs-perplexity",
  "notion-ai-vs-chatgpt",
  "runway-vs-pika",
  "grammarly-vs-quillbot",
  "chatgpt-vs-copilot",
  "stable-diffusion-vs-midjourney",
  "jasper-vs-writesonic",
  "suno-vs-udio",
  "surfer-seo-vs-semrush",
  "rytr-vs-copy-ai",
  "jasper-vs-chatgpt",
  "framer-vs-webflow",
  "looka-vs-canva",
  "durable-vs-wix",
  "elicit-vs-consensus",
  "otter-vs-fireflies",
  "chatgpt-vs-wolfram-alpha",
  "zapier-vs-make",
  "notion-vs-clickup",
  "bardeen-vs-zapier",
  "buffer-vs-hootsuite",
  "taplio-vs-tweet-hunter",
  "predis-vs-flick",
  "tidio-vs-intercom",
  "zendesk-vs-freshdesk",
  "intercom-vs-drift",
  // sprint 16
  "power-bi-vs-tableau",
  "julius-vs-chatgpt-data",
  "rows-vs-numerous",
];

const bestPages = [
  "ai-audio-tools",
  "ai-automation-tools",
  "ai-chatbots",
  "ai-coding-tools",
  "ai-customer-service-tools",
  "ai-image-generators",
  "ai-logo-generators",
  "ai-productivity-tools",
  "ai-research-tools",
  "ai-seo-tools",
  "ai-social-media-tools",
  "ai-summarizers",
  "ai-tools-2026",
  "ai-tools-europe",
  "ai-tools-for-bloggers",
  "ai-tools-for-business",
  "ai-tools-for-lawyers",
  "ai-tools-for-marketing",
  "ai-tools-for-students",
  "ai-tools-for-teachers",
  "ai-tools-for-youtube",
  "ai-video-editors",
  "ai-video-tools",
  "ai-website-builders",
  "ai-writing-tools",
  "cheap-ai-tools",
  "free-ai-tools",
  // sprint 16
  "ai-data-analysis-tools",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://besteai.nl";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/categorie/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const compareEntries = comparePages.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const bestEntries = bestPages.map((slug) => ({
    url: `${baseUrl}/best/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/best`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...toolPages,
    ...bestEntries,
    ...compareEntries,
    ...blogPages,
    ...categoryPages,
  ];
}
