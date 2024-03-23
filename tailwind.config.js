/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "6xl": ["64px", "80px"],
      "8xl": ["96px", "106px"],
      Mammoth: ["120px", "110px"],
    },
    extend: {
      fontFamily: {
        okine: ["Okine"],
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        wide: "1440px",
      },
      colors: {
        "off-white": "#eae5d3",
        "slate-gray": "#6D6D6D",
        "black-gray": "#212121",
        "black-gray-dark": "#18191A",
        "brand-green": "#67B99A",
        "brand-green-light": "#88D4AB",
        "brand-green-dark": "#14746F",
      },
    },
  },
  plugins: [],
};
