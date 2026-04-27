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
];

const bestPages = [
  "ai-audio-tools",
  "ai-chatbots",
  "ai-coding-tools",
  "ai-image-generators",
  "ai-tools-for-business",
  "ai-tools-for-marketing",
  "ai-tools-for-students",
  "ai-video-tools",
  "ai-writing-tools",
  "cheap-ai-tools",
  "free-ai-tools",
  "ai-tools-for-teachers",
  "ai-summarizers",
  "ai-tools-europe",
  "ai-tools-2026",
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
