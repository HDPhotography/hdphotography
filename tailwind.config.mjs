export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkRed: '#6a0101',
        red: '#b00303',
        goldLight: '#c4a65d',
        goldDark: '#b0904a',
        cream: '#f5f0e6',
        beige: '#f1e8d6',
        ivory: '#fffaf2',
        brown: '#5a4a36',
        champagne: '#e0d3b8',
        oliveGray: '#998d7c'
      },
    },
  },
  plugins: [],
}