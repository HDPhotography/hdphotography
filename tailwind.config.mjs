/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(to right, #b00303, #6a0101)',
        'gold-gradient': 'linear-gradient(to right, #c4a65d, #b0904a)',
      },
    },
  },
  plugins: [],
}