/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["GeistSans", "GeistSans Fallback", "sans-serif"],
      },
    },
  },
  plugins: [],
};
