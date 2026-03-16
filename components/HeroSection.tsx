export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pb-16"
      style={{ zIndex: 1 }}
    >
      {/* Eyebrow */}
      <div
        className="mb-8 text-sm tracking-widest uppercase"
        style={{ color: "#FFFFFF" }}
      >
        AI-Readiness für deutsche Unternehmen
      </div>

      {/* Hook Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
        Der AI Drift ist kein Trend.
        <br />
        Sondern ein{" "}
        <span className="gradient-accent">
          Ökonomiewandel.
        </span>
      </h1>

      {/* Sub */}
      <p
        className="text-xl md:text-2xl mb-10 max-w-2xl"
        style={{ color: "#cccccc" }}
      >
        Wir messen, ob KI-Systeme dein Unternehmen finden, deine Website nutzen &amp; sicher
        handeln können.
      </p>

      {/* CTA */}
      <div className="flex items-center justify-center">
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-lg font-semibold text-sm tracking-wide border transition-colors duration-200 hover:bg-white/5"
          style={{ borderColor: "#888888", color: "#cccccc" }}
        >
          Jetzt kostenlos scannen
        </a>
      </div>

    </section>
  );
}
