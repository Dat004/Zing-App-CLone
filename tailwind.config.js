/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      MS: "768px",
      XM: "1024px",
      LM: "1134px",
      L: "1225px",
      ML: "1351px",
      XL: "1591px",
    },
    colors: {
      light: {},
      default: {},
      darks: {},
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    fontFamily: {

    },
    extend: {},
  },
  plugins: [],
};
