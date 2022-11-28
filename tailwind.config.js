/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBG: "url(../public/img/heroBG.png)",
        cardBG1: "url(../public/img/dashboardsvg/card-bg-1.svg)",
        cardBG2: "url(../public/img/dashboardsvg/card-bg-2.svg)",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [],
};
