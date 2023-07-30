/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Marcellus", "serif"],
      },
      colors: {
        primary: "#8A1538",
        beige: "#F5EEDC",
        green: "#5F7D5F",
        gray: "#333333",
        yellow: "#FFC857",
        blue: "#4B778D",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero_bg.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
