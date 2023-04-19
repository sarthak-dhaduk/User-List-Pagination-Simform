/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightYellow: "#feb23e",
        darkYellow: "#f19e27",
      },
    },
  },
  plugins: [],
};
