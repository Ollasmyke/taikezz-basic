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
        'primary': '#092441',
        'secondary': '#092441',
        'myBlack': '#1A1A1A',
        'myWhite': '#EAEAEA',
        'myGray': '#B2B2B2',
      }
    },
  },
  plugins: [],
}
