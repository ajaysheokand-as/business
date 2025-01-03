/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 10px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
