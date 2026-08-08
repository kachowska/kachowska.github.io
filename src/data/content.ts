/**
 * Единственный источник содержания сайта.
 *
 * Правило: сюда попадает только то, что можно проверить — открытый репозиторий,
 * живой адрес, реальный артефакт. Раньше на сайте были выдуманные отзывы
 * («Sarah Johnson», «Analytics Plus») и посты блога с несуществующими метриками;
 * они удалены и возвращать их нельзя.
 */

export const PROFILE = {
  name: 'Katsiaryna Pukhouskaya',
  roles: ['Python Developer', 'Data Engineer', 'Data Analyst'],
  tagline:
    'I build production data systems end to end — backend, data layer, frontend and deployment.',
  blurb:
    'I like the parts most people skip: migrations, tests, cost control and release safety. Right now I design and run Neirosynt, an AI platform for systematic literature reviews, as its only engineer.',
  location: 'Kraków, Poland · open to remote',
  email: 'ekaterina.puxovskaya@gmail.com',
  github: 'https://github.com/kachowska',
  linkedin: 'https://www.linkedin.com/in/katsiaryna-pukhouskaya-0086b8195/',
  resume: '/resume.pdf',
  availability: 'Open to Python Developer, Data Engineer and Data Analyst roles',
}

export type SkillGroup = { label: string; items: string[] }

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Backend',
    items: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'REST APIs', 'pytest', 'asyncio'],
  },
  {
    label: 'Data & databases',
    items: ['PostgreSQL', 'SQL', 'Alembic', 'Redis', 'pandas', 'NumPy', 'ETL', 'MySQL'],
  },
  {
    label: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML'],
  },
  {
    label: 'Infrastructure',
    items: ['Docker', 'Docker Compose', 'nginx', 'Linux', 'Git', 'GitHub Actions'],
  },
  {
    label: 'AI engineering',
    items: [
      'Claude API',
      'Prompt design',
      'Model routing',
      'Token cost accounting',
      'LLM evaluation',
    ],
  },
  {
    label: 'Analytics & BI',
    items: ['Looker Studio', 'Excel (Power Query, Pivot Tables)', 'Plotly', 'Streamlit', 'Statistics'],
  },
]

export const ALSO_USED = ['C', 'C++', 'R', 'Delphi']

export const LANGUAGES = [
  { name: 'Russian', level: 'Native' },
  { name: 'Belarusian', level: 'Native' },
  { name: 'Polish', level: 'Fluent (C1)' },
  { name: 'Ukrainian', level: 'Fluent' },
  { name: 'English', level: 'Professional' },
]

export type Project = {
  name: string
  kind: string
  summary: string
  highlights: string[]
  stack: string[]
  repo?: string
  live?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    name: 'Neirosynt',
    kind: 'Production SaaS · sole engineer',
    summary:
      'A platform that turns a research question into a systematic literature review, where every conclusion links back to the paper it came from. I own the architecture, backend, frontend, database, integrations and deployment.',
    highlights: [
      'Searches four live research sources: OpenAlex, PubMed, ClinicalTrials.gov and CyberLeninka, each with its own schema normalisation and deduplication',
      'AI screening against user-defined inclusion criteria — yes / no / maybe, a written reason for every decision, and a human override on all of them',
      'Task-based LLM routing: a fast model for high-volume classification, a stronger one for synthesis; token usage priced against the model that actually ran, with a per-user monthly ceiling as a circuit breaker',
      'Citations formatted to GOST R 7.0.100-2018 and Belarusian VAK standards',
      '395 backend tests, 30 linear Alembic migrations, subscription billing with proration and dunning',
      'Runs on a 1 vCPU / 958 MB server — releases are flock-guarded and decoupled from container swap so deploys never take the site down',
    ],
    stack: [
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Redis',
      'Docker',
      'nginx',
      'Next.js',
      'TypeScript',
      'Claude API',
    ],
    repo: 'https://github.com/kachowska/litfinder',
    live: 'https://neirosynt.com',
    featured: true,
  },
  {
    name: 'GOST & VAK bibliography formatter',
    kind: 'REST API · Claude',
    summary:
      'An API that formats bibliographic records to GOST 7.0.5-2008 and Belarusian VAK standards — the part of academic writing that eats hours and is graded strictly.',
    highlights: [
      'Parses unstructured text into a source record, then formats it — no rigid input template required',
      'Batch endpoint for whole reference lists, with a confidence score returned per record',
      'Auto-generated OpenAPI docs; the citation rules that generic reference managers get wrong for CIS requirements are the whole point',
    ],
    stack: ['Python', 'FastAPI', 'Claude API', 'OpenAPI'],
    repo: 'https://github.com/kachowska/gost-formatter-api',
    featured: true,
  },
  {
    name: 'chat_psych',
    kind: 'Analysis tool',
    summary:
      'A communication style analyser: it reads WhatsApp and Telegram chat exports and builds a profile of how a person actually communicates — response patterns, initiative, tone.',
    highlights: [
      'Processing runs locally, so private conversations never leave the machine',
      'Combines deterministic text statistics with an AI pass for interpretation',
    ],
    stack: ['TypeScript', 'Node.js', 'LLM API'],
    repo: 'https://github.com/kachowska/chat_psych',
    featured: true,
  },
  {
    name: 'Kraków real-estate price analysis',
    kind: 'Data analysis · ML',
    summary:
      'A reproducible study of what actually sets apartment prices in Kraków — from raw listings to a model whose coefficients you can read as reasons.',
    highlights: [
      '1,200+ property records cleaned: 100+ missing values resolved, duplicates and outliers removed, categoricals standardised',
      'Engineered price per m², distance to centre, building age and amenity count — the variables that turned out to matter',
      'Regularised linear regression in a scikit-learn Pipeline, cross-validated, with coefficients interpreted as price drivers',
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'Matplotlib', 'Looker Studio'],
    repo: 'https://github.com/kachowska/krakow-realestate-analysis',
  },
  {
    name: 'E-commerce sales funnel dashboard',
    kind: 'Analytics · BI',
    summary:
      'Where orders leak between browsing and delivery in the Olist Brazilian marketplace dataset — as a published dashboard, not a notebook screenshot.',
    highlights: [
      'End-to-end pipeline: ETL, feature engineering, business metrics, then a static Plotly dashboard anyone can open',
      'Includes an A/B test write-up — design, result and what it would and would not justify changing',
    ],
    stack: ['Python', 'pandas', 'Plotly', 'ETL'],
    repo: 'https://github.com/kachowska/olist-funnel-dashboard',
    live: 'https://kachowska.github.io/olist-funnel-dashboard/',
  },
  {
    name: 'Heart disease risk modelling',
    kind: 'Machine learning pipeline',
    summary:
      'A full pipeline from a tabular clinical dataset to calibrated risk scores — cleaning, modelling, calibration, evaluation and a CLI that scores new files the same way training did.',
    highlights: [
      'Several models compared, then probability calibration and threshold selection — because a raw score is not a decision',
      'Holdout evaluation with subgroup metrics, and SHAP to show which features carry the signal',
      'Packaged for reuse: saved artifacts, a prediction CLI, Dockerfile and Makefile',
    ],
    stack: ['Python', 'scikit-learn', 'SHAP', 'statsmodels', 'pandas', 'Docker'],
    repo: 'https://github.com/kachowska/heart-disease-analysis-pet-project',
  },
]

export type Role = {
  title: string
  org: string
  meta: string
  period: string
  points: string[]
  stack?: string[]
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Lead Engineer',
    org: 'Neirosynt',
    meta: 'Self-employed · Kraków, Poland · Remote',
    period: 'Jan 2026 — present',
    points: [
      'Sole engineer of a production SaaS: architecture, backend, frontend, database, external integrations and deployment.',
      'Built the full review pipeline — multi-source search, AI screening with written rationale, structured data extraction, and report synthesis with traceable citations.',
      'Shipped subscription billing end to end, plus authentication, consent handling and a data retention policy.',
      'Own the release process on constrained hardware: guarded builds, zero-downtime container swap, database snapshots before every migration.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Next.js', 'Claude API'],
  },
  {
    title: 'Freelance editor — academic texts',
    org: 'Freelance',
    meta: 'Remote',
    period: 'Apr — May 2025',
    points: [
      'Edited and restructured law theses and coursework: tightened argument structure, fixed sourcing and citation.',
      'Raised originality scores by 50%+ on average — and got my first close look at how academic writing handles its sources, and where that handling breaks. It is the reason Neirosynt exists.',
    ],
  },
]

export const EDUCATION = [
  {
    school: 'AGH University of Krakow',
    degree: 'BEng, Information Technology',
    period: 'Sep 2023 — Feb 2027',
  },
  {
    school: 'College of Business and Law',
    degree: 'Inżynier (Inż.)',
    period: 'Completed Dec 2022',
  },
]

export type Article = {
  title: string
  summary: string
  href: string
  charts?: string[]
}

export const ARTICLES: Article[] = [
  {
    title: "Poland's residential real-estate market: what moves price per m²",
    summary:
      'An exploratory pass over Polish listings — how price per square metre differs by voivodeship and building type, and why area alone explains less than you would expect.',
    href: 'https://github.com/kachowska/krakow-realestate-analysis',
    charts: [
      '/articles/median_price_per_m2.png',
      '/articles/price_by_voivodeship_box.png',
      '/articles/correlation_matrix.png',
    ],
  },
]
