import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-cream-50 min-h-[90vh] flex items-center">
      <div className="container py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Minimalist tagline */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-sage-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
              Data Analytics & Development
            </span>
            <div className="h-px w-12 bg-sage-300" />
          </div>

          {/* Main heading with elegant typography */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-sage-500 tracking-tight">
            Katsiaryna<br/>
            <span className="font-serif font-normal">Pukhouskaya</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sage-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Turning complex data into clear, actionable insights. Specialized in Python, SQL, 
            and building interactive data visualizations that drive business decisions.
          </p>

          {/* Clean CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="/resume.pdf" className="btn btn-ghost" download>
              Download CV
            </a>
          </div>

          {/* Minimal skills indicator */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-sage-300">
            <span>Python</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>SQL</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>React</span>
            <span className="w-1 h-1 rounded-full bg-sage-300" />
            <span>Data Viz</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}