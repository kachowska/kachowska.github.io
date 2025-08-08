import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-8">
      <div className="container py-6 text-sm text-neutral-400">
        © {new Date().getFullYear()} Katsiaryna Pukhouskaya
      </div>
    </footer>
  )
}
