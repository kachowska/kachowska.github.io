import React from 'react'
import { motion } from 'framer-motion'
import Typing from './Typing'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div className="container relative py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr,280px] gap-10 items-center"
        >
          <div className="max-w-3xl">
            <div className="text-sm text-blue-300 font-semibold mb-3">Data Analytics • Product • Experimentation</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Katsiaryna Pukhouskaya</h1>
            <p className="subtitle mt-2 text-lg">
              Junior Data Analyst & React Developer — I turn messy data into clear, actionable insights.
              <br />
              <Typing items={['Python • Pandas • SQL', 'Plotly • Streamlit • A/B tests', 'React • Tailwind • TypeScript']} />
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/resume.pdf" className="btn btn-primary" download>Download CV</a>
              <a href="#contact" className="btn btn-ghost">Contact me</a>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-emerald-400 to-pink-500">
              <img
                src="/image.png"
                alt="Katsiaryna portrait"
                className="h-[240px] w-[240px] object-cover rounded-full border border-neutral-800 shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
