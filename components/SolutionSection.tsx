export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Deshalb haben wir AI-Shift-Drift in&apos;s Leben gerufen.
      </h2>

      <p
        className="text-xl mb-16 max-w-3xl leading-relaxed"
        style={{ color: "#cccccc" }}
      >
        Wer nur seine Sichtbarkeit optimiert, aber seine Website für Agentenstrukturen nicht nutzbar macht, verliert trotzdem. Wer nutzbar, aber unsicher ist, riskiert mehr als er gewinnt.
        <br />
        <br />
        AI Shift Drift ist das erste Ökosystem das alle drei Dimensionen
        zusammendenkt: Sichtbar. Nutzbar. Sicher.
        <br />
        <br />
        Nicht als Versprechen. Als ein messbares System. Als dein zukünftiger Wachstumskanal.
      </p>

      {/* Pyramide */}
      <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">
        {/* Spitze: Quantum */}
        <div className="w-[40%] flex gap-0 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-1.5 flex-shrink-0" style={{ background: "#FF1744" }} />
          <div className="py-4 px-5 w-full text-center">
            <div className="text-lg font-bold" style={{ color: "#FF1744" }}>Quantum</div>
            <div className="text-xs" style={{ color: "#888" }}>Sicher</div>
          </div>
          <div className="w-1.5 flex-shrink-0" style={{ background: "#FF1744" }} />
        </div>
        {/* Verbinder */}
        <div className="h-4 w-px" style={{ background: "#333" }} />
        {/* Mitte: Slipstream */}
        <div className="w-[65%] flex gap-0 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-1.5 flex-shrink-0" style={{ background: "#FFE600" }} />
          <div className="py-4 px-5 w-full text-center">
            <div className="text-lg font-bold" style={{ color: "#FFE600" }}>Slipstream</div>
            <div className="text-xs" style={{ color: "#888" }}>Nutzbar</div>
          </div>
          <div className="w-1.5 flex-shrink-0" style={{ background: "#FFE600" }} />
        </div>
        {/* Verbinder */}
        <div className="h-4 w-px" style={{ background: "#333" }} />
        {/* Basis: Wake */}
        <div className="w-full flex gap-0 rounded-lg overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
          <div className="w-1.5 flex-shrink-0" style={{ background: "linear-gradient(180deg, #00AAFF, #00FF88)" }} />
          <div className="py-4 px-5 w-full text-center">
            <div className="text-lg font-bold gradient-wake">Wake</div>
            <div className="text-xs" style={{ color: "#888" }}>Sichtbar</div>
          </div>
          <div className="w-1.5 flex-shrink-0" style={{ background: "linear-gradient(180deg, #00AAFF, #00FF88)" }} />
        </div>
      </div>
    </section>
  );
}
