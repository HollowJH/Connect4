/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "gameRows": "40px 80px 1fr"
      }
    },
  },
  plugins: [],
}

