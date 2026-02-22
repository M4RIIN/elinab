/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F8F8',
        nude: '#EEEEEE',
        blush: '#E1E1E1',
        sand: '#C9C9C9',
        gold: '#8C8C8C',
        ink: '#101010',
        cocoa: '#4A4A4A',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', '"Times New Roman"', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -22px rgba(16, 16, 16, 0.28)',
        lift: '0 22px 60px -28px rgba(16, 16, 16, 0.4)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
