import { Tool } from "@/types";
import { tools } from "./tools";

export interface Comparison {
  slug: string;
  title: string;
  description: string;
  toolSlugs: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  winner?: string; // slug of recommended tool
  winnerReason?: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    description:
      "De twee populairste AI-assistenten vergeleken. Welke past het beste bij jouw gebruik?",
    toolSlugs: ["chatgpt", "claude"],
    category: "AI-assistent",
    publishedAt: "2024-05-01",
    updatedAt: "2024-05-01",
    winner: "claude",
    winnerReason:
      "Claude wint voor professionals dankzij het grote contextvenster en nuanc\u00e9 schrijven.",
  },
  {
    slug: "chatgpt-vs-perplexity",
    title: "ChatGPT vs Perplexity",
    description:
      "Zoeken met AI: generatieve chatbot versus AI-zoekmachine. Wat kies jij?",
    toolSlugs: ["chatgpt", "perplexity"],
    category: "AI-assistent",
    publishedAt: "2024-05-01",
    updatedAt: "2024-05-01",
    winner: "perplexity",
    winnerReason:
      "Perplexity wint als je actuele informatie nodig hebt met bronvermelding.",
  },
  {
    slug: "jasper-vs-chatgpt",
    title: "Jasper vs ChatGPT",
    description:
      "Marketing AI-schrijftool versus generalist AI. Wat levert meer op voor content creators?",
    toolSlugs: ["jasper", "chatgpt"],
    category: "Tekstgeneratie",
    publishedAt: "2024-05-01",
    updatedAt: "2024-05-01",
    winner: "chatgpt",
    winnerReason:
      "ChatGPT biedt meer flexibiliteit en heeft een gratis tier. Jasper is beter voor teams met vaste workflows.",
  },
  {
    slug: "github-copilot-vs-chatgpt",
    title: "GitHub Copilot vs ChatGPT",
    description:
      "Codeerhulp in je IDE versus chatbot voor code. Welke tool maakt jou een betere developer?",
    toolSlugs: ["github-copilot", "chatgpt"],
    category: "Coderen",
    publishedAt: "2024-05-01",
    updatedAt: "2024-05-01",
    winner: "github-copilot",
    winnerReason:
      "GitHub Copilot wint dankzij de directe IDE-integratie en inline suggesties.",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getToolsForComparison(comparison: Comparison): Tool[] {
  return comparison.toolSlugs
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is Tool => !!t);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
