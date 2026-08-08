/** @type {import('tailwindcss').Config} */
// Единственный конфиг Tailwind. Раньше их было два (.js с palette primary/secondary
// и .cjs с sage/cream), а компоненты использовали классы из .cjs — при сборке
// побеждал .js, и половина стилей просто не существовала. Дубликат удалён.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Та же палитра, что на баннере LinkedIn — личный бренд должен читаться
        // одинаково в обоих местах.
        ink: {
          900: '#131d24',
          800: '#1b2831',
          700: '#22323d',
          600: '#2c404d',
          500: '#3b5464',
        },
        mist: {
          50: '#f4f7f8',
          100: '#e3eaed',
          200: '#c2d0d6',
          300: '#9bb0b9',
          400: '#7f97a3',
          500: '#5f7480',
        },
        brand: {
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '68rem',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise .6s cubic-bezier(.22,.61,.36,1) both',
      },
    },
  },
  plugins: [],
}
