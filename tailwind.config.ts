import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        emilys: ["Emilys Candy", "serif"],
        monte: ["MonteCarlo", "cursive"],
      },
      colors: {
        lightBeige: "#f0e7e2",
        softCream: "#fffcf9",
        btnColor: "#bfe1a2",
        lightGreen: "#c1e39e",
        customPeach: "#f4d9cd",
      },
      screens: {
        "xl-1500": "1500px",
      },
      maxWidth: {
        "1536": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
