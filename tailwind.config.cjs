/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#FAF9F6',
          200: '#F5F3ED',
          300: '#E8E5DC',
          400: '#D4CFC3',
          500: '#B8B0A1',
        },
        sage: {
          50: '#F6F7F6',
          100: '#E8EAE8',
          200: '#D1D5D1',
          300: '#A8AEA8',
          400: '#6B736B',
          500: '#4A524A',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
