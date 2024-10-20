/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#316FEE',
        'custom-blue-light': '#5A8CF1',
        'custom-gray-light': '#666666',
        'custom-red': '#EF4444',
        'custom-gray': '#999999',
        'custom-gray-dark': '##DCDCDC',
        'custom-white': '#F5F5F8',
      },
      fontSize: {
        'custom-xxs': '0.8125rem', // 13px,
        'custom-56': '3.5rem', // 56px
      },
    },
  },
  plugins: [],
}
