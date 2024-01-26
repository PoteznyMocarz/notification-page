/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: "'Plus Jakarta Sans', sans-serif;"
      },

      colors: {
        redColor: "hsl(1, 90%, 64%)",
        blueColor: "hsl(219, 85%, 26%)",
        whiteColor: "hsl(0, 0%, 100%)",
        veryLGBColor: "hsl(210, 60%, 98%)",
        lgb1Color: "hsl(211, 68%, 94%)",
        lgb2Color: "hsl(205, 33%, 90%)",
        grayishBlueColor: "hsl(219, 14%, 63%)",
        darkGBColor: "hsl(219, 12%, 42%)",
        veryDBColor: "hsl(224, 21%, 14%)"
      }
    },
  },
  plugins: [],
}

