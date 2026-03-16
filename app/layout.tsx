import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI-Readiness für Restaurants | AI Shift Drift",
  description:
    "Ist dein Restaurant bereit für die KI-Ära? Kostenlose Scanner für Sichtbarkeit, Nutzbarkeit und Sicherheit. Jetzt prüfen.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "AI-Readiness für Restaurants | AI Shift Drift",
    description:
      "Ist dein Restaurant bereit für die KI-Ära? Kostenlose Scanner für Sichtbarkeit, Nutzbarkeit und Sicherheit. Jetzt prüfen.",
    locale: "de_DE",
    url: "https://ai-gastro-hub.vercel.app",
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
