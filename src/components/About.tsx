import { PROFILE } from '../data/content'

const FACTS = [
  { value: '4', label: 'research sources integrated' },
  { value: '395', label: 'backend tests' },
  { value: '30', label: 'database migrations' },
  { value: '1', label: 'engineer on the project' },
]

export default function About() {
  return (
    <section id="about" className="section border-t border-white/[0.06] bg-ink-800/40">
      <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="h2 mt-4">Why I build the unglamorous parts</h2>

          <div className="mt-6 space-y-4 lede">
            <p>
              I started with data analysis — Python, SQL, dashboards — and kept running into the
              same wall: the analysis was fine, but nobody could check it. The numbers arrived
              without a path back to where they came from.
            </p>
            <p>
              Then I spent two months editing law theses, fixing other people&apos;s citations. That
              is where the problem got specific: academic writing is judged on traceability, and
              the tooling for it is either manual or dishonest. Generative models made it worse —
              they produce references that look right and do not exist.
            </p>
            <p>
              So I built Neirosynt around a single rule: a claim without a verifiable source does
              not enter the text. The system searches real databases, shows why each paper was kept
              or dropped, and links every conclusion back to the paper behind it. Being the only
              engineer meant learning the whole stack — API design, migrations, containers, release
              safety, cost control — because there was nobody else to hand it to.
            </p>
            <p>
              That is the kind of work I want to keep doing: systems where the output can be
              checked, and where the person relying on it can see how it was produced.
            </p>
          </div>

          <p className="mt-8 text-sm text-mist-400">
            Based in {PROFILE.location}.
          </p>
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

          <p className="mt-5 text-xs leading-relaxed text-mist-500">
            Figures describe Neirosynt, the platform in the first project below.
          </p>
        </div>
      </div>
    </section>
  )
}
