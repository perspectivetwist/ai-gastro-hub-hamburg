## Was ist dieses Projekt?
ASD – AI Shift Drift Landing Page. Übergeordnetes Ökosystem für Wake (AEO/GEO), Slipstream (Agent Ready), Quantum (Security). Keine APIs, reine Frontend-Landing-Page.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Canvas API (Quallen-Animation, kein externes Package)
- Vercel Hosting
- GitHub: perspectivetwist/asd-landing

## Projektstruktur
asd-landing/
├── app/
│   ├── page.tsx          # Hauptseite – alle Sections
│   ├── layout.tsx        # Root Layout + Meta
│   └── globals.css       # Global Styles + CSS-Variablen
├── components/
│   ├── JellyfishCanvas.tsx  # Quallen-Animation
│   ├── HeroSection.tsx
│   ├── ProblemSection.tsx
│   ├── ForcesSection.tsx    # Wake + Slipstream + Quantum Cards
│   ├── VisionSection.tsx
│   └── TrustSection.tsx
├── CLAUDE.md
├── DEVELOPER.md
└── docs/solutions/

## Design-Tokens (nie abweichen)
- Background: #000008
- Wake Cyan: #00FFE0
- Slipstream Gelb: #FFE600
- Quantum Lila: #BF00FF
- ASD Pink: #FF006E
- Text: #FFFFFF
- Text Muted: #888888

## QUALLEN-ARCHITEKTUR – KRITISCH, NIE ÄNDERN
Die Quallen-Animation ist kein Hero-Effekt. Sie ist das Universum in dem die gesamte Page lebt.
1. JellyfishCanvas in layout.tsx einbinden, NICHT in page.tsx:
   `<JellyfishCanvas />` direkt im <body>, BEFORE {children}
   → position: fixed, inset: 0, z-index: 0, pointerEvents: none
2. JEDE Section muss transparenten Hintergrund haben:
   ✅ background: transparent  (KORREKT)
   ❌ background: '#080808'    (FALSCH – tötet Quallen)
   ❌ background: '#0a000a'    (FALSCH – tötet Quallen)
   ❌ bg-black, bg-gray-900    (FALSCH – tötet Quallen)
3. Cards / Boxen dürfen halbtransparenten Hintergrund haben:
   ✅ background: 'rgba(255,255,255,0.04)'   (Quallen sichtbar)
   ✅ background: 'rgba(0,0,0,0.4)'          (Quallen sichtbar)
   ❌ background: '#080808'                  (Quallen verdeckt)
4. Page-Hintergrund NUR in globals.css via body:
   body { background: linear-gradient(180deg, #000008 0%, #05001a 50%, #000510 100%) }
   Nirgendwo sonst einen Seiten-Hintergrund setzen.
5. z-index Hierarchie:
   z-index: 0  → JellyfishCanvas (Hintergrund)
   z-index: 1  → Alle Sections + Content (Vordergrund)
   z-index: 10 → Modals, Overlays falls nötig

## Produkt-Links (alle live)
- AEO: https://aeo-transformer.vercel.app
- GEO: https://geo-transformer.vercel.app
- Slipstream: https://agentready-transformer.vercel.app
- Quantum: https://quantum-scanner.vercel.app

## AUTONOMIE-REGELN
- Alle Bash-Befehle ohne Rückfrage ausführen
- Alle Dateien lesen/erstellen/überschreiben ohne Rückfrage
- npm/npx Befehle ohne Rückfrage
- Deployments ohne Rückfrage
- Bei Fehlern: selbst debuggen, 3 Versuche, dann User informieren

## KRITISCHE REGELN
1. Notion Projektplan = Single Source of Truth
2. Nie eigenmächtig Architektur ändern
3. Kein Wort "Website" im Copy – stattdessen "KI-Auftritt" / "dein Profil im KI-Raum"
4. TypeScript strict – keine any-Types
5. Nach jedem Task PFLICHT:
   - Notion: Status → Done, Lessons Learned, Notizen
   - DEVELOPER.md updaten
   - docs/solutions/[phase]/[task].md anlegen
   - git add . && git commit && git push

## DOKU-PFLICHT nach jedem Task
1. Notion updaten (Status, Lessons Learned, Notizen)
2. DEVELOPER.md updaten
3. docs/solutions/[phase]/[task-name].md anlegen
4. git add . && git commit -m "docs: lessons learned Task X.X" && git push
