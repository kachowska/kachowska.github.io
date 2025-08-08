# Portfolio — Vite + React + Tailwind

Modern portfolio with animated hero, avatar, projects, skills & languages, and a contact form.
Build outputs to `docs/` so it can be hosted via GitHub Pages (Deploy from a branch).

## Quickstart
```bash
npm i
npm run dev
```

## Build (GitHub Pages)
```bash
npm run build   # outputs to docs/
```

## EmailJS (optional)
Create `.env.local` with:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```
Fields sent: `name`, `email`, `message`.

## Links to edit
- `src/components/Projects.tsx` — project cards (add more).
- `public/image.png` — replace with your photo.
- `public/resume.pdf` — replace with your resume.

## Deploy (user site: kachowska.github.io)
- Create the repo `kachowska.github.io` (public).
- In repo Settings → Pages: Source = Deploy from a branch, Branch = main, Folder = /docs.

Then:
```bash
npm run build
git add .
git commit -m "Publish portfolio"
git push origin main
```
