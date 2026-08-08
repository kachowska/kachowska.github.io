import { ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { PROFILE } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-64 -top-72 h-[860px] w-[860px] glow-brand"
        aria-hidden="true"
      />

      <div className="wrap relative py-20 md:py-28">
        <div
          className="max-w-3xl"
        >
          <p className="eyebrow">
            {PROFILE.roles.join('  ·  ')}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {PROFILE.name}
          </h1>

          <div className="mt-6 h-[3px] w-[72px] rounded bg-brand-500" />

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist-200 md:text-xl">
            {PROFILE.tagline}
          </p>

          <p className="mt-4 max-w-2xl lede">{PROFILE.blurb}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              See the work <ArrowUpRight size={16} />
            </a>
            <a href={PROFILE.resume} download className="btn btn-ghost">
              <Download size={16} /> CV
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              aria-label="GitHub profile"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {PROFILE.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {PROFILE.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
