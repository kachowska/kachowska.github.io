import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="subtitle mt-2">Send me a message — I’ll get back to you.</p>

      <form ref={formRef} onSubmit={onSubmit} className="mt-6 grid gap-4 max-w-xl">
        <input name="name" placeholder="Your name" required className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
        <input type="email" name="email" placeholder="Email address" required className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
        <textarea name="message" placeholder="Message" rows={5} required className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500" />
        <div className="flex items-center gap-3">
          <button disabled={status==='sending'} className="btn btn-primary">
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && <span className="text-emerald-400">Sent!</span>}
          {status === 'error' && <span className="text-rose-400">Something went wrong.</span>}
        </div>
      </form>
    </section>
  )
}
