/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true},
    extend: {
      colors:{
        'primary': '#0FF1F6',
        'secondary': '#07292F',
        'forground': '#002228'
      },
    },
  },
  plugins: [],
}

