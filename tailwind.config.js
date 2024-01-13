/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      aspectRatio: {
        'preview': '3/2'
      }
    },
  },
  plugins: [],
}

