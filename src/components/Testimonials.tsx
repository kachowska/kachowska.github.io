import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Building,
  User
} from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "VP of Marketing",
      company: "TechCorp Solutions",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Katsiaryna's analytical skills are exceptional. She transformed our chaotic data into clear, actionable insights that directly contributed to a 40% increase in our marketing ROI. Her ability to translate complex data into business strategy is remarkable.",
      linkedin: "#",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "DataDriven Consulting",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Katsiaryna was a game-changer for our company. Her predictive models helped us identify at-risk customers, resulting in a 25% reduction in churn. She's not just a data analyst - she's a strategic partner.",
      linkedin: "#",
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director of Operations",
      company: "MarketInsights Inc",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Katsiaryna has an incredible talent for finding patterns in data that others miss. Her market segmentation analysis revolutionized our approach to customer targeting and improved our conversion rates by 35%.",
      linkedin: "#",
      featured: false
    },
    {
      id: 4,
      name: "David Park",
      role: "Head of Business Intelligence",
      company: "Analytics Plus",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "I've worked with many data analysts, but Katsiaryna stands out for her attention to detail and ability to deliver insights that actually drive business decisions. Her dashboards are both beautiful and functional.",
      linkedin: "#",
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "InnovateLab",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      text: "Katsiaryna's work on our customer behavior analysis was instrumental in product development decisions. Her insights helped us prioritize features that led to a 50% increase in user engagement.",
      linkedin: "#",
      featured: false
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-neutral-300 dark:text-neutral-600'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                  Testimonials
                </span>
                <div className="w-12 h-1 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                What Others{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-600 to-secondary-600">
                  Say
                </span>
              </h2>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed mt-6">
                Feedback from colleagues, clients, and collaborators who have experienced 
                the impact of data-driven insights firsthand.
              </p>
            </motion.div>
          </div>

          {/* Main Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700 p-8 md:p-12"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 text-center leading-relaxed mb-8 font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-tr from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-lg">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                        <span>{testimonials[currentTestimonial].role}</span>
                        <span className="w-1 h-1 bg-neutral-400 rounded-full" />
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{testimonials[currentTestimonial].company}</span>
                        </div>
                      </div>
                    </div>
                    <motion.a
                      href={testimonials[currentTestimonial].linkedin}
                      className="p-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  onClick={prevTestimonial}
                  className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg hover:shadow-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="p-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-lg hover:shadow-xl text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonial
                        ? 'bg-primary-600 shadow-lg'
                        : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Projects Delivered", icon: Building },
              { number: "25+", label: "Team Collaborations", icon: User },
              { number: "5+", label: "Years Experience", icon: Quote }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-8 rounded-2xl border border-primary-100 dark:border-primary-800"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed their business 
              with data-driven insights and strategic analytics.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Discuss Your Project
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials