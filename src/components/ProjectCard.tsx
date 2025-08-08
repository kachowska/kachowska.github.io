import React from 'react'

type Link = { label: string, href: string, ghost?: boolean }
type Props = { title: string, description: string, tags: string[], links: Link[] }

export default function ProjectCard({ title, description, tags, links }: Props) {
  return (
    <div className="card h-full">
      <div className="card-body space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span key={t} className="text-xs border border-neutral-700 rounded px-2 py-1 text-neutral-300">{t}</span>
          ))}
        </div>
        <div className="pt-2 flex flex-wrap gap-2">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" className={`btn ${l.ghost ? 'btn-ghost' : 'btn-primary'}`}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
