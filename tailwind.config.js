const { default: App } = require("next/app");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./app/**/*.{js,ts,html,jsx,tsx",
    "./components/**/*.{js,ts,html,jsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
};
