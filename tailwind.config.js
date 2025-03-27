/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--foreground)',
        secondary: 'var(--background)',
        accent: '#1A1A1A',
        dark: '#1A1A1A',
        light: 'var(--soft-light)',
        background: 'var(--background)',
        hover: {
          light: '#666666',
          dark: '#FFE4C4'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bodoni Moda', 'serif'],
      },
      letterSpacing: {
        wider: '0.1em',
        widest: '0.2em',
      }
    },
  },
  plugins: [],
} 