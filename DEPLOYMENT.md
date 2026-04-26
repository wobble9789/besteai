# BesteAI.nl — Deployment Guide

## Vercel Deployment (aanbevolen)

### Stap 1: Vercel account aanmaken
1. Ga naar [vercel.com](https://vercel.com) en maak een gratis account aan
2. Verbind je GitHub account

### Stap 2: Project importeren
1. Klik op "Add New Project"
2. Importeer de `besteai` repo van GitHub
3. Vercel detecteert Next.js automatisch
4. Klik "Deploy"

### Stap 3: Custom domain instellen
1. Ga naar Project Settings → Domains
2. Voeg `besteai.nl` toe
3. Update je DNS-instellingen bij je domeinregistrar:
   - Type: `A`, Name: `@`, Value: `76.76.21.21`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

### Stap 4: GitHub Actions webhook (voor automatische deploys)
1. Ga naar je Vercel project → Settings → Git → Deploy Hooks
2. Maak een nieuwe Deploy Hook aan voor de `main` branch
3. Kopieer de webhook URL
4. Ga naar je GitHub repo → Settings → Secrets and variables → Actions
5. Voeg een nieuw secret toe: `VERCEL_DEPLOY_HOOK` = de gekopieerde URL

## Environment Variables
Voeg toe in Vercel Project Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://besteai.nl
```

## Lokale ontwikkeling
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build & Deploy handmatig
```bash
npm run build
npm start
```

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Taal:** TypeScript
- **Hosting:** Vercel (aanbevolen)
- **CI/CD:** GitHub Actions

## Affiliate links updaten
Bewerk `/lib/tools.ts` en update de `affiliateUrl` velden met jouw echte affiliate links.
