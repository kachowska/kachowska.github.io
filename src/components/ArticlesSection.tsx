import { ArrowUpRight } from 'lucide-react'
import { ARTICLES } from '../data/content'

export default function ArticlesSection() {
  if (ARTICLES.length === 0) return null

  return (
    <section id="writing" className="section border-t border-white/[0.06]">
      <div className="wrap">
        <p className="eyebrow">Writing</p>
        <h2 className="h2 mt-4">Analysis, written up</h2>
        <p className="mt-4 max-w-2xl lede">
          Charts are only useful if someone explains what they mean. These are the write-ups behind
          the analysis projects.
        </p>

        <div className="mt-12 space-y-6">
          {ARTICLES.map((a) => (
            <article key={a.title} className="card animate-rise overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-white">{a.title}</h3>
                <p className="mt-3 max-w-3xl lede">{a.summary}</p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
                >
                  Read the analysis <ArrowUpRight size={15} />
                </a>
              </div>

              {a.charts && a.charts.length > 0 && (
                <div className="grid gap-px border-t border-white/[0.07] bg-white/[0.07] sm:grid-cols-3">
                  {a.charts.map((src) => (
                    <div key={src} className="bg-ink-900 p-3">
                      <img
                        src={src}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-40 w-full rounded object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
