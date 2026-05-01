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
        charcoal: "#000000",
        graphite: "#333333",
        sage: "#ffffff",
        gold: "#e69520",
        inverse: "#cc3366",
        forest: {
          50: "#f2f8f5",
          100: "#dcefe7",
          700: "#0b8153",
          800: "#07774b",
          900: "#055f3d",
        },
        harvest: {
          100: "#f7d8ad",
          300: "#e69520",
          500: "#b96e11",
        },
        earth: {
          50: "#ffffff",
          100: "#f5f5f5",
          700: "#333333",
        },
        council: {
          red: "#cc3366",
          orange: "#e69520",
          yellow: "#e69520",
          green: "#07774b",
        },
        ink: "#000000",
      },
      boxShadow: {
        soft: "rgba(0, 0, 0, 0.2) 0px 0px 13px 0px",
        lift: "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px",
      },
    },
  },
  plugins: [],
};

export default config;
