# Katsiaryna Pukhouskaya — Data Analyst Portfolio

Live site: **https://kachowska.github.io/**

A concise, modern portfolio for a junior data analyst showcasing projects, skills, and ways to get in touch.  
Built with React + Vite + Tailwind + Framer Motion.

## Highlights

- Hero section with avatar and animated background
- Featured projects with links to GitHub and live demos
- Skills & Languages (Python, SQL, React, etc.)
- Contact form (EmailJS-ready) and “Download CV” button
- Fast, responsive, accessible design

## Featured project

**E-commerce Sales Funnel Dashboard (Olist)**  
End-to-end workflow: ETL → metrics → Plotly dashboard → mock A/B test  
- Live demo: https://kachowska.github.io/olist-funnel-dashboard/  
- A/B report: https://kachowska.github.io/olist-funnel-dashboard/abtest.html  
- Code: https://github.com/kachowska/olist-funnel-dashboard

## Tech stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS, Framer Motion  
- **Data viz (in projects):** Pandas, Plotly, statsmodels  
- **Forms (optional):** EmailJS

## Project structure

kachowska.github.io/
├─ public/ # static assets (your avatar image.png, resume.pdf)
├─ src/
│ ├─ components/ # Hero, Projects, Skills, About, Contact, etc.
│ ├─ App.tsx
│ └─ main.tsx
├─ docs/ # production build (deployed by GitHub Pages)
├─ vite.config.ts # base config + outDir=docs
└─ tailwind.config.cjs


## Development

```bash
npm install
npm run dev

Build & Deploy
This repository deploys via GitHub Pages from the docs/ folder.
npm run build          # outputs production files to docs/
git add .
git commit -m "Build site"
git push

If you fork this project as a project site (not a user site), set base in vite.config.ts to /<repo-name>/.
Contact
GitHub: https://github.com/kachowska
Portfolio: https://kachowska.github.io/
The contact form on the website delivers messages via EmailJS (optional).
