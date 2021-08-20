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
    fontFamily: {
      'quicksand': ['Quicksand','sans-serif']
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    }
  },
  plugins: 
  [
  require("@tailwindcss/typography"),
  require('@tailwindcss/forms'),
  ],
};
