/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'gravitas': ['Gravitas One', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
