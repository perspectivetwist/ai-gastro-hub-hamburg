import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASD – AI Shift Drift | Dein Wachstumsökosystem für die KI-Ära",
  description:
    "Der AI Drift ist kein Trend. Er ist ein Systemwandel. ASD verbindet AI Wake, Slipstream und Quantum – das Wachstumsökosystem für deutschen KMU.",
  openGraph: {
    title: "ASD – AI Shift Drift",
    description:
      "Sichtbar. Nutzbar. Sicher. Dein Wachstumsökosystem. Der neue Maßstab.",
    locale: "de_DE",
    url: "https://ai-shift-drift.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
