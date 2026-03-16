export default function TrustSection() {
  const scanners = [
    {
      name: "Wake | AEO",
      desc: "Kann ChatGPT deine Restaurant-Website lesen?",
      url: "https://aeo-gastro.vercel.app",
      color: "#6366f1",
    },
    {
      name: "Wake | GEO",
      desc: "Kennt ChatGPT den Ruf deines Restaurants?",
      url: "https://geo-gastro.vercel.app",
      color: "#A8E6A3",
    },
    {
      name: "Slipstream",
      desc: "Kann KI bei deinem Restaurant reservieren?",
      url: "https://agentready-gastro.vercel.app",
      color: "#FFE600",
    },
    {
      name: "Quantum",
      desc: "Ist dein Restaurant vor KI-Angriffen geschützt?",
      url: "https://aisecurity-gastro.vercel.app",
      color: "#FF1744",
    },
  ]

  return (
    <footer
      className="relative max-w-5xl mx-auto px-6 pb-16"
      style={{ zIndex: 1 }}
    >
      <div
        className="border-t pt-12"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        {/* Ecosystem Links */}
        <div className="mb-12">
          <div
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "#888" }}
          >
            Teil des AI-Shift-Drift Ökosystems
          </div>
          <div className="flex flex-col gap-4">
            {scanners.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="flex items-center gap-3 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-[6px] h-[6px] rounded-full flex-shrink-0"
                  style={{
                    background: s.color,
                    boxShadow: `0 0 8px 2px ${s.color}66`,
                  }}
                />
                <div
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{ color: s.color }}
                >
                  {s.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "#555" }}>
                  {s.desc}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="text-sm hover:underline"
              style={{ color: "#888" }}
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-sm hover:underline"
              style={{ color: "#888" }}
            >
              Datenschutz
            </a>
          </div>
        </div>
        <div
          className="mt-12 text-center text-xs"
          style={{ color: "#444" }}
        >
          © 2026 Ein Service von AI-SHIFT-DRIFT
        </div>
      </div>
    </footer>
  )
}
