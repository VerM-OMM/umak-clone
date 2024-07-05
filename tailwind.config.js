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
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".font-light-simulated": {
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
          },
          ".font-medium-simulated": {
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
          },
          ".font-bold-simulated": {
            textShadow: "1px 1px 1px rgba(0, 0, 0, 0.3)",
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
});
