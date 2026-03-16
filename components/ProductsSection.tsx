const forces = [
  {
    force: "AI Wake",
    dimension: "Sichtbarkeit",
    color: "#00FFE0",
    products: [
      {
        name: "AEO Scanner",
        desc: "Wie gut zitiert ChatGPT deinen KI-Auftritt? 8 Kriterien. Score in Sekunden. Sonst empfiehlt ChatGPT die Konkurrenz.",
        url: "https://aeo-transformer.vercel.app",
        cta: "AEO scannen",
      },
      {
        name: "GEO Scanner",
        desc: "Kennt ChatGPT deinen Ruf – Bewertungen, Erwähnungen, Profil? Ohne Profil existierst du für KI nicht.",
        url: "https://geo-transformer.vercel.app",
        cta: "GEO scannen",
      },
    ],
  },
  {
    force: "Slipstream",
    dimension: "Nutzbarkeit",
    color: "#FFE600",
    products: [
      {
        name: "Agent Ready Scanner",
        desc: "Können KI-Agenten auf deinem KI-Auftritt tatsächlich handeln – buchen, kaufen, anfragen? Der Auftrag geht woanders hin.",
        url: "https://agentready-transformer.vercel.app",
        cta: "Jetzt prüfen",
      },
    ],
  },
  {
    force: "Quantum",
    dimension: "Sicherheit",
    color: "#BF00FF",
    products: [
      {
        name: "Security Scanner",
        desc: "Du existierst überall gleichzeitig. Quantum misst wie sicher du in der Agenten-Welt bist. Neue Angriffsflächen die du nicht siehst.",
        url: "https://quantum-scanner.vercel.app",
        cta: "Quantum scannen",
      },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Die vier Scanner.
      </h2>
      <div className="flex flex-col gap-16">
        {forces.map((f, index) => (
          <div key={f.force}>
            {index > 0 && (
              <div className="flex items-center justify-center pb-10">
                <div className="h-px w-16" style={{ background: "#ffffff11" }} />
                <span className="mx-4 text-xs tracking-widest" style={{ color: "#444" }}>dann</span>
                <div className="h-px w-16" style={{ background: "#ffffff11" }} />
              </div>
            )}
            {/* Kraft-Header */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="text-xs tracking-widest uppercase"
                style={{ color: f.color }}
              >
                {f.force}
              </div>
              <div className="text-xs" style={{ color: "#444" }}>
                →
              </div>
              <div className="text-xs" style={{ color: "#666" }}>
                {f.dimension}
              </div>
            </div>
            {/* Produkt-Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {f.products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-0 rounded-lg overflow-hidden transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: "rgba(0,0,0,0.4)" }}
                >
                  <div
                    className="w-1 flex-shrink-0 rounded-full"
                    style={{ background: f.color }}
                  />
                  <div className="p-6">
                    <div
                      className="font-bold mb-2"
                      style={{ color: f.color }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "#cccccc" }}
                    >
                      {p.desc}
                    </div>
                    <div
                      className="text-xs tracking-wide"
                      style={{ color: f.color }}
                    >
                      {p.cta} →
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
