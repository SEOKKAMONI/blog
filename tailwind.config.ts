import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#222222",
        gray: "#666666",
        lightGray: "#F6F6F6",
        mediumGray: "#d9d9d9",
      },
      screens: {
        "max-1100": { max: "1100px" },
        "max-650": { max: "650px" },
      },
    },
  },
};

export default config;
