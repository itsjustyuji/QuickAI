/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5044E5", // your custom color
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"], // your Google font
      },
    },
  },
  plugins: [],
}
