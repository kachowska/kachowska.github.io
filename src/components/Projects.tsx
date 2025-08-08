import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
      <p className="subtitle mt-1">A selection of end-to-end and analytics work.</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <ProjectCard
          title="E-commerce Sales Funnel Dashboard (Olist)"
          description="End-to-end: ETL → metrics → Plotly dashboard → A/B test mock on the Brazilian e-commerce dataset."
          tags={['Python','Pandas','Plotly','Statsmodels','Cohorts','Funnel']}
          links={[
            { label: 'Live demo', href: 'https://kachowska.github.io/olist-funnel-dashboard/' },
            { label: 'A/B report', href: 'https://kachowska.github.io/olist-funnel-dashboard/abtest.html', ghost: True },
            { label: 'GitHub', href: 'https://github.com/kachowska/olist-funnel-dashboard', ghost: True }
          ]}
        />

        <ProjectCard
          title="Coming soon"
          description="Next analytics project is on the way."
          tags={['Python','EDA']}
          links={[{ label: 'GitHub', href: 'https://github.com/kachowska', ghost: True }]}
        />
      </div>
    </section>
  )
}
