/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        jokes: {
          500: "#3A0D54"
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};