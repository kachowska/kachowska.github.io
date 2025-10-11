import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Linkedin,
  Github,
  AlertCircle
} from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  projectType: string
  budget: string
  timeline: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>()

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', data)
      
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🎉'
      })
      
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 5000,
        icon: '❌'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "katsiaryna.pukhouskaya@email.com",
      href: "mailto:katsiaryna.pukhouskaya@email.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Remote / Available Worldwide",
      href: "#",
      color: "from-purple-500 to-violet-600"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/katsiaryna-pukhouskaya-0086b8195/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kachowska",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: Calendar,
      label: "Schedule Meeting",
      href: "#",
      color: "hover:text-green-600"
    }
  ]

  const projectTypes = [
    "Data Analysis",
    "Business Intelligence",
    "Machine Learning",
    "Market Research",
    "Dashboard Development",
    "Consulting",
    "Other"
  ]

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
    "Let's discuss"
  ]

  const timelines = [
    "ASAP",
    "1-2 weeks",
    "1 month",
    "2-3 months",
    "3+ months",
    "Flexible"
  ]

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

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl border border-neutral-100 dark:border-neutral-700 group transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {info.label}
                      </h4>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

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

export default Contact