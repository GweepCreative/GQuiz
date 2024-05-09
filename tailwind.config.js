/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1A2330",
        darkGreen: "#1E4627",
        darkGray: "#303A44",
        semiGreen: "#3A7046",
        limeGreen: "#BCEC33",
      },
    },
  },
  plugins: [],
};
