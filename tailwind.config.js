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
        }
    },
  },
  plugins: [],
}
