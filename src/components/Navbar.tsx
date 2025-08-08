import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <div className="font-bold">Katsiaryna Pukhouskaya</div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white">Resume</a>
          <a href="https://github.com/kachowska" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </nav>
      </div>
    </header>
  )
}
