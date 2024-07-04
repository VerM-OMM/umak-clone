/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        umakdarkblue: "#172458",
        umaklightblue: "#1c2c6b",
        umakskyblue: "#d7e7fa",
      },
      fontFamily: {
        marcellus: ["Marcellus", "sans-serif"],
        metropolis: ["Metropolis", "sans-serif"],
      },
    },
  },
  plugins: [],
});
