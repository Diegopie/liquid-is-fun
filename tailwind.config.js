const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/**/*.liquid", "./sections/**/*.liquid", "./snippets/**/*.liquid", "./templates/**/*.liquid"],
  /* 
    Prefix shouldn't be used, it saves about 6 kB (uncompressed) but each section will
    cost an additional 0.2-0.5 kB in class names being longer, so with 15 or so
    tailwind sections we will have wasted dev time writing tw- in front of everything,
    and now cost more in bundle size being sent down.
  */
  theme: {
    fontFamily: {
    },
    extend: {
      screens: {
      },
      spacing: {
      },
      colors: {
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      animation: {
        "fade-in": "fade-in 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-in-left": "slide-in-left 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
        "slide-in-right": "slide-in-right 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
        "slide-in-v": "slide-in-v 0.4s cubic-bezier(0.33, 1, 0.68, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "slide-in-v": {
          "0%": {
            bottom: "-100%",
          },
          "100%": {
            bottom: "0%",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
