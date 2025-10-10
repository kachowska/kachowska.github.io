# Enhanced Portfolio - Katsiaryna Pukhouskaya

A modern, fully-featured portfolio website for data analyst Katsiaryna Pukhouskaya, built with React, TypeScript, and cutting-edge web technologies.

## ✨ Features

### 🎨 Modern UI/UX Design
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Glass Morphism Effects**: Modern design with backdrop blur and gradients
- **Interactive Elements**: Hover effects, micro-interactions, and fluid transitions

### 🚀 Enhanced Functionality
- **Interactive Project Filtering**: Filter projects by category with search functionality
- **Skills Progress Visualization**: Animated skill bars with proficiency levels
- **Dynamic Contact Form**: Full-featured form with validation using React Hook Form
- **Testimonials Carousel**: Interactive testimonials with navigation controls
- **Blog/Articles Section**: Searchable articles with category filtering
- **Progressive Web App**: Offline support, installable, with service worker

### 📊 Data-Focused Content
- **Real Estate Analysis**: Polish market analysis with visualizations
- **E-commerce Analytics**: Brazilian marketplace insights and dashboards  
- **Machine Learning Projects**: Customer churn prediction and segmentation
- **Business Intelligence**: Sales analytics and operational efficiency studies

### ⚡ Performance Optimizations
- **Code Splitting**: Automatic chunking for optimal loading
- **Lazy Loading**: Images and components loaded on demand
- **Service Worker**: Offline functionality and caching
- **Performance Monitoring**: Network-aware optimizations
- **SEO Optimized**: Structured data, meta tags, and accessibility

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Animations & Interactions
- **Framer Motion** - Production-ready motion library
- **React Intersection Observer** - Scroll-triggered animations
- **Lucide React** - Beautiful, customizable icons

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **React Hot Toast** - Elegant toast notifications

### PWA & Performance
- **Service Worker** - Offline support and caching
- **Workbox** - PWA best practices
- **Performance Hooks** - Custom hooks for optimization

## 🚀 Getting Started

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
VITE_CONTACT_EMAIL=your.email@example.com
VITE_LINKEDIN_URL=your-linkedin-profile
VITE_GITHUB_URL=your-github-profile
VITE_ANALYTICS_ID=your-analytics-id
```

### Theme Customization
Modify `tailwind.config.js` to customize:
- Color palette
- Typography scale
- Animation timings
- Breakpoints

## 🚀 Deployment

### GitHub Pages
```bash
npm run build
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Vercel
```bash
npm run build
# Connect GitHub repo to Vercel
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 4s

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Katsiaryna Pukhouskaya**
- Email: katsiaryna.pukhouskaya@email.com
- LinkedIn: [linkedin.com/in/katsiaryna-pukhouskaya-0086b8195](https://www.linkedin.com/in/katsiaryna-pukhouskaya-0086b8195/)
- GitHub: [github.com/kachowska](https://github.com/kachowska)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ and ☕ by Katsiaryna Pukhouskaya