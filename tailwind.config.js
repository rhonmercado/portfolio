/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
 theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6366F1', // Tailwind's indigo-500
          dark: '#4F46E5'     // Tailwind's indigo-600
        }
      }
    }
  },
  plugins: [],
}
