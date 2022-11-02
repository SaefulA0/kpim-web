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
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
  },
  plugins: [],
};
