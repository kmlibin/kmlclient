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
      md: "819px",
      lg: "1023px",
      xl: "1281px",
      "2xl": "1536px",
      "3xl": "1850px",
    },
    extend: {
      colors: {
        brightOrange: "#e15c3a",
        customIndigo: "rgb(17, 17, 103)",
        customIndigoRGBA: "rgb(17, 17, 103, .25)",
        customGold: "#fec246",
        customGoldRGBA: "rgba(254, 194, 70, .4)",
        customOrangeRGBA: "rgba(225, 92, 58, .5)",
        customBlue: "#057ee6",
        lightGrey: "rgb(243, 243, 243)",
        customPink: "rgb(198, 55, 92)",
        customPinkRGBA: "rgb(198, 55, 92, .5)",
        customTurquoise: "rgb(98, 211, 228)",
        customWhite: "rgb(250, 249, 247)",
      },
      boxShadow: {
        customGray: "0 0 50px rgba(60, 60, 60, .5)",
        customSmallGrey: "0 0 5px rgba(60, 60, 60, .5)",
        customIndigo: "0 0 10px rgba(17, 17, 103, .25)",
      },
    },
  },
  plugins: [],
};
export default config;
