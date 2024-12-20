const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        notoserif: ["Noto Serif", "sans-serif"],
        custom: ["Mokoto","sans-serif"]
      },
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      cyan: colors.cyan,
      green: colors.green,
      bg: colors.white,
    },
    screens: {
      xxs: "320px",
      xs: "425px",
      sm: "640px",
      md: "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  variants: {
    transitionProperty: ["hover", "focus"],
    extend: {
      transform: ["hover", "focus", "active"],
    },
  },
  plugins: [],
}
