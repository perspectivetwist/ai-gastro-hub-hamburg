import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Metadata } from 'next'

function getArticle(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'newsroom', `${slug}.json`)
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch { return null }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = getArticle(params.slug)
  return {
    title: data ? `${data.headline} | KI-Gastro-Newsroom KW ${data.kw}` : 'KI-Gastro-Newsroom',
    description: data ? `KW ${data.kw} ${data.year}: ${data.headline}` : '',
  }
}

export default function NewsroomArticle({ params }: { params: { slug: string } }) {
  const data = getArticle(params.slug)
  if (!data) return notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">

      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-10">
        <span className="text-2xl">🍳</span>
        <Link href="/newsroom" className="text-sm text-gray-400 hover:text-white transition">
          KI-Gastro-Newsroom
        </Link>
        <span className="text-gray-600 text-sm">›</span>
        <span className="text-sm text-gray-500">KW {data.kw} · {data.date}</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-12 leading-tight">
        {data.headline}
      </h1>

      {/* Zahl der Woche */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">📊 Zahl der Woche</p>
        <p className="text-5xl font-bold text-white mb-3">{data.zahl_der_woche.zahl}</p>
        <p className="text-gray-400 text-sm">{data.zahl_der_woche.kontext}</p>
      </div>

      {/* News */}
      <h2 className="text-base font-bold text-gray-400 uppercase tracking-wider mb-6">
        KI + Gastronomie diese Woche
      </h2>
      <div className="space-y-4 mb-12">
        {data.news.map((item: { titel: string; was_passiert: string; was_bedeutet_das: string }, i: number) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold text-white mb-3">▸ {item.titel}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.was_passiert}</p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-gray-500 mb-1">Was bedeutet das für dein Restaurant?</p>
              <p className="text-gray-300 text-sm">{item.was_bedeutet_das}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Handlungsempfehlung */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6 mb-12">
        <p className="text-xs text-yellow-400 uppercase tracking-wider mb-3">💡 Deine Aufgabe diese Woche</p>
        <p className="text-white text-sm leading-relaxed">{data.handlungsempfehlung}</p>
      </div>

      {/* CTA */}
      <div className="bg-white/5 rounded-xl p-8 text-center">
        <p className="text-gray-400 mb-4 text-sm">Wie KI-ready ist dein Restaurant gerade?</p>
        <a href="/" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition text-sm">
          Kostenlosen KI-Scan starten →
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link href="/newsroom" className="text-sm text-gray-500 hover:text-gray-300 transition">
          ← Alle Ausgaben
        </Link>
      </div>

    </main>
  )
}

export async function generateStaticParams() {
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir)
    return files.filter(f => f.endsWith('.json')).map(f => ({ slug: f.replace('.json', '') }))
  } catch { return [] }
}
