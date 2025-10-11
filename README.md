# Portfolio

My personal portfolio site for data analyst work.

Live: https://kachowska.github.io/

## What's in here

This is a React portfolio showing my data analysis projects, skills, and contact info. Built with React + Vite because it's fast, and Tailwind for styling because I got tired of writing CSS.

Main sections:
- Projects I've worked on (real estate analysis, healthcare ML, e-commerce stuff)
- Skills and languages
- Blog posts with actual writeups of the analysis work
- Contact form (uses EmailJS but has mailto fallback)

## Tech

**Frontend**
- React 18 + TypeScript
- Vite for build/dev
- TailwindCSS
- Framer Motion for animations

**Data work** (in the actual projects, not this repo)
- Python, Pandas, NumPy
- Plotly for visualizations
- scikit-learn, statsmodels

## Setup

```bash
npm install
npm run dev
```

Runs on localhost:5173 by default.

## Building

```bash
npm run build
```

Outputs to `docs/` folder. GitHub Pages is set up to serve from there.

After building:
```bash
git add docs/
git commit -m "update build"
git push
```

## Project structure

```
/
├── public/           # static files (images, resume PDF)
├── src/
│   ├── components/   # all the React components
│   ├── App.tsx
│   └── main.tsx
├── docs/             # build output (what gets deployed)
└── vite.config.ts
```

## Notes

If you fork this as a project site (not username.github.io), you'll need to set `base` in `vite.config.ts` to your repo name.

Contact form needs EmailJS keys in `.env.local` if you want it to actually send emails. Otherwise it just opens your mail client.

## Contact

GitHub: https://github.com/kachowska
