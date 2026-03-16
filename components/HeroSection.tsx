export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-4"
      style={{ zIndex: 1 }}
    >
      <div className="relative">
        {/* Eyebrow */}
        <div
          className="mb-14 text-sm tracking-widest uppercase"
          style={{ color: "#FFFFFF" }}
        >
          AI-Readiness für Restaurants
        </div>

        {/* Hook Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
          Ist dein Restaurant{" "}
          <span className="gradient-accent">bereit für die KI-Ära?</span>
        </h1>

        {/* Sub */}
        <p
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          style={{ color: "#cccccc" }}
        >
          ChatGPT, Perplexity und Gemini empfehlen Restaurants, buchen Tische
          und bewerten Erlebnisse. Wer nicht sichtbar, nutzbar und sicher ist,
          verliert Gäste — ohne es zu merken.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center">
          <a
            href="#products"
            className="inline-block rounded-full transition-all duration-300 hover:scale-105 p-[1.5px] focus:outline-none"
            style={{ background: "linear-gradient(135deg, #FFB432 0%, #FF3CAC 50%, #FF2D78 100%)" }}
          >
            <span
              className="block px-12 py-4 rounded-full font-semibold text-base tracking-wide text-white"
              style={{ background: "#000008" }}
            >
              Restaurant kostenlos scannen
            </span>
          </a>
        </div>
      </div>

      {/* Jellyfish Hero Image */}
      <div className="relative flex justify-center pointer-events-none mt-8">
        <img
          src="/asd_jellyfish_hero_2.png"
          alt="AI Gastro Hub"
          className="w-[400px] md:w-[550px]"
          style={{
            maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
          }}
        />
      </div>
    </section>
  );
}
