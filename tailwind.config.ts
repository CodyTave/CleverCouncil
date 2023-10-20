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
        aca: { 0: "#009fe3", 1: "#1187B9", 2: "#F1FBFF", 3: "#ecf9ff" },
        tech: { 0: "#CF4187", 1: "#B02D6E", 2: "#FDF5F9" },
        com: { 0: "#C6A180", 1: "#FFF9F4" },
        secondary: {
          0: "#2b2c6b",
          1: "#916dde",
          2: "#ebebff",
          3: "#6163b4",
          4: "#23245d",
        },
        light: { 0: "#ebebff", 1: "#fbf1f5" },
        ph: { 0: "#ababc4", 1: "#e3e3ec", 2: "#f4f4f4", 3: "#636496" },
      },
      backgroundColor: {
        aca: { 0: "#009fe3", 1: "#1187B9", 2: "#F1FBFF", 3: "#ecf9ff" },
        tech: { 0: "#CF4187", 1: "#B02D6E", 2: "#FDF5F9" },
        com: { 0: "#C6A180", 1: "#FFF9F4" },
        secondary: {
          0: "#2b2c6b",
          1: "#916dde",
          2: "#ebebff",
          3: "#6163b4",
          4: "#23245d",
        },
        light: { 0: "#ebebff", 1: "#fbf1f5" },
        ph: { 0: "#ababc4", 1: "#e3e3ec", 2: "#f4f4f4", 3: "#636496" },
      },
      screens: {
        ///clever landing pages bps
        tn: "265px",
        xxs: "350px",
        xs: "420px",
        msm: "485px",
        sm: "640px",
        md: "768px",
        xmd: "820px",
        mlg: "900px",
        lg: "1024px",
        xlg: "1150px",
        mxl: "1370px",
        xl: "1536px",
        xxl: "1620px",
        xxxl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;
