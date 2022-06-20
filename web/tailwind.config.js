/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
        736: "736px",
        536: "536px",
        496: "496px",
        320: "320px",
        240: "240px",
      },
      minHeight: {
        240: "240px",
        320: "320px",
      },
      screens: {
        md: "992px",
        lg: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
