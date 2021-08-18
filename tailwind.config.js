module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    enabled: true,
    content: ["./**/*.html",
    './src/**/*.{js,jsx,ts,tsx,vue}',],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
