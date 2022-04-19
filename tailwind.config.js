const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-bean": {
          50: "#666a66",
          100: "#5c605c",
          200: "#535653",
          300: "#494c49",
          400: "#3f423f",
          500: "#363836",
          600: "#2c2e2c",
          700: "#232423",
          800: "#191a19",
          900: "#0f100f",
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: { min: "475px", max: "629px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
