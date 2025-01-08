/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,jsx}",
  ],
  themes: [
    {
      dark: {
        current: "white",
        primary: "#ff4785",
        "primary-focus": "#ff0a78",
        "primary-content": "#ffffff",
        secondary: "#f000b8",
        "secondary-focus": "#bd0091",
        "secondary-content": "#ffffff",
        accent: "#37cdbe",
        "accent-focus": "#2aa79b",
        "accent-content": "#ffffff",
        neutral: "#3d4451",
        "neutral-focus": "#2a2e37",
        "neutral-content": "#ffffff",
        "base-100": "#ffffff",
        "base-200": "#f9fafb",
        "base-300": "#d1d5db",
        "base-content": "#1f2937",
        info: "#2094f3",
        success: "#009485",
        warning: "#ff9900",
        error: "#ff5724",
        black: "black",
        white: "white",
        footer: "#578E7E",
      },
    },
  ],
  theme: {
   
    
    colors: {
      dark: "black",
      'bg-primary': "#0d1117",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      "fuchsia-dark": "#8e44ad",
      fuchsia: "#9b59b6",
      "fuchsia-light": "#a29bfe",
      "purple-dark": "#9b59b6",
      footer: "#578E7E",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      
        
    },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
   darkTheme: "black",
    base: true,
    styled: true,
  },
};

