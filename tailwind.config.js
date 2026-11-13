/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cobalt: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe2fe',
          300: '#93d0fd',
          400: '#60b5fa',
          500: '#3b95f6',
          600: '#2577eb',
          700: '#1d60d8',
          800: '#1e4eaf',
          900: '#1e448a',
          950: '#172b54',
        },
        steel: {
          850: '#18202c',
          900: '#111722',
          950: '#0a0e16',
        }
      }
    }
  },
  plugins: [],
}
