import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../data/content'

/**
 * EmailJS-ключи задаются в .env.local и вшиваются в клиентский бандл (префикс VITE_),
 * то есть они в любом случае публичны. Ограничьте домен в настройках EmailJS,
 * иначе чужой сайт сможет расходовать вашу квоту.
 */
const PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAIL_READY = Boolean(PUBLIC && SERVICE && TEMPLATE)

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-mist-100 outline-none transition-colors placeholder:text-mist-500 focus:border-brand-500/60 focus:bg-white/[0.05]'

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState('')

  const mailtoHref = () => {
    const fd = formRef.current ? new FormData(formRef.current) : null
    const name = (fd?.get('name') as string) || ''
    const email = (fd?.get('email') as string) || ''
    const message = (fd?.get('message') as string) || ''
    const subject = `Portfolio message — ${name} <${email}>`
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const fd = new FormData(formRef.current)
    if (fd.get('website')) return // honeypot

    const subjInput = formRef.current.querySelector(
      'input[name="subject"]',
    ) as HTMLInputElement | null
    if (subjInput) subjInput.value = `Portfolio message — ${fd.get('name')} <${fd.get('email')}>`

    if (!EMAIL_READY) {
      window.location.href = mailtoHref()
      return
    }

    try {
      setStatus('sending')
      setErrorText('')
      await emailjs.sendForm(SERVICE!, TEMPLATE!, formRef.current, PUBLIC!)
      setStatus('sent')
      formRef.current.reset()
    } catch (err: unknown) {
      const msg =
        (err as { text?: string; message?: string })?.text ||
        (err as { message?: string })?.message ||
        'Sending failed. Please use the email link instead.'
      setErrorText(msg)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section border-t border-white/[0.06] bg-ink-800/40">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="h2 mt-4">Let&apos;s talk</h2>
          <p className="mt-4 lede">
            {PROFILE.availability}. If you have a role, a project, or a question about anything
            above — write to me and I will reply.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 text-sm link-quiet"
            >
              <Mail size={16} className="text-brand-400" /> {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm link-quiet"
            >
              <Github size={16} className="text-brand-400" /> github.com/kachowska
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm link-quiet"
            >
              <Linkedin size={16} className="text-brand-400" /> LinkedIn
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="card grid gap-4 p-6 md:p-8">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="subject" value="" />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-mist-300">Name</span>
              <input name="name" type="text" required className={field} placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-medium text-mist-300">Email</span>
              <input
                name="email"
                type="email"
                required
                className={field}
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-xs font-medium text-mist-300">Message</span>
            <textarea
              name="message"
              rows={6}
              required
              className={`${field} resize-none`}
              placeholder="What would you like to build?"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`btn btn-primary ${status === 'sending' ? 'cursor-not-allowed opacity-60' : ''}`}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent' : 'Send message'}
            </button>
            <a href={mailtoHref()} className="text-xs link-quiet">
              or email me directly
            </a>
          </div>

          <p aria-live="polite" className="min-h-[1.25rem] text-sm">
            {status === 'sent' && <span className="text-brand-300">Thank you — message sent.</span>}
            {status === 'error' && <span className="text-red-400">{errorText}</span>}
          </p>
        </form>
      </div>
    </section>
  )
}
