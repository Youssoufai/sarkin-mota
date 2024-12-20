/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'hero': "url('/dealer.webp')"
      },
      fontFamily: {
        parkinsans: ['Parkinsans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        yrsa: ['Yrsa', 'serif'],
      },
    },
  },
  plugins: [],
};
