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
        'hero': "linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.427)), url('/dealer.webp')",
        'client': "linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.427)), url('/fact-bg.jpg')"
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
