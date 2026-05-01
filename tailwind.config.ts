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
        charcoal: "#171e19",
        graphite: "#272727",
        sage: "#b7c6c2",
        gold: "#ffe17c",
        forest: {
          50: "#eef5ef",
          100: "#d8e8da",
          700: "#28533a",
          800: "#17633f",
          900: "#0f4f35",
        },
        harvest: {
          100: "#fff4bd",
          300: "#ffe17c",
          500: "#d8a91f",
        },
        earth: {
          50: "#fff9df",
          100: "#f5edc8",
          700: "#4d3b27",
        },
        council: {
          red: "#ef2e3b",
          orange: "#f28c22",
          yellow: "#f4c400",
          green: "#0f4f35",
        },
        ink: "#171e19",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 30, 25, 0.10)",
        lift: "0 24px 60px rgba(23, 30, 25, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
