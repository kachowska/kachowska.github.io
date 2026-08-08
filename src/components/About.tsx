import { LANGUAGES, PROFILE } from '../data/content'

/**
 * Раздел о человеке, а не о продукте. Первая версия была целиком про Neirosynt,
 * включая все четыре цифры, — на личном портфолио это перекос: проект тут один
 * из нескольких, а не тема страницы.
 */
const FACTS = [
  { value: '17', label: 'public repositories' },
  { value: '5', label: 'languages spoken' },
  { value: '5', label: 'write-ups published' },
  { value: '2027', label: 'BEng, AGH Kraków' },
]

export default function About() {
  return (
    <section id="about" className="section border-t border-white/[0.06] bg-ink-800/40">
      <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="h2 mt-4">How I work</h2>

          <div className="mt-6 space-y-4 lede">
            <p>
              I am a software engineer working across data and web. Python is my core language —
              FastAPI and SQLAlchemy for services, pandas and NumPy for analysis, pytest to keep
              both honest. I design relational schemas, write the migrations that evolve them, and
              treat the database as something to be modelled rather than dumped into.
            </p>
            <p>
              On the front I work in TypeScript with React and Next.js, and I deploy what I build:
              Docker, nginx, Linux, CI that runs the tests before anything reaches production. That
              range is deliberate. Being able to follow a problem from the schema to the screen
              means I am never blocked waiting for someone else to own the next layer.
            </p>
            <p>
              A growing part of my work is applied AI. The interesting engineering there is not the
              prompt — it is choosing the right model for each task, keeping token spend bounded and
              measurable, and validating what comes back before a user ever sees it.
            </p>
            <p>
              I read and write technically in five languages, study engineering at AGH in Kraków,
              and look for work where correctness matters and where I can own a system rather than a
              ticket.
            </p>
          </div>

          <p className="mt-8 text-sm text-mist-400">Based in {PROFILE.location}.</p>
        </div>

        <div className="lg:pt-16">
          <div className="grid grid-cols-2 gap-4">
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className="card animate-rise p-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <p className="font-mono text-3xl font-medium text-brand-300">{f.value}</p>
                <p className="mt-2 text-[13px] leading-snug text-mist-400">{f.label}</p>
              </div>
            ))}
          </div>

          <div className="card mt-4 p-5">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
              Languages
            </h3>
            <dl className="mt-4 space-y-1.5">
              {LANGUAGES.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-3 text-sm">
                  <dt className="text-mist-100">{l.name}</dt>
                  <dd className="text-mist-400">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
