import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">SpotlightTool</h3>
            <p className="text-sm">Find, compare &amp; choose the best tools. Independent reviews and honest pricing.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categorie/writing" className="hover:text-white transition-colors">Writing</Link></li>
              <li><Link href="/categorie/images" className="hover:text-white transition-colors">Images</Link></li>
              <li><Link href="/categorie/automation" className="hover:text-white transition-colors">Automation</Link></li>
              <li><Link href="/categorie/research" className="hover:text-white transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Popular Tools</h4>
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
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2026 SpotlightTool — All rights reserved</p>
          <p className="text-xs">
            * Some links are affiliate links. We receive a small commission on purchase, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
