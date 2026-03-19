import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default function NewsroomOverview() {
  let articles: { slug: string; kw: number; year: number; date: string; headline: string }[] = []
  try {
    const dir = path.join(process.cwd(), 'public', 'newsroom')
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    articles = files
      .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8')))
      .sort((a, b) => (b.year * 100 + b.kw) - (a.year * 100 + a.kw))
  } catch {}

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-3">
        <img
          src="/newsroom-icon.png"
          alt="KI-Gastro-Newsroom"
          className="w-10 h-10 rounded-lg object-cover"
        />
        <h1 className="text-3xl font-bold text-white">KI-Insider für Gastro. Jeden Montag.</h1>
      </div>
      <p className="text-gray-400 mb-12 text-base" style={{ marginLeft: '56px' }}>
        Wer das nicht liest, erfährt es von der Konkurrenz.
      </p>

      {articles.length === 0 ? (
        <p className="text-gray-500 text-sm">Erster Beitrag erscheint nächsten Montag.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/newsroom/${article.slug}`}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition group block"
            >
              <div className="mb-3">
                <span className="text-xs text-gray-500">KW {article.kw} · {article.date}</span>
              </div>
              <h2 className="font-bold text-white text-sm leading-snug mb-4 group-hover:text-gray-200 transition">
                {article.headline}
              </h2>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition">
                Lesen →
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
