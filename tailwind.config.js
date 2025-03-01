/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        'white': '0 0 4px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
};