import React, { useEffect, useState } from 'react'

export default function Typing({ items, speed=65, pause=1200 }: { items: string[], speed?: number, pause?: number }) {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = items[idx % items.length]
    const step = () => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), pause)
          return
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next.length === 0) {
          setDeleting(false)
          setIdx((i) => (i + 1) % items.length)
        }
      }
    }
    const t = setTimeout(step, deleting ? speed / 1.8 : speed)
    return () => clearTimeout(t)
  }, [text, deleting, idx, items, speed, pause])

  return <span className="text-blue-400">{text}<span className="opacity-60">|</span></span>
}
