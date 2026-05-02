/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          coral:  '#FF8DA1',
          peach:  '#FFC2BA',
          pink:   '#FF9CE9',
          violet: '#AD56C4',
          // tints for backgrounds
          'coral-50':  '#fff0f3',
          'coral-100': '#ffd6dd',
          'peach-50':  '#fff7f6',
          'peach-100': '#ffe8e5',
          'pink-50':   '#fff0fc',
          'pink-100':  '#ffd6f8',
          'violet-50': '#f7eefb',
          'violet-100':'#e8ccf3',
          'violet-700':'#8b3ea3',
          'violet-800':'#6e2f82',
        },
      },
    },
  },
  plugins: [],
};
