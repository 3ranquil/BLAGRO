/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#059669",
          primary_hover: "#047857",
          primary_light: "#ecfdf5",
          primary_border: "#a7f3d0",
          invoice_blue: "#1e3a8a",
          invoice_blue_header: "#172554",
          invoice_blue_light: "#eff6ff",
          invoice_blue_border: "#bfdbfe",
          receipt_green: "#065f46",
          receipt_green_header: "#064e3b",
          receipt_green_light: "#ecfdf5",
          receipt_green_border: "#a7f3d0",
          dark: "#09090b",
          surface: "#18181b",
        },
      },
    },
  },
  plugins: [],
};
