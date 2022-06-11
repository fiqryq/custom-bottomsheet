module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      borderRadius: {
        10: "0.625rem",
      },
      maxWidth: {
        480: "480px",
      },
      inset: {
        "60-px": "60px",
      },
      width: {
        "1/7": "14.2857143%",
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
