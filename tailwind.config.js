/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*"],
  theme: {
    fontFamily: {
      body: "Plus Jakarta Sans",
      inter: "Inter",
    },
    extend: {
      colors: {
        primary: "#F44335",
      },
      fontSize: {
        main: "18px",
      },
    },
  },
  plugins: [],
};
