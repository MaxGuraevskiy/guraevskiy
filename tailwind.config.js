/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        verysmallscreen: "350px",
        mobile: "37.5em",
        small: "56.25em",
        medium: "75em",
        large: "112.5em",
      },
      fontFamily: {
        sans_pro: ["var(--font-sans-pro)"],
        manrope: ["var(--font-monrape)"],
      },
      colors: {
        bg: "#ffffff",
        darkBg: "#191919",
        color: "#000000",
        darkColor: "#ffffff",
      },
    },
  },
  // darkMode: "class",
  plugins: [],
};
