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
            { label: 'A/B report', href: 'https://kachowska.github.io/olist-funnel-dashboard/abtest.html', ghost: true },
            { label: 'GitHub', href: 'https://github.com/kachowska/olist-funnel-dashboard', ghost: true }
          ]}
        />

        
<ProjectCard
  title="Kraków Real Estate Price Analysis (2018–2025)"
  description="Exploratory + predictive analysis of Kraków property prices: cleaning 25k+ listings, feature engineering (price/m², distance-to-center, new build), spatial trends, and an interactive dashboard."
  tags={['Python','Pandas','scikit-learn','GeoPandas','SQL','Looker Studio']}
  links={[
    { label: 'Case study', href: 'https://github.com/kachowska/krakow-realestate-analysis/blob/main/README.md' },
    { label: 'Dashboard', href: 'https://lookerstudio.google.com/s/l216sC_s_qs', ghost: true },
    { label: 'GitHub', href: 'https://github.com/kachowska/krakow-realestate-analysis', ghost: true }
  ]}
/>

<ProjectCard
  title="Sea Battle (Battleship) — Web Game"
  description="Turn-based JS game: drag‑and‑drop placement, rotation on click, hit-streak logic, ship reveal on sink, score counter, final win screen; localStorage save and vs. computer."
  tags={['JavaScript','HTML/CSS','Game Logic','LocalStorage']}
  links={[
    { label: 'Live demo', href: 'https://kachowska.github.io/sea-battle/' },
    { label: 'GitHub', href: 'https://github.com/kachowska/sea-battle', ghost: true }
  ]}
/>
<ProjectCard
          title="Coming soon"
          description="Next analytics project is on the way."
          tags={['Python','EDA']}
          links={[{ label: 'GitHub', href: 'https://github.com/kachowska', ghost: true }]}
        />
      </div>
    </section>
  )
}
