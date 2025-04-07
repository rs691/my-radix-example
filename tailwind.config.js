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
      transparent: "transparent",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      "fuchsia-dark": "#8e44ad",
      fuchsia: "#9b59b6",
      "fuchsia-light": "#a29bfe",
      "purple-dark": "#9b59b6",
      purple: "#a29bfe",
      'bg-primary': "#0d1117",
      blue: "#1fb6ff",
      
      indigo: "#5b5fe8",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      red: "#ff5c8d",
      footer: "#578E7E",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sans2: ["Anybody", "sans-serif"],   
    },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark", "light"],
  
  },
};

