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
        // sans: ["Nunito Sans", "sans-serif"],
        // sans: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        // semibold: 200,
      },
      fontSize: {
        // base: "8px",
        // xs: "20px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

