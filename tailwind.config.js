/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: "#0b0f14",
      },
      boxShadow: {
        card: "0 0 50px rgba(0,0,0,0.25)",
      }
    },
  },
  plugins: [],
}
