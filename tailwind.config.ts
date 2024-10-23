import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "822px",
      lg: "1023px",
      xl: "1281px",
      "2xl": "1800px",
    },
    extend: {
      colors: {
        brightOrange: "#e15c3a",
        customIndigo: "rgb(17, 17, 103)",
        customGold: "#fec246",
        customBlue: "#057ee6",
        lightGrey: "rgb(243, 243, 243)",
        customPink: "rgb(198, 55, 92)",
        customTurquoise: "rgb(98, 211, 228)",
        customWhite: "rgb(250, 249, 247)",
      },
      boxShadow: {
        customGray: "0 0 50px rgba(60, 60, 60, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
