'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Was bedeutet AI-Readiness für Restaurants?',
    answer: 'AI-Readiness heißt: Dein Restaurant ist auf allen drei Ebenen für die KI-Ära vorbereitet — sichtbar für KI-Suchmaschinen (ChatGPT, Gemini, Perplexity), nutzbar für KI-Agenten (automatische Reservierungen) und sicher vor KI-Angriffen (Fake-Bewertungen, Datenmissbrauch).',
  },
  {
    question: 'Welche Scanner gibt es?',
    answer: 'AI Shift Drift bietet 4 kostenlose Scanner: AEO-Scanner (Website-Lesbarkeit für KI), GEO-Scanner (digitaler Ruf und Reputation), Agent-Readiness-Scanner (Buchbarkeit für KI-Agenten) und Security-Scanner (Schutz vor KI-Angriffen wie Fake-Bewertungen).',
  },
  {
    question: 'Warum reicht Sichtbarkeit allein nicht?',
    answer: 'Ein Restaurant kann perfekt für ChatGPT optimiert sein — aber wenn ein KI-Agent keinen Tisch buchen kann, bringt die Sichtbarkeit nichts. Und wenn Fake-Bewertungen den Ruf zerstören, hilft auch die beste Buchbarkeit nicht. Alle drei Säulen — sichtbar, nutzbar, sicher — müssen zusammen stimmen.',
  },
  {
    question: 'Was ist der Unterschied zwischen AEO und GEO?',
    answer: 'AEO (Answer Engine Optimization) prüft ob KI-Systeme deine Website lesen und zitieren können. GEO (Generative Engine Optimization) prüft deinen digitalen Ruf — Bewertungen, Erwähnungen, Brancheneinträge. Ein Restaurant braucht beides um für KI sichtbar zu sein.',
  },
  {
    question: 'Was kostet das?',
    answer: 'Alle 4 Scans sind kostenlos. Du bekommst deinen Score und eine Übersicht der Kriterien. Den vollständigen Aktionsplan mit priorisierten Maßnahmen gibt es nach Email-Eingabe.',
  },
  {
    question: 'Wie schnell sehe ich Ergebnisse?',
    answer: 'Der Scan dauert 60 Sekunden. Erste Verbesserungen können innerhalb von 1-2 Wochen in KI-Suchen sichtbar werden.',
  },
  {
    question: 'Was passiert mit meinen Daten?',
    answer: 'Wir speichern keine Website-Inhalte. Der Scan läuft in Echtzeit und die Ergebnisse werden nur in deinem Browser angezeigt.',
  },
  {
    question: 'Mein Restaurant hat viele Google-Bewertungen — reicht das nicht?',
    answer: 'Google-Bewertungen sind ein Faktor, aber nicht alles. ChatGPT liest primär strukturierte Website-Inhalte. Ohne Schema Markup, FAQ-Seite und maschinenlesbaren Content bleibt dein Restaurant unsichtbar. Und Bewertungen allein machen dein Restaurant weder buchbar für KI-Agenten noch sicher vor Fake-Angriffen.',
  },
]

export default function GastroFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Häufige <span className="gradient-accent">Fragen.</span>
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="border rounded-lg overflow-hidden"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-medium text-white text-sm pr-4">
                  {item.question}
                </span>
                <span
                  className="text-lg shrink-0"
                  style={{ color: "#888" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#cccccc" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
