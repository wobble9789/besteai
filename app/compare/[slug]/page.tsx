import type { Metadata } from "next";
import Link from "next/link";
import { getToolBySlug } from "@/lib/tools";
import { notFound } from "next/navigation";

interface ComparisonData {
  toolA: string;
  toolB: string;
  title: string;
  intro: string;
  verdict: string;
  content: string;
}

const comparisons: Record<string, ComparisonData> = {
  "chatgpt-vs-claude": {
    toolA: "chatgpt",
    toolB: "claude",
    title: "ChatGPT vs Claude 2025: Which AI Assistant Wins?",
    intro:
      "ChatGPT and Claude are the two most powerful AI assistants available today. Both offer free tiers and $20/month premium plans — but they excel in different areas. Here's everything you need to know.",
    verdict:
      "Choose ChatGPT for coding, plugins, and versatility. Choose Claude for long-form writing, nuanced analysis, and handling huge documents. Both are excellent — your use case decides.",
    content: `## ChatGPT vs Claude: A Deep Dive

ChatGPT by OpenAI launched in November 2022 and became the fastest-growing consumer product in history, reaching 100 million users in just 2 months. Claude by Anthropic, founded by former OpenAI researchers, focuses on safe, nuanced AI with a distinctive writing style.

### Writing Quality

Claude consistently outperforms ChatGPT on long-form writing tasks. Its prose is more natural, less robotic, and it maintains consistent tone across thousands of words. ChatGPT is excellent for structured writing like emails, blog outlines, and technical documentation, but can feel formulaic for creative work.

**Winner: Claude** for creative writing; **ChatGPT** for structured formats.

### Coding Assistance

ChatGPT with GPT-4 remains the king of coding. Its integration with GitHub Copilot, Code Interpreter, and a massive developer community gives it an edge. Claude is catching up fast — Claude 3.5 Sonnet is impressively capable — but ChatGPT's ecosystem wins.

**Winner: ChatGPT**

### Context Window

Claude's 200,000 token context window dwarfs ChatGPT's 128,000 tokens on GPT-4. For analyzing entire codebases, legal documents, or books, Claude is unmatched.

**Winner: Claude**

### Speed and Availability

ChatGPT has faster response times and more consistent availability. Claude occasionally hits usage limits on the free tier during peak hours.

**Winner: ChatGPT**

### Price

Both offer free plans and $20/month Pro/Plus plans. For API access, Claude (Anthropic API) is often cheaper per token than OpenAI for comparable quality.

**Winner: Tie**

## Who Should Use ChatGPT?

- Developers building apps with AI
- Users who need plugin/tool integrations
- Anyone wanting GPT-4o's multimodal features (vision, voice)
- Power users who want the widest ecosystem

## Who Should Use Claude?

- Writers who need high-quality, natural prose
- Analysts working with long documents
- Teams prioritizing AI safety and nuance
- Anyone frustrated by ChatGPT's occasional over-filtering`,
  },
  "midjourney-vs-dall-e": {
    toolA: "midjourney",
    toolB: "chatgpt",
    title: "Midjourney vs DALL-E 2025: Best AI Image Generator?",
    intro:
      "Midjourney and DALL-E 3 (via ChatGPT) are the top AI image generators in 2025. Midjourney leads on artistic quality while DALL-E 3 wins on accessibility and prompt accuracy. Here's how they compare.",
    verdict:
      "Midjourney produces superior artistic images and is the choice for professionals. DALL-E 3 via ChatGPT is easier to use and better at following exact prompts — ideal for non-artists.",
    content: `## Midjourney vs DALL-E 3: The Full Comparison

### Image Quality

Midjourney V6 produces stunning, artistic images with incredible detail and coherence. It's the tool Hollywood concept artists and game studios use. DALL-E 3 produces clean, accurate images but lacks Midjourney's artistic depth.

**Winner: Midjourney** for artistic quality; **DALL-E 3** for accuracy to prompt.

### Ease of Use

DALL-E 3 wins easily here. It's built directly into ChatGPT — just describe what you want in plain language. Midjourney requires using Discord, learning prompt syntax, and understanding aspect ratios and style parameters.

**Winner: DALL-E 3**

### Pricing

Midjourney starts at $10/month with no free tier (free trial was removed). DALL-E 3 is included with ChatGPT Plus ($20/month) or available via API pay-as-you-go.

**Winner: DALL-E 3** for value (bundled with ChatGPT Plus).

### Commercial Rights

Both allow commercial use on paid plans. Midjourney's Pro plan ($60/month) includes stealth mode for private generation.

### Photorealism

For photorealistic images, Midjourney V6 is exceptional. DALL-E 3 also produces good realistic images but Midjourney's detail is hard to beat.

**Winner: Midjourney**

## Use Cases

**Choose Midjourney if:** You need professional-grade artwork, concept art, marketing visuals, or you're a creative professional.

**Choose DALL-E 3 if:** You want quick, accurate images from simple descriptions, you're already paying for ChatGPT Plus, or you're a beginner.`,
  },
  "grammarly-vs-writesonic": {
    toolA: "grammarly",
    toolB: "writesonic",
    title: "Grammarly vs Writesonic 2025: Writing Tool Comparison",
    intro:
      "Grammarly and Writesonic serve different writing needs. Grammarly is an AI editor that improves your writing; Writesonic is an AI writer that creates content from scratch. Here's how they compare.",
    verdict:
      "Use Grammarly if you write content yourself and want to polish it. Use Writesonic if you need to generate content at scale — blog posts, ads, and landing pages — quickly.",
    content: `## Grammarly vs Writesonic: Key Differences

These tools are complementary more than competitors. Grammarly fixes your writing; Writesonic writes for you. But for budget-conscious users, understanding which to prioritize matters.

### Core Functionality

**Grammarly** is an AI writing assistant that checks grammar, spelling, clarity, tone, and plagiarism in real time. It works as a browser extension, in Microsoft Word, Google Docs, and email clients. It doesn't generate content from scratch.

**Writesonic** is a content generation platform. It creates blog posts, product descriptions, ads, and social media content using AI. It's designed for marketers who need volume.

### Quality of Output

Grammarly's suggestions are highly accurate and context-aware. Its Premium tier catches nuanced style issues. Writesonic's content quality is good for first drafts but often needs human editing for nuance and brand voice.

**Winner: Grammarly** for editing quality; **Writesonic** for generation speed.

### Integrations

Grammarly integrates everywhere — Chrome, Word, Gmail, Slack, LinkedIn. Writesonic offers a Surfer SEO integration, WordPress plugin, and API access.

**Winner: Grammarly** for breadth of integrations.

### Pricing

- Grammarly Free: basic grammar checking
- Grammarly Premium: $30/month (or ~$12/month annually)
- Writesonic Free: limited words
- Writesonic Small Team: ~$16/month for 200k words

**Winner: Writesonic** for content volume per dollar.

### Who Wins?

For professionals who write their own content, Grammarly is essential. For marketers running content operations at scale, Writesonic provides far more output per dollar. Many power users use both.`,
  },
  "github-copilot-vs-cursor": {
    toolA: "github-copilot",
    toolB: "cursor-ai",
    title: "GitHub Copilot vs Cursor AI 2025: Best Coding Assistant?",
    intro:
      "GitHub Copilot and Cursor AI are the two most popular AI coding tools in 2025. Copilot integrates into any editor; Cursor is a VS Code fork with deeper AI integration. Here's a complete breakdown.",
    verdict:
      "GitHub Copilot is the safe, stable choice for teams already in the GitHub ecosystem. Cursor AI is the power user's pick — deeper AI integration, multi-file editing, and a chat interface that understands your entire codebase.",
    content: `## GitHub Copilot vs Cursor AI: Developer Showdown

### Code Completion

Both use GPT-4 and Claude under the hood for code suggestions. Copilot's completion feels more polished and consistent — it's been refined over 3 years. Cursor's completions are equally good but the real advantage is its multi-line edits and diff-style previews.

**Winner: Tie** (Copilot slightly more consistent; Cursor more powerful for multi-line)

### Codebase Understanding

This is where Cursor wins decisively. Cursor can index your entire codebase and answer questions about it, find bugs across files, and apply changes spanning multiple files in one operation. Copilot has a chat feature but lacks deep codebase indexing on most plans.

**Winner: Cursor AI**

### Editor Support

Copilot works in VS Code, JetBrains IDEs, Neovim, and more. Cursor is a VS Code fork — you get all VS Code extensions but it's a separate application.

**Winner: GitHub Copilot** for multi-editor support.

### Pricing

- GitHub Copilot Individual: $10/month (free for verified students)
- GitHub Copilot Business: $19/month per user
- Cursor Free: limited AI completions
- Cursor Pro: $20/month with unlimited usage

**Winner: GitHub Copilot** at $10/month for individuals.

### Team Features

GitHub Copilot Business includes organization-wide policy controls, audit logs, and enterprise support. Cursor is primarily an individual developer tool.

**Winner: GitHub Copilot** for teams and enterprises.

## Bottom Line

Cursor is the best coding AI for individual developers who want maximum AI capability. GitHub Copilot is better for teams, multi-editor shops, and developers who don't want to switch applications.`,
  },
  "elevenlabs-vs-murf": {
    toolA: "elevenlabs",
    toolB: "murf-ai",
    title: "ElevenLabs vs Murf AI 2025: Best AI Voice Generator?",
    intro:
      "ElevenLabs and Murf AI are the leading AI voice generators in 2025. ElevenLabs leads in realism and voice cloning; Murf AI excels in ease of use and video integration. Here's the full comparison.",
    verdict:
      "ElevenLabs wins on raw voice quality and cloning capability. Murf AI is better for non-technical users who need to sync voiceovers to video presentations. For pure audio realism, ElevenLabs is unmatched.",
    content: `## ElevenLabs vs Murf AI: Voice Quality Comparison

### Voice Realism

ElevenLabs produces the most realistic AI voices available. Its voices have natural breathing, emotional inflection, and human-like imperfections that make them nearly indistinguishable from real recordings. Murf AI's voices are excellent — clean and professional — but sound slightly more synthetic.

**Winner: ElevenLabs**

### Voice Cloning

ElevenLabs offers professional voice cloning from as little as 1 minute of audio. You can clone your own voice or any voice (with permission). Murf AI offers voice cloning on higher-tier plans but the quality doesn't match ElevenLabs.

**Winner: ElevenLabs**

### Video Integration

Murf AI has a built-in video editor that lets you sync AI voiceovers to video timelines. You can upload slides or video and align audio precisely. ElevenLabs is audio-only — you'd need a separate video tool.

**Winner: Murf AI**

### Language Support

- ElevenLabs: 29 languages with high quality
- Murf AI: 20+ languages

**Winner: ElevenLabs**

### Pricing

- ElevenLabs Free: 10,000 characters/month
- ElevenLabs Starter: $5/month
- ElevenLabs Creator: $22/month with commercial rights
- Murf Free: 10 minutes/month
- Murf Creator: $19/month
- Murf Business: $39/month

**Winner: ElevenLabs** for entry-level; **Murf** for business video use.

## Which Should You Choose?

Choose **ElevenLabs** for: podcasts, YouTube, audiobooks, voice cloning, API integration, maximum realism.

Choose **Murf AI** for: corporate training videos, presentation voiceovers, e-learning, teams needing a complete audio-video workflow.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = comparisons[slug];
  if (!data) return {};
  return {
    title: `${data.title} | BestAI.net`,
    description: data.intro.slice(0, 160),
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400">
      {"★".repeat(Math.round(rating))}{"☆".repeat(5 - Math.round(rating))}
    </span>
  );
}

export default async function CompareSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = comparisons[slug];
  if (!data) notFound();

  const toolA = getToolBySlug(data.toolA);
  const toolB = getToolBySlug(data.toolB);
  if (!toolA || !toolB) notFound();

  // Simple markdown-to-HTML (headings + paragraphs only)
  const renderContent = (md: string) => {
    return md
      .trim()
      .split(/\n\n+/)
      .map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">
              {block.slice(3)}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-2">
              {block.slice(4)}
            </h3>
          );
        }
        if (block.startsWith("**Winner:")) {
          return (
            <p key={i} className="text-sm font-semibold text-indigo-700 bg-indigo-50 rounded-lg px-3 py-2 my-2">
              {block.replace(/\*\*/g, "")}
            </p>
          );
        }
        return (
          <p key={i} className="text-gray-600 leading-relaxed">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      });
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        {" / "}
        <Link href="/compare" className="hover:text-indigo-600">Compare</Link>
        {" / "}
        <span className="text-gray-600">{data.title}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{data.title}</h1>
      <p className="text-lg text-gray-500 mb-10">{data.intro}</p>

      {/* Side-by-side comparison table */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {[toolA, toolB].map((tool) => (
          <div key={tool.slug} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-1">{tool.name}</h2>
            <p className="text-sm text-gray-400 mb-2">{tool.tagline}</p>
            <div className="flex items-center gap-2 mb-3">
              <StarRating rating={tool.rating} />
              <span className="text-sm text-gray-500">{tool.rating}/5</span>
            </div>
            <div className="text-sm space-y-1 mb-4">
              <div><span className="font-medium text-gray-700">Price:</span> <span className="text-gray-500">{tool.price}</span></div>
              <div>
                <span className="font-medium text-gray-700">Pros:</span>
                <ul className="list-disc list-inside text-gray-500 mt-1">
                  {tool.pros.slice(0, 3).map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div>
                <span className="font-medium text-gray-700">Cons:</span>
                <ul className="list-disc list-inside text-gray-500 mt-1">
                  {tool.cons.slice(0, 2).map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>
            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block text-center bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Try {tool.name} →
            </a>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
        <h2 className="text-lg font-bold text-amber-800 mb-2">⚡ Our Verdict</h2>
        <p className="text-amber-700">{data.verdict}</p>
      </div>

      {/* Article content */}
      <article className="prose-sm max-w-none space-y-3">
        {renderContent(data.content)}
      </article>

      {/* Bottom CTAs */}
      <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-100">
        {[toolA, toolB].map((tool) => (
          <a
            key={tool.slug}
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
          >
            Try {tool.name} →
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        * This page may contain affiliate links. We earn a small commission at no extra cost to you.
      </p>

      <div className="mt-10 text-center">
        <Link href="/compare" className="text-indigo-600 hover:underline text-sm">
          ← View all comparisons
        </Link>
      </div>
    </main>
  );
}
