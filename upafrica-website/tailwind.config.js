/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'up-dark': '#0a0f1c', // Deep blue/black background
        'up-card': '#111827', // Slightly lighter for cards
        'up-neon-blue': '#00f0ff', // Cyan
        'up-neon-orange': '#ff4d00', // Orange
        'up-text-main': '#e2e8f0', // Light gray/white text
        'up-text-muted': '#94a3b8', // Muted text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      }
    },
  },
  plugins: [],
}
