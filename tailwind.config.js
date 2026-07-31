/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#16231C",
        forestSoft: "#1E2F24",
        ivory: "#F6F0E4",
        ivorySoft: "#EFE7D6",
        amber: "#D4A24C",
        clay: "#A8462F",
        coral: "#E2721A",
        sage: "#7C8B6F",
        rose: "#C97B93",
        ink: "#20241D",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ['"Work Sans"', "sans-serif"],
        script: ["Telma", "cursive"],
      },
    },
  },
  plugins: [],
};
