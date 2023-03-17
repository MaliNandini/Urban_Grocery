/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xs': '120px',
      xs: '360px',

      sm: '768px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',

      // => @media (min-width: 1024px) { ... }

      lg: '1200px',
      // => @media (min-width: 1280px) { ... }

      xl: '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      lime: '#3f6212',
      white: '#fff',
      red : '#FF0000',
      skyblue:"#f5f7f7",
      
    }, borderColor: {
      pink: '#F2B1BC',
      default: '#CDCDCE',
      red: '#E64360',
      orange: '#FFE58F',
      green: '#25BC86',
      light_gray: '#e4e4e4',
    },
   
  },
  plugins: [],
};
