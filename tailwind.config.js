/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["GTAmerica"],
        body: ["GTAmericaLight"],
      },
      colors: {
        lightGray: "#fafaf9",
      },
    },
  },
  plugins: [],
};
