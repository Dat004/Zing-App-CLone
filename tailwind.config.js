/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {
      screens: {
        MS: [{ min: "0", max: "768px" }],
        XM: [{ max: "1024px" }, { min: "769px", max: "1024px" }],
        LM: [{ max: "1133px" }, { min: "1025px", max: "1133px" }],
        LS: { max: "1199px" },
        L: [{ max: "1224px" }, { min: "1134px", max: "1224px" }],
        LX: { max: "1280px" },
        ML: [{ max: "1350px" }, { min: "1225px", max: "1350px" }],
        XL: { min: "1351px" },
      },
      flex: {
        auto: "1 1 auto",
        1: "1 1 100%",
      },
      zIndex: {
        1: 1,
        5: 5,
        10: 10,
        20: 20,
        25: 25,
        50: 50,
        75: 75,
        100: 100,
        999: 999,
      },
      size: {
        small: "40px",
        medium: "60px",
        large: "200px",
        larger: "300px",
        "size-3.0": "300px",
        "size-2.7": "270px",
        "size-2.0": "200px",
        "size-1.5": "150px",
        "size-1.4": "140px",
        "size-0.6": "60px",
        "size-0.4": "40px",
        "size-0.3": "30px",
      },
      minHeight: {
        "height-layout": "calc(100vh - 90px)",
        "heigth-loading-layout": "calc(100vh - 158px)",
      },
      backgroundImage: {
        "linear-loading":
          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
        "bg-text-linear":
          "radial-gradient(50% 124.93% at 95.86% -10%, #3efad9 0, hsla(0, 0%, 100%, 0) 100%), linear-gradient(91.56deg, #ff9357 1.54%, #9100ff 98.71%)",
        "bg-cover-layout":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%, rgba(193, 196, 197, 0.8))",
        "bg-cover-linear":
          "linear-gradient(0deg, #0e131a, rgba(14, 19, 26, 0))  ",
      },
      backgroundColor: {
        transparent: "transparent",
        "bg-tooltip-1": "rgb(74, 144, 226)",
        "bg-tooltip-2": "rgb(39, 189, 156)",
        "bg-tooltip-3": "rgb(227, 80, 80)",
        "bg-loading": "rgba(255, 255, 255, 0.1)",
        "bg-package-plus": "rgb(142, 76, 255)",
        "bg-package-premium": "rgb(220, 165, 25)",
        "bg-purple": "rgb(155, 77, 224)",
        "bg-tippy": "rgba(51, 51, 51)",
        "bg-slider": "rgb(89,85,96)",
        "bg-current-slider": "rgb(255 255 255)",
        purple: {
          "bg-layout": "rgba(23, 15, 35)",
          "bg-blur-color": "rgba(254, 255, 255, 0.1)",
          "bg-artist-layout": "rgba(41, 21, 71, 0.8)",
          "bg-header": "rgba(23, 15, 35, 0.8)",
          "bd-player": "rgb(19, 12, 28)",
          "bg-wrapper": "rgb(52, 34, 79);",
          "bg-side-bar": "rgba(255, 255, 255, 0.05)",
          "bg-chart-box": "rgba(32, 19, 53, 0.9)",
          "bg-select-box": "rgba(255, 255, 255, 0.15)",
          "bg-sidebar-mini": "rgb(42, 33, 58)",
          "bg-btn": "rgb(255, 255, 255, 0.15)",
          "bg-btn-alpha": "rgba(255, 255, 255, 0.1)",
          "bg-partner": "rgb(247, 247, 247)",
          "bg-separator-items": "rgba(255, 255, 255, 0.1)",
          "bg-layer-time": "rgba(0, 0, 0, .7)",
          "bg-layer": "rgba(0, 0, 0, 0.5)",
        },
      },
      borderColor: {
        transparent: "transparent",
        purple: {
          "bd-primary-color": "rgba(255, 255, 255, 0.1)",
          "bd-secondary-color": "rgba(255, 255, 255, 0.05)",
          "bd-white-color": "rgba(255, 255, 255)",
          "bd-box-color": "rgba(255, 255, 255, 0.2)",
          "bd-purple-color": "rgb(155, 77, 224)",
        },
      },
      colors: {
        "first-color": "rgb(74, 144, 226)",
        "second-color": "rgb(80, 227, 194)",
        "third-color": "rgb(227, 80, 80)",
        "up-color": "rgba(29, 193, 134)",
        "down-color": "rgba(227, 80, 80)",
        "title-package-color": "rgb(20, 20, 20)",
        "plus-color": "rgb(142, 76, 255)",
        "premium-color": "rgb(220, 165, 25)",
        "white-color": "rgb(255 255 255)",
        "link-text-hover": "rgba(194, 115, 237)",
        purple: {
          "text-primary": "rgb(255, 255, 255)",
          "text-secondary": "rgba(218, 218, 218, 1)",
          "text-items": "rgba(255, 255, 255, 0.5)",
          "text-actions": "rgb(255 255 255)",
          "text-form": "rgb(238, 238, 238)",
          "text-icons": "rgb(216, 216, 216)",
          "text-btn-download": "rgb(194, 115, 237)",
          "text-btn-setting": "rgb(218, 218, 218)",
        },
        default: {},
        light: {
          "text-primary": "rgb(50, 50, 61)",
        },
      },
      opacity: {
        0: "0",
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
        100: "1",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".text-fill-transparent": {
          WebkitTextFillColor: "transparent",
        },
        ".mask-loading": {
          WebkitMask: "-webkit-linear-gradient(top, #000, transparent)",
        },
      });
    }),
  ],
};
