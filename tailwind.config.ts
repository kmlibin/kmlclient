import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "300px",
      xs: "400px",
      sm: "640px",
      md: "855px",
      lg: "1100px",
      xl: "1281px",
      "2xl": "1536px",
      "3xl": "1850px",
    },
    extend: {
      colors: {
        brightOrange: "#e15c3a",
        customIndigo: "rgb(17, 17, 103)",
        customIndigoRGBA: "rgb(17, 17, 103, .25)",
        lightIndigo: "#c3c3d9",
        customGold: "#fec246",
        customDarkGold: "#d49d36",
        customGoldRGBA: "rgba(254, 194, 70, .4)",
        customOrangeRGBA: "rgba(225, 92, 58, .5)",
        customBlue: "#057ee6",
        lightGrey: "rgb(243, 243, 243)",
        customPink: "rgb(198, 55, 92)",
        customPinkRGBA: "rgb(198, 55, 92, .5)",
        customDarkPink: "rgb(148, 30, 62)",
        customTurquoise: "rgb(98, 211, 228)",
        customWhite: "#fefefe",
        blackTextFont: "#333333",
      },
      boxShadow: {
        customGray: "0 0 50px rgba(60, 60, 60, .5)",
        customSmallGrey: "0 0 5px rgba(60, 60, 60, .5)",
        customIndigo: "0 0 10px rgba(17, 17, 103, .25)",
        indigo: " 0 8px 20px rgba(17, 17, 103, 0.3);"
      },
    },
  },
  plugins: [],
};
export default config;
