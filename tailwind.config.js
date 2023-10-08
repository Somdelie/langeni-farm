/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    screens: {
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      bodyFont: ["Nunito", "sans-serif"],
      titleFont: ["Nunito", "sans-serif"],
    },
    // #212428
    colors: {
      bodyColor: "white",
      lightText: "black",
      boxBg: "yellow",
      designColor: "red",
    },
    boxShadow: {
      shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
    },
  },
};
export const plugins = [];
