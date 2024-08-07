// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        white: '2px 2px 4px rgba(255, 255, 255, 1)', // Custom text shadow
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
