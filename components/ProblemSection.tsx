export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="relative pt-16 pb-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        KI-Systeme ersetzen deine bisherigen,
        <br />
        digitalen Umsatzkanäle. <span className="gradient-accent">Jetzt.</span>
      </h2>

      <div className="space-y-6 mb-16 max-w-3xl">
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            Heute existiert dein Unternehmen im Netz.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>Morgen entscheiden KI-Systeme,</span>
            <br />
            auf welchen Websites Agenten Umsätze generieren &amp; wer noch sichtbar bleibt.
          </p>
        </div>
        <div className="flex gap-0 rounded-lg overflow-hidden">
          <div className="w-1 flex-shrink-0" style={{ background: "linear-gradient(180deg, #FFB432, #FF3CAC)" }} />
          <p className="text-xl leading-relaxed pl-4" style={{ color: "#cccccc" }}>
            <span className="font-semibold" style={{ color: "#ffffff" }}>Die bittere Realität,</span>
            <br />
            ausschließlich diejenigen, die sich an diesen Ökonomiewandel angepasst haben.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            stat: "68%",
            text: "der KMU-Websites verzeichnen bereits signifikante Traffic-Verluste durch KI-Suchfunktionen",
          },
          {
            stat: "10:1 → 5:1",
            text: "Das Verhältnis Google-Nutzer zu KI-Such-Nutzer hat sich in 12 Monaten halbiert",
          },
          {
            stat: "+721%",
            text: "Wachstum der KI-Suchplattformen in 12 Monaten. Der Wandel passiert gerade.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-6"
            style={{
              borderColor: "#FF006E33",
              background: "rgba(255,0,110,0.04)",
            }}
          >
            <div className="text-4xl font-bold mb-3 gradient-accent">
              {item.stat}
            </div>
            <div
              className="text-sm leading-relaxed"
              style={{ color: "#cccccc" }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
