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

### Prerequisites
- Node.js (version 18 or newer)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kachowska/portfolio-enhanced.git
   cd portfolio-enhanced
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section with stats
│   ├── Blog.tsx         # Articles with search/filter
│   ├── Contact.tsx      # Contact form with validation
│   ├── Experience.tsx   # Interactive experience timeline
│   ├── Footer.tsx       # Footer with social links
│   ├── Hero.tsx         # Hero section with animations
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Preloader.tsx    # Loading animation
│   ├── Projects.tsx     # Project showcase with filters
│   ├── Skills.tsx       # Skills with progress bars
│   ├── Testimonials.tsx # Testimonials carousel
│   ├── LazyImage.tsx    # Optimized image component
│   ├── ScrollToTop.tsx  # Scroll to top button
│   └── ThemeProvider.tsx # Theme context provider
├── hooks/               # Custom React hooks
│   └── usePerformance.ts # Performance optimization hooks
├── utils/               # Utility functions
│   └── pwa.ts          # PWA functionality
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles and Tailwind
```

## Contact

GitHub: https://github.com/kachowska
