/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Malgun Gothic", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.10)",
        glow: "0 20px 70px rgba(37, 99, 235, 0.22)",
      },
    },
  },
  plugins: [],
};
