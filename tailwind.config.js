/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 11px 67px 8px rgba(0, 0, 0, 0.75)",
      },

      screens: {
        xs: "480px", 
      },
    },
  },
  plugins: [],
};
