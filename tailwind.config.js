/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'logo-gold': '#FED439',
        'spotify': '#1DB954',
        'apple-music': '#FC3C44',
        'youtube': '#FF0000',
        'amazon': '#00A8E1',
        'instagram': '#DD2A7B',
      }
    },
  },
  plugins: [],
}

