import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS, type Project } from '../data/content'

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
        >
          <ExternalLink size={15} /> Live site
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm link-quiet"
        >
          <Github size={15} /> Source
        </a>
      )}
    </div>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="chip">
          {s}
        </li>
      ))}
    </ul>
  )
}

function Flagship({ project }: { project: Project }) {
  return (
    <article className="card animate-rise overflow-hidden p-7 md:p-9">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {project.name}
        </h3>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
          {project.kind}
        </p>
      </div>

      <p className="mt-4 max-w-3xl lede">{project.summary}</p>

      <ul className="mt-6 space-y-3">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-mist-200">
            <span
              className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
              aria-hidden="true"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-5 border-t border-white/[0.07] pt-6 md:flex-row md:items-center md:justify-between">
        <Stack items={project.stack} />
        <Links project={project} />
      </div>
    </article>
  )
}

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="card animate-rise flex flex-col p-6"
      style={{ animationDelay: `${Math.min(index, 3) * 60}ms` }}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-400">
        {project.kind}
      </p>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-white">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist-300">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-mist-400">
            <span
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand-600"
              aria-hidden="true"
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* mt-auto прижимает стек и ссылки к низу, чтобы карточки в сетке
          выравнивались независимо от длины описания. */}
      <div className="mt-auto pt-6">
        <Stack items={project.stack} />
        <div className="mt-4">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const flagship = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="work" className="section border-t border-white/[0.06]">
      <div className="wrap">
        <p className="eyebrow">Selected work</p>
        <h2 className="h2 mt-4">Things I have built and run</h2>
        <p className="mt-4 max-w-2xl lede">
          Every project below is open source or live. The links go to the actual code, not a
          screenshot of it.
        </p>

        <div className="mt-12 space-y-6">
          {flagship.slice(0, 1).map((p) => (
            <Flagship key={p.name} project={p} />
          ))}

          <div className="grid gap-6 md:grid-cols-2">
            {flagship.slice(1).map((p, i) => (
              <Card key={p.name} project={p} index={i} />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rest.map((p, i) => (
              <Card key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
