import React from 'react'

export default function Skills() {
  const skills = [
    'Python', 'Pandas', 'NumPy', 'SQL', 'Plotly', 'Streamlit',
    'Statsmodels', 'A/B testing', 'Cohort analysis', 'ETL',
    'React', 'TypeScript', 'TailwindCSS'
  ]
  return (
    <section id="skills" className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(s => (
          <span key={s} className="text-sm border border-neutral-700 rounded-lg px-3 py-1 text-neutral-200">{s}</span>
        ))}
      </div>

      <h3 className="mt-6 text-xl font-semibold">Languages</h3>
      <ul className="mt-2 space-y-1 text-neutral-300">
        <li>English — B2</li>
        <li>Polish — C1</li>
        <li>Russian — Native</li>
        <li>Belarusian — Native</li>
      </ul>
    </section>
  )
}
