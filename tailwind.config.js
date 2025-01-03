/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "fuchsia-dark": "#8e44ad",
      fuchsia: "#9b59b6",
      "fuchsia-light": "#a29bfe",
      "purple-dark": "#9b59b6",
    },
    extend: {
      fontFamily: {
        sans: ["Anybody", "system-ui"],

    },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};

