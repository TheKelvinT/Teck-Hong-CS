/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: ["hover"],
      colors: {
        "gray-50": "#F7F7F7",
        "gray-400": "#7D7D7D",
        "blue-900": "#11255d",
        "orange-400": "#ff6e31",
        "orange-600": "#ef3307",
        "primary-50": "#F9F9F1",
        "primary-100": "#E6E2C3",
        "primary-400": "#BDAC62",
        "secondary-400": "#6f928b",
        "secondary-300": "#95b3ac",
        "secondary-200": "#bed1cd",
        "gold-100": "#FFCE85",
      },
      fontFamily: {
        dmsans: ["DM Sans", "san-serif"],
        montserrat: ["Monserrat", "san-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1100px",
    },
    minWidth: {
      "3/4": "75%",
    },
    maxWidth: {
      "1/4": "25%",
      "4/12": "33.33%",
      "5/12": "41.666%",
      "1/2": "50%",
      "3/4": "75%",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
    "@tailwindcss/forms",
  ],
};
