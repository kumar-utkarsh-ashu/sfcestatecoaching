/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F2942",
          "navy-light": "#1B365D",
          "navy-dark": "#0B1D30",
          slate: "#335C81",
          "slate-light": "#4A779D",
          "slate-dark": "#23415C",
          coral: "#E26D5C",
          orange: "#F26419",
          "orange-hover": "#D8540E",
          bg: "#F8FAFC",
          card: "#FFFFFF",
          muted: "#64748B",
          dark: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["Lusitana", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

