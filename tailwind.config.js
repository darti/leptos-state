/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html", "./app/src/**/*.rs"
  ],
  safelist: [

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    logs: false,
  },
}
