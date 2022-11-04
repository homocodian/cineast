/** @type {import('tailwindcss').Config} */
const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "280px",
      xxs: "375px",
      xs: "475px",
      ...defaultThemes.screens,
      md: "815px",
    },
    extend: {
      colors: {
        muted: "#7F7F7F",
        "custom-cyan": "#D4FFF2",
        "cineast-yellow": "#FA8D0C",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
