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
      screens: {
        xs: "320px", // phone
        sm: "576px", // phone+
        md: "768px", // tablet
        lg: "992px", // desktop
        xl: "1200px", // desktop wide
      },
    },
  },
  plugins: [],
};
