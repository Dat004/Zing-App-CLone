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
    minHeight: {
      "height-content": "calc(100vh - 90px)",
    },
    backgroundImage: {
      "dark-logo": "url('./src/assets/images/LogoDark.svg')",
      purple: {},
    },
    backgroundColor: {
      purple: {
        "bg-layout": "#170f23",
        "bg-side-bar": "rgb(255 255 255 / 5%)",
        "bg-active-items": "rgba(255, 255, 255, 0.1)",
      },
    },
    borderColor: {
      transparent: "transparent",
      purple: {
        "bd-color": "#9b4de0",
        "bd-separator-color": "rgba(255, 255, 255, 0.1)",
      },
    },
    colors: {
      purple: {
        "text-primary": "#FFF",
        "text-secondary": "#DADADA",
        "text-navigation": "#dadada",
      },
      default: {},
      light: {},
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
