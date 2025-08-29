# kachowska.github.io

This repository hosts the static portfolio site for **Katsiaryna Pukhouskaya**, showcasing projects and experience as a data analyst.

## Tech Stack
- [React](https://reactjs.org/) for building the user interface.
- [Vite](https://vitejs.dev/) for the development server and build tooling.
- Deployed via [GitHub Pages](https://pages.github.com/).

## Getting Started

### Prerequisites
- Node.js (version 18 or newer) and npm.

### Install dependencies
```bash
npm install
```

### Environment variables
Create a `.env` file in the project root to define any variables needed for local development. Variables must be prefixed with `VITE_` to be exposed to the client. Example:
```bash
VITE_API_URL=https://api.example.com
```

### Run the site locally
```bash
npm run dev
```

### Build for production
```bash
npm run build
```
The compiled output will be generated in the `dist/` directory.

### Preview the production build
```bash
npm run preview
```

## Deployment
This repository serves the compiled static files via GitHub Pages. To deploy updated content:
1. Run `npm run build` in the source project.
2. Copy the generated `dist/` contents into this repository.
3. Commit and push to the `main` branch. GitHub Pages will automatically serve the updated site at `https://kachowska.github.io`.

