import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * Кнопка «наверх». Появление сделано на CSS, а не на framer-motion: это была
 * единственная оставшаяся зависимость от библиотеки анимаций, и ради одной
 * кнопки в бандл прилетало 115 кБ.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      // Скрытую кнопку убираем из потока фокуса, иначе Tab уводит на невидимый элемент.
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-7 right-7 z-40 rounded-full bg-brand-500 p-3 text-ink-900 shadow-lg transition-all duration-300 hover:bg-brand-400 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
