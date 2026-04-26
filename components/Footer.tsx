import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">BesteAI.nl</h3>
            <p className="text-sm">Vergelijk de beste AI tools van 2025. Onafhankelijke reviews en eerlijke prijzen.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Categorieën</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categorie/schrijven" className="hover:text-white transition-colors">Schrijven</Link></li>
              <li><Link href="/categorie/afbeeldingen" className="hover:text-white transition-colors">Afbeeldingen</Link></li>
              <li><Link href="/categorie/automatisering" className="hover:text-white transition-colors">Automatisering</Link></li>
              <li><Link href="/categorie/onderzoek" className="hover:text-white transition-colors">Onderzoek</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Populaire Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tools/chatgpt" className="hover:text-white transition-colors">ChatGPT</Link></li>
              <li><Link href="/tools/claude" className="hover:text-white transition-colors">Claude</Link></li>
              <li><Link href="/tools/midjourney" className="hover:text-white transition-colors">Midjourney</Link></li>
              <li><Link href="/tools/gemini" className="hover:text-white transition-colors">Gemini</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
              <li><Link href="/privacybeleid" className="hover:text-white transition-colors">Privacybeleid</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2025 BesteAI.nl — Alle rechten voorbehouden</p>
          <p className="text-xs">
            * Sommige links zijn affiliate links. We ontvangen een kleine commissie bij aankoop, zonder extra kosten voor jou.
          </p>
        </div>
      </div>
    </footer>
  );
}
