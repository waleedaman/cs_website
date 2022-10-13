/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'gold': '#FFB200',
            'brown': '#4A3636',
            'BlueSapphire': '#2E6171',
            'TaupeGray': '#8D8D92',
            'LightGray': '#D7D6D6'
        },
        fontFamily: {
            'merienda': ['Merienda'],
            'pacifico': ['Pacifico'],
            'neue-kabel': ['Neue Kabel']
        }
    },
  },
  plugins: [],
}
