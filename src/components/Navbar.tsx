import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PROFILE } from '../data/content'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#writing', label: 'Articles' },
  { href: '#notes', label: 'Notes' },
  { href: '#about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/[0.07] bg-ink-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="wrap flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" className="font-semibold tracking-tight text-white">
          {PROFILE.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm link-quiet">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !py-2 !px-4">
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-mist-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.07] bg-ink-900/95 backdrop-blur-md md:hidden"
        >
          <div className="wrap flex flex-col gap-1 py-4">
            {[...LINKS, { href: '#contact', label: 'Get in touch' }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm link-quiet"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
