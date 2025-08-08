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
      await emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, PUBLIC)
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
    <section id="contact" className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
      <p className="subtitle mt-2">
        Send me a message — I’ll get back to you.
      </p>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mt-6 grid gap-4 max-w-2xl"
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
          className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`px-5 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-colors ${
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
            className="text-sm underline opacity-80 hover:opacity-100"
          >
            or email me directly
          </a>
        </div>

        {status === 'sent' && (
          <p className="text-green-400">Thank you — your message has been sent.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400">
            {errorText || 'Something went wrong. Please try again.'}
          </p>
        )}
        {!EMAIL_READY && (
          <p className="text-amber-300 text-sm">
            Email service is in fallback mode (mailto). Messages will open in your
            mail client.
          </p>
        )}
      </form>
    </section>
  )
}
