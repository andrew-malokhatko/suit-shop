/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        'light-white': "#CBCBCB",
      },
      boxShadow: {
        'btn-default': '0px 0px 40px 5px #FFC700'
      },
      backgroundImage: {
        'about-us': "url('/images/about-us-background.png')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}