/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'krona': ['Krona One', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
      },
      colors: {
        'accent': '#95060A',
        'accentHover': '#B40001',
        'secondary': '#092441',
        'myBlack': '#2B2C32',
        'lightBlue': '#D9DFE5',
        'myWhite': '#EAEAEA',
        'myGray': '#B2B2B2',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
