/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gototop': '1.2s linear infinite alternate-reverse'
      }
    }
  },
  plugins: [],
}