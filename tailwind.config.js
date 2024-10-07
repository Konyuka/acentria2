/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#4d4f51",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        semibold: 200,
      },
      fontSize: {
        base: "8px", 
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

