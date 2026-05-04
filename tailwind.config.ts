import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "rgb(20 73 53)",
        graphite: "#27352d",
        sage: "rgb(39 99 71)",
        gold: "rgb(243 192 15)",
        cream: "rgb(255 252 223)",
        ember: "rgb(239 43 57)",
        clay: "rgb(234 139 47)",
        forest: {
          50: "rgb(255 252 223)",
          100: "#e7efdf",
          700: "rgb(39 99 71)",
          800: "rgb(20 73 53)",
          900: "#0d3527",
        },
        harvest: {
          100: "#fff5a7",
          300: "rgb(243 192 15)",
          500: "#c99507",
        },
        earth: {
          50: "rgb(255 252 223)",
          100: "#f6edbc",
          700: "#57472a",
        },
        council: {
          red: "rgb(239 43 57)",
          orange: "rgb(234 139 47)",
          yellow: "rgb(243 192 15)",
          green: "rgb(20 73 53)",
        },
        ink: "rgb(20 73 53)",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(20, 73, 53, 0.12)",
        lift: "0 26px 70px rgba(20, 73, 53, 0.22)",
        warm: "0 18px 55px rgba(234, 139, 47, 0.20)",
      },
      borderRadius: {
        organic: "38% 62% 45% 55% / 55% 40% 60% 45%",
      },
    },
  },
  plugins: [],
};

export default config;
