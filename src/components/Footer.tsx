import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="wrap flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-white">{PROFILE.name}</p>
          <p className="mt-1 font-mono text-xs tracking-wide text-mist-500">
            {PROFILE.roles.join(' · ')}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="link-quiet"
          >
            <Github size={18} />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="link-quiet"
          >
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="link-quiet">
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="wrap mt-8 border-t border-white/[0.06] pt-6">
        <p className="font-mono text-[11px] tracking-wide text-mist-500">
          © {new Date().getFullYear()} — built with React, Vite and Tailwind. Source on GitHub.
        </p>
      </div>
    </footer>
  )
}
