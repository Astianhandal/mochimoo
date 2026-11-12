import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FCF8F5",
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#F7EFE9",
          blush: "#FFE9EC",
          matcha: "#EEF5EC",
        },
        mochi: {
          pink: "#F05365",
          "pink-hover": "#D83E50",
          "pink-light": "#FFF0F2",
          matcha: "#5B8C51",
          "matcha-hover": "#497241",
          "matcha-light": "#F0F7EE",
          taro: "#966EB9",
          "taro-light": "#F4EEF9",
          choco: "#5C382A",
          mango: "#F7A823",
          "mango-light": "#FEF7E9",
          vanilla: "#FDF5E6",
        },
        brand: {
          main: "#3B231A",
          muted: "#785E54",
          soft: "#9C8277",
          border: "#EBDDD4",
        },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "'Quicksand'", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "3rem",
      },
      boxShadow: {
        pillowy: "0 10px 30px -6px rgba(240, 83, 101, 0.12), 0 4px 12px rgba(59, 35, 26, 0.04)",
        "pillowy-hover": "0 16px 36px -6px rgba(240, 83, 101, 0.22), 0 6px 16px rgba(59, 35, 26, 0.06)",
        bento: "0 8px 24px -4px rgba(59, 35, 26, 0.06)",
        float: "0 20px 40px -10px rgba(59, 35, 26, 0.15)",
      },
      animation: {
        "bounce-slight": "bounceSlight 2.5s infinite ease-in-out",
        "float-gentle": "floatGentle 4s infinite ease-in-out",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        bounceSlight: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1.5deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

