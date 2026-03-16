# ASD Landing Page – Developer Documentation

## Was ist das?
Reine Frontend-Landing-Page für ASD – AI Shift Drift. Kein Backend, keine APIs, keine User-Daten. Übergeordnetes Ökosystem-Dach für Wake (AEO/GEO), Slipstream, Quantum.

## Dateistruktur
asd-landing/
├── app/
│   ├── page.tsx          # Hauptseite – alle Sections
│   ├── layout.tsx        # Root Layout + JellyfishCanvas (KRITISCH: hier, nicht in page.tsx)
│   └── globals.css       # Design-Tokens als CSS-Variablen + body background
├── components/
│   ├── JellyfishCanvas.tsx  # Canvas Animation, position: fixed, z-index: 0
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── MoreProblemsSection.tsx
│   ├── SolutionSection.tsx
│   ├── ProductsSection.tsx
│   ├── VisionSection.tsx
│   └── TrustSection.tsx
├── CLAUDE.md
├── DEVELOPER.md
├── SECURITY.md
└── docs/solutions/
    ├── phase-0/
    ├── phase-1/
    ├── phase-2/
    ├── phase-3/
    └── phase-4/

## Lokale Entwicklung
npm install
npm run dev
# → http://localhost:3000

## Deployment
npx vercel --prod
# Projektname: ai-shift-drift
# Live-URL: https://ai-shift-drift.vercel.app

## ENV-Variablen
| Name | Wozu | Wo setzen |
|---|---|---|
| (keine) | Reine Static Page | – |

## Architektur (Kurzform)
Browser → Vercel CDN → Next.js Static Export → Canvas API (Quallen) + React Components

KRITISCH: JellyfishCanvas in layout.tsx (position: fixed, z-index: 0) – läuft unter allen Sections.
Alle Sections: background transparent. Keine Section darf background: '#080808' haben.

## Canvas Performance (Task 4.2c)
3 Canvas-Elemente laufen parallel:
- **NebulaCanvas** (z-index: -1): Nebula-Wolken + Neon-Partikel, 30fps, 60/20 Partikel
- **JellyfishCanvas** (z-index: 0): Pre-rendered Sprites, 10fps, 13/5 Jellyfish
- **NeonParticleText** (inline): Text-Partikel-Effekt, 30fps, batched shadowBlur

Performance-Pattern:
- shadowBlur IMMER by-color-group batchen (nie pro Partikel)
- Visibility API auf allen Canvases (pausiert bei Tab-Wechsel)
- `will-change: transform` auf allen Canvas-Elementen
- `section { contain: layout style paint }` in globals.css

## Bekannte Limitierungen V0
- Keine Analytics eingebaut (bewusst – DSGVO-First)
- Keine i18n (nur DE – Zielmarkt KMU Deutschland)
- Quallen-Animation: Mobile vereinfacht (3 Quallen, keine Tentakel)

## Nach jedem Task aktualisieren
Neue Dateien, Parameter, Architekturänderungen → dieses File updaten.
Lessons Learned → docs/solutions/[phase]/[task-name].md
