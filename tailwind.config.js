/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          custom: '#1428A0',
          selected: '#007aff',
        },
      },
    },
  },
  plugins: [],
}

