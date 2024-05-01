/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./**/*.{html,js}"],
  content: ["./**/*.html", "./scripts/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        overrlay: "#f9f6f6ca",
      },
    },
  },
  plugins: [],
};
