/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html", "./src/**/*.rs"
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
