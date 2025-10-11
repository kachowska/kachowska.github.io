import React from 'react'

export default function Skills() {
  const skills = [
    'Python', 'Pandas', 'NumPy', 'SQL', 'Plotly', 'Streamlit',
    'Statsmodels', 'A/B testing', 'Cohort analysis', 'ETL',
    'React', 'TypeScript', 'TailwindCSS'
  ]
  return (
    <section id="skills" className="container section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-sage-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
              Expertise
            </span>
            <div className="h-px w-12 bg-sage-300" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-sage-500">Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {skills.map(s => (
            <span 
              key={s} 
              className="px-4 py-2 border border-sage-200 text-sage-500 text-sm font-light hover:border-sage-300 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-serif text-2xl font-light text-sage-500 mb-6">Languages</h3>
          <ul className="space-y-2 text-sage-400 font-light">
            <li>English — B2</li>
            <li>Polish — C1</li>
            <li>Russian — Native</li>
            <li>Belarusian — Native</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
