/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'up-blue': '#0a192f',
        'up-dark': '#020c1b',
        'up-neon': '#64ffda',
        'up-light-blue': '#112240',
        'up-text': '#8892b0',
        'up-white': '#e6f1ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
