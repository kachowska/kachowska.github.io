export default function Footer() {
  return (
    <footer className="border-t border-sage-100 bg-cream-50 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Name */}
          <div>
            <h3 className="font-serif text-2xl font-light text-sage-500 mb-2">
              Katsiaryna Pukhouskaya
            </h3>
            <p className="text-xs uppercase tracking-wider text-sage-300">
              Data Analyst & Developer
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-6 text-xs uppercase tracking-wider text-sage-400">
              <a href="https://github.com/kachowska" target="_blank" rel="noreferrer" className="hover:text-sage-500 transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/kachowska" target="_blank" rel="noreferrer" className="hover:text-sage-500 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:pukhouskaya@gmail.com" className="hover:text-sage-500 transition-colors">
                Email
              </a>
            </div>
            <p className="text-xs text-sage-300">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
