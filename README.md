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

## 🎯 Key Enhancements

### 1. Interactive Hero Section
- **Dynamic Role Animation**: Cycles through professional titles
- **Floating Elements**: Animated background particles
- **Gradient Animations**: Moving gradient backgrounds
- **Skill Pills**: Interactive technology tags

### 2. Advanced Project Showcase
- **Category Filtering**: Filter by project type
- **Search Functionality**: Search across titles and descriptions
- **Featured Projects**: Highlighted major projects
- **Detailed Metrics**: Performance indicators for each project

### 3. Enhanced Contact Experience
- **Multi-step Form**: Detailed project inquiry form
- **Real-time Validation**: Instant feedback on form fields
- **Project Type Selection**: Dropdown for service types
- **Budget and Timeline**: Structured project planning

### 4. Performance Features
- **Lazy Loading**: Images load only when visible
- **Code Splitting**: JavaScript bundles optimized for loading
- **Service Worker**: Offline functionality and caching
- **Network Awareness**: Adapts to connection speed

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#3b82f6` to `#1d4ed8`)
- **Secondary**: Green gradient (`#22c55e` to `#15803d`)
- **Accent**: Pink gradient (`#ec4899` to `#be185d`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Regular weight, optimized line height

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Vertical entrance animations
- **Hover Effects**: Scale and lift interactions
- **Loading States**: Skeleton screens and spinners

## 📱 Progressive Web App

The portfolio is a full PWA with:
- **Offline Support**: Works without internet connection
- **Installable**: Can be installed on desktop and mobile
- **Service Worker**: Caches resources for fast loading
- **Responsive**: Adapts to all screen sizes
- **Touch Friendly**: Optimized for mobile interactions

## 🔧 Configuration

### Environment Variables
Create a `.env` file for customization:
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
