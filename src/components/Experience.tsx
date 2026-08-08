import { EDUCATION, EXPERIENCE } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-white/[0.06]">
      <div className="wrap">
        <p className="eyebrow">Track record</p>
        <h2 className="h2 mt-4">Experience</h2>

        <div className="mt-12 space-y-5">
          {EXPERIENCE.map((role, i) => (
            <article
              key={role.title}
              className="card animate-rise p-6 md:p-8"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {role.title}{' '}
                  <span className="font-normal text-brand-300">· {role.org}</span>
                </h3>
                <p className="font-mono text-xs tracking-wide text-mist-400">{role.period}</p>
              </div>

              <p className="mt-1 text-sm text-mist-400">{role.meta}</p>

              <ul className="mt-5 space-y-2.5">
                {role.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-mist-200">
                    <span
                      className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                      aria-hidden="true"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              {role.stack && (
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {role.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-400">
            Education
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <div key={e.school} className="card p-5">
                <p className="font-semibold text-white">{e.school}</p>
                <p className="mt-1 text-sm text-mist-300">{e.degree}</p>
                <p className="mt-2 font-mono text-xs text-mist-400">{e.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
