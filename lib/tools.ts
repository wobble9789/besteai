export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  affiliateUrl: string;
  prijs: string;
  prijsDetails: string;
  categorieen: string[];
  beoordeling: number;
  pros: string[];
  cons: string[];
  badge?: string;
}

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "De populairste AI-chatbot ter wereld",
    description:
      "ChatGPT van OpenAI is de meest gebruikte AI-assistent. Geschikt voor schrijven, coderen, analyseren en veel meer. Met GPT-4 krijg je krachtige resultaten voor vrijwel elke taak.",
    website: "openai.com",
    affiliateUrl: "https://chat.openai.com/?ref=besteai",
    prijs: "Gratis / $20/mo",
    prijsDetails: "Gratis basisversie beschikbaar. ChatGPT Plus voor $20/maand.",
    categorieen: ["schrijven", "automatisering", "onderzoek"],
    beoordeling: 4.8,
    pros: ["Meest veelzijdig", "Grote community", "Uitstekende codeerondersteuning", "Plugin-ecosysteem"],
    cons: ["Gratis versie beperkt", "Soms trage reacties", "Privacy-zorgen"],
    badge: "Meest Populair",
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Veilige en nauwkeurige AI van Anthropic",
    description:
      "Claude van Anthropic staat bekend om zijn veilige, genuanceerde antwoorden en uitstekende schrijfkwaliteit. Ideaal voor lange documenten en complexe analyses.",
    website: "anthropic.com",
    affiliateUrl: "https://claude.ai/?ref=besteai",
    prijs: "Gratis / $20/mo",
    prijsDetails: "Gratis basisversie. Claude Pro voor $20/maand met meer capaciteit.",
    categorieen: ["schrijven", "onderzoek", "automatisering"],
    beoordeling: 4.7,
    pros: ["Lange contextvenster", "Hoge schrijfkwaliteit", "Veiligheidsgericht", "Nuanceerde antwoorden"],
    cons: ["Minder plugins", "Geen afbeeldingen genereren", "Soms te voorzichtig"],
    badge: "Beste Kwaliteit",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    tagline: "Professionele AI-beeldgeneratie",
    description:
      "Midjourney is de gouden standaard voor AI-gegenereerde afbeeldingen. Maak verbluffende illustraties, concept art en marketing visuals met simpele tekstopdrachten.",
    website: "midjourney.com",
    affiliateUrl: "https://midjourney.com/?ref=besteai",
    prijs: "Vanaf $10/mo",
    prijsDetails: "Basic plan $10/maand. Standard $30/maand voor meer gebruik.",
    categorieen: ["afbeeldingen", "design"],
    beoordeling: 4.9,
    pros: ["Beste beeldkwaliteit", "Artistieke stijlen", "Actieve community", "V6 model indrukwekkend"],
    cons: ["Alleen via Discord", "Geen gratis tier", "Leercurve"],
    badge: "Beste Afbeeldingen",
  },
  {
    slug: "gemini",
    name: "Gemini",
    tagline: "Google's krachtige multimodale AI",
    description:
      "Gemini van Google combineert tekst, afbeeldingen en data-analyse in één krachtige tool. Naadloze integratie met Google Workspace maakt het ideaal voor zakelijk gebruik.",
    website: "gemini.google.com",
    affiliateUrl: "https://gemini.google.com/?ref=besteai",
    prijs: "Gratis / $20/mo",
    prijsDetails: "Gratis met Google account. Gemini Advanced voor $20/maand.",
    categorieen: ["schrijven", "onderzoek", "automatisering"],
    beoordeling: 4.5,
    pros: ["Google-integratie", "Multimodaal", "Gratis tier genereus", "Real-time info"],
    cons: ["Minder creatief dan GPT-4", "Privacy bij Google", "Soms inconsistent"],
  },
  {
    slug: "jasper",
    name: "Jasper",
    tagline: "AI voor professionele marketing copy",
    description:
      "Jasper is speciaal gebouwd voor marketingteams. Schrijf blogposts, advertenties, e-mails en social media content in de stijl van jouw merk.",
    website: "jasper.ai",
    affiliateUrl: "https://jasper.ai/?ref=besteai",
    prijs: "$49/mo",
    prijsDetails: "Creator plan $49/maand. Teams plan $125/maand voor 3 gebruikers.",
    categorieen: ["schrijven", "marketing"],
    beoordeling: 4.3,
    pros: ["Marketing-geoptimaliseerd", "Brand voice", "Templates bibliotheek", "Team functies"],
    cons: ["Duur voor solo gebruik", "Minder flexibel", "Vereist goede prompts"],
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "Snelle marketing copy in seconden",
    description:
      "Copy.ai genereert razendsnel marketing copy, productbeschrijvingen en social media posts. Met honderden templates ben je direct productief.",
    website: "copy.ai",
    affiliateUrl: "https://copy.ai/?ref=besteai",
    prijs: "Gratis / $36/mo",
    prijsDetails: "Gratis plan met 2.000 woorden/maand. Pro plan $36/maand.",
    categorieen: ["schrijven", "marketing"],
    beoordeling: 4.2,
    pros: ["Veel templates", "Gebruiksvriendelijk", "Snelle output", "Goede gratis tier"],
    cons: ["Minder genuanceerd", "Herhaling in lange teksten", "Beperkte aanpassing"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    tagline: "AI-zoekmachine met bronnen",
    description:
      "Perplexity combineert AI met real-time webzoekopdrachten. Krijg nauwkeurige antwoorden met bronvermeldingen — ideaal voor onderzoek en feitenchecks.",
    website: "perplexity.ai",
    affiliateUrl: "https://perplexity.ai/?ref=besteai",
    prijs: "Gratis / $20/mo",
    prijsDetails: "Gratis basisversie. Perplexity Pro voor $20/maand met meer zoekopdrachten.",
    categorieen: ["onderzoek", "automatisering"],
    beoordeling: 4.6,
    pros: ["Real-time bronnen", "Gratis tier geweldig", "Accurate antwoorden", "Overzichtelijk"],
    cons: ["Minder creatief", "Afhankelijk van internet", "Pro duur voor gebruik"],
    badge: "Beste Onderzoek",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "Realistische AI-stemmen en audio",
    description:
      "ElevenLabs maakt verbluffend realistische AI-stemmen voor podcasts, video's en apps. Kloon je eigen stem of kies uit honderden professionele stemmen.",
    website: "elevenlabs.io",
    affiliateUrl: "https://elevenlabs.io/?ref=besteai",
    prijs: "Gratis / $5/mo",
    prijsDetails: "Gratis plan met 10.000 tekens/maand. Starter $5/maand voor meer.",
    categorieen: ["audio", "automatisering"],
    beoordeling: 4.7,
    pros: ["Meest realistische stemmen", "Stemkloon functie", "API beschikbaar", "Meerdere talen"],
    cons: ["Gratis tier beperkt", "Ethische zorgen stemklonen", "Duur bij veel gebruik"],
    badge: "Beste Audio",
  },
];

export const categories = [
  { slug: "schrijven", naam: "Schrijven & Tekst", icon: "✍️", beschrijving: "AI tools voor blogposts, copywriting en content creatie" },
  { slug: "afbeeldingen", naam: "Afbeeldingen & Design", icon: "🎨", beschrijving: "Genereer professionele visuals met AI" },
  { slug: "automatisering", naam: "Automatisering", icon: "⚡", beschrijving: "Automatiseer je werkprocessen met AI" },
  { slug: "onderzoek", naam: "Onderzoek & Analyse", icon: "🔍", beschrijving: "AI-gedreven onderzoek en data-analyse" },
  { slug: "marketing", naam: "Marketing & Sales", icon: "📈", beschrijving: "Boost je marketing met AI copywriting" },
  { slug: "audio", naam: "Audio & Stem", icon: "🎙️", beschrijving: "AI-gegenereerde stemmen en audio content" },
  { slug: "design", naam: "Design & Creativiteit", icon: "🖌️", beschrijving: "Creatieve tools voor designers" },
];

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categorieen.includes(categorySlug));
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
