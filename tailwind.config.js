/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // MS: "768px",
      // XM: "1024px",
      // LM: "1134px",
      // L: "1225px",
      // ML: "1351px",
      // XL: "1591px",
      MS: { min: "0", max: "768px" },
      XM: [{max: '1024px'}, { min: "769px", max: "1024px" }],
      LM: [{ max: "1133px" }, { min: "1025px", max: "1133px" }],
      L: [{min: "1134px"}, { min: "1134px", max: "1224px" }],
      ML: { min: "1225px", max: "1350px" },
      XL: { min: "1351px" },
    },
    flex: {
      'auto': '1 1 auto',
      '1': '1 1 100%',
    },
    minHeight: {
      "height-content": "calc(100vh - 90px)",
    },
    backgroundImage: {
      // "dark-logo": "url('./src/assets/images/LogoDark.svg')",
      user: "url('./src/assets/images/UserClient.png)",
    },
    backgroundColor: {
      transparent: "transparent",
      purple: {
        "bg-layout": "#170f23",
        "bg-wrapper": "rgb(52, 34, 79);",
        "bg-side-bar": "rgb(255 255 255 / 5%)",
        "bg-sidebar-res": "rgb(42, 33, 58)",
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
        "text-form": "rgb(238, 238, 238)",
        "text-btn-download": "rgb(194, 115, 237)",
        "text-btn-setting": "rgb(218, 218, 218)",
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
