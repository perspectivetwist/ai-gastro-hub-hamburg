import Link from "next/link";

const productLinks = [
  { name: "AEO Scanner", url: "https://aeo-transformer.vercel.app" },
  { name: "GEO Scanner", url: "https://geo-transformer.vercel.app" },
  { name: "Slipstream", url: "https://agentready-transformer.vercel.app" },
  { name: "Quantum", url: "https://quantum-scanner.vercel.app" },
];

export default function TrustSection() {
  return (
    <section
      className="relative py-24 px-6"
      style={{ zIndex: 1 }}
    >
      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {["DSGVO-konform", "Keine Datenspeicherung", "Made in Germany"].map(
          (badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm"
              style={{ color: "#888" }}
            >
              <span style={{ color: "#00FFE0" }}>✓</span>
              {badge}
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto border-t pt-12" style={{ borderColor: "#ffffff11" }}>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Produkt-Links */}
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#555" }}
            >
              Scanner
            </div>
            <div className="flex flex-col gap-2">
              {productLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                  style={{ color: "#888" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Rechtliches */}
          <div>
            <div
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: "#555" }}
            >
              Rechtliches
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/impressum"
                className="text-sm hover:underline"
                style={{ color: "#888" }}
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm hover:underline"
                style={{ color: "#888" }}
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 text-center text-xs"
          style={{ color: "#444" }}
        >
          © 2026 ASD – AI Shift Drift
        </div>
      </footer>
    </section>
  );
}
