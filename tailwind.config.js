/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E6FFF",
        primaryFade: "#EDF4FF",
        graybg: "#F5F5F5",
        grayLight: "#EBEBEB",
        grayLighter: "#617DA4",
        grayLightest: "#8494AC",
        grayDarker: "#2A456B",
        lightBeerus: "#F2F2F2",
        darkTrunks: "#999CA0",
        purpleLight: "#E7E9FE",
        blueLight: "#D2E3FF",
        lightBlue: "#E0EEF9",
        cardBlue: "#F4FAFF",
        blueLink: "#0E6FFF",
        blueBgLight: "#EEF4FF",
        red: "#D33030",
        divider: "#D8D8D8",
        positive: "#4AD15F",
        negative: "#D33030",
        lavender: "#e2e4fa",
      },
      boxShadow: {
        primary: "0px 4px 12px rgba(14, 111, 255, 0.6);",
        black:
          "0px 8px 24px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xxs: "390px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
