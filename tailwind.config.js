module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./_site/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#18589b", // primary brand blue
          accent: "#FF6A00",  // warm accent for calls to action
          light: "#eff4fb",
          dark: "#0d2f52"
        },
        surface: {
          DEFAULT: "#f4f6f9",
          card: "#ffffff"
        }
      },
      fontFamily: {
        sans: ["Barlow", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "\"Segoe UI\"", "sans-serif"]
      }
    }
  },
  plugins: []
};
