const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "white",
        none: "none",
        lightblue: '#F4F9FC',
        lightgreen: '#BBD187',
        darkgreen: '#526E11'
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      fontWeight: {
        thin: 200,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".wrapper": {
          maxWidth: "1400px",
          width: "95%",
          margin: "0 auto",
        },
        ".modalIcon": {
          backgroundColor: "#526E11",
          color: "white",
          borderRadius: "100%",
          padding: "15px",
          width: "30px",
          height: "30px",
          marginBottom: "10px",
        },
      });
    }),
  ],
};
