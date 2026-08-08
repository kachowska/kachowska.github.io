import { ALSO_USED, SKILL_GROUPS } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-white/[0.06] bg-ink-800/40">
      <div className="wrap">
        <p className="eyebrow">Toolset</p>
        <h2 className="h2 mt-4">Skills</h2>
        <p className="mt-4 max-w-2xl lede">
          Grouped by what they are actually for. Everything here has been used on something that
          shipped or was graded — not read about.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.label}
              className="card animate-rise p-6"
              style={{ animationDelay: `${Math.min(i, 5) * 50}ms` }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="card p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
              Also worked with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {ALSO_USED.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
