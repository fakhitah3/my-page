/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#000080',
        slate: '#6D8196',
        ice:   '#ADD8E6',
        snow:  '#FFFAFA',
      },
    },
  },
  plugins: [],
};
