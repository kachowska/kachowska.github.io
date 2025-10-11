// src/components/Contact.tsx
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

/**
 * EmailJS env (set in .env.local)
 * VITE_EMAILJS_PUBLIC_KEY=
 * VITE_EMAILJS_SERVICE_ID=
 * VITE_EMAILJS_TEMPLATE_ID=
 */
const PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAIL_READY = Boolean(PUBLIC && SERVICE && TEMPLATE)

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState<string>('')

  const mailtoHref = () => {
    const fd = formRef.current ? new FormData(formRef.current) : null
    const name = (fd?.get('name') as string) || ''
    const email = (fd?.get('email') as string) || ''
    const message = (fd?.get('message') as string) || ''
    const subject = `Portfolio message — ${name} <${email}>`
    return `mailto:givemepassw@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const fd = new FormData(formRef.current)
    if (fd.get('website')) return

    const subject = `Portfolio message — ${fd.get('name')} <${fd.get('email')}>`
    const subjInput = formRef.current.querySelector(
      'input[name="subject"]'
    ) as HTMLInputElement | null
    if (subjInput) subjInput.value = subject

    // if EmailJS keys are missing, fallback to mailto
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
    } catch (err: any) {
      console.error(err)
      const msg =
        err?.text ||
        err?.message ||
        'Sending failed. Please try again later or use the email link below.'
      setErrorText(msg)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="container section-padding bg-cream-50">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-sage-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
            Get In Touch
          </span>
          <div className="h-px w-12 bg-sage-300" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-sage-500 mb-4">Contact</h2>
        <p className="text-sage-400 font-light">
          Send me a message — I'll get back to you.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto grid gap-6"
      >
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Subject for EmailJS/template convenience (filled in onSubmit) */}
        <input type="hidden" name="subject" value="" />

        <input
          name="name"
          type="text"
          placeholder="Your name"
          required
          className="bg-cream-200 border border-sage-200 px-6 py-4 outline-none focus:border-sage-300 focus:bg-white transition-colors text-sage-500 placeholder:text-sage-300"
        />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="bg-cream-200 border border-sage-200 px-6 py-4 outline-none focus:border-sage-300 focus:bg-white transition-colors text-sage-500 placeholder:text-sage-300"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={8}
          required
          className="bg-cream-200 border border-sage-200 px-6 py-4 outline-none focus:border-sage-300 focus:bg-white transition-colors text-sage-500 placeholder:text-sage-300 resize-none"
        />

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`btn btn-primary w-full sm:w-auto ${
              status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''
            }`}
          >
            {status === 'sending'
              ? 'Sending…'
              : status === 'sent'
              ? 'Sent!'
              : 'Send message'}
          </button>

          <a
            href={mailtoHref()}
            className="text-xs uppercase tracking-wider text-sage-400 hover:text-sage-500 transition-colors"
          >
            or email me directly
          </a>
        </div>

        {status === 'sent' && (
          <p className="text-sage-500 text-sm text-center">Thank you — your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm text-center">
            {errorText || 'Something went wrong. Please try again.'}
          </p>
        )}
        {!EMAIL_READY && (
          <p className="text-sage-400 text-sm text-center">
            Email service is in fallback mode (mailto). Messages will open in your
            mail client.
          </p>
        )}
      </form>
    </section>
  )
}
