/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        hbeat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        hbeat: "hbeat 1s ease-in-out ",
      },
    },
    screens: {
      "2xs": "120px",
      xs: "360px",
      sm: "768px", // => @media (min-width: 640px) { ... }
      md: "1024px", // => @media (min-width: 1024px) { ... }
      lg: "1200px", // => @media (min-width: 1280px) { ... }
      xl: "1440px", // => @media (min-width: 1536px) { ... }
    },
    colors: {
      lime: "#3BB143",
      white: "#fff",
      red: "#FF0000",
      skyblue: "#f5f7f7",
      orange: "#E34A27",
      light_gray: "#d5d0d0",
      black: "#000000",
      secondary: "#666666",
      light_green: "#c4fbc4",
      yellow_rating: "#f4cb45",
    },
    borderColor: {
      pink: "#F2B1BC",
      default: "#CDCDCE",
      red: "#E64360",
      orange: "#FFE58F",
      green: "#25BC86",
      light_gray: "#e4e4e4",
      Charcoal: "#36454F",
    },
    fontFamily: { sans: ["Roboto", "sans-serif"] },
  },
  plugins: [],
};
