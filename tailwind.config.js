module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./_site/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#004A7C", // mörk blå/grå med industriell känsla
          accent: "#FF6A00",  // varm accent för tydliga CTA:er
          dark: "#0B0F14"
        }
      }
    }
  },
  plugins: []
};
