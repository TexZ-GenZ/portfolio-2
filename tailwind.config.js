/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F5EBE0',
          100: '#EAD7C2',
          200: '#DEB887',
          300: '#D2B48C',
          400: '#CD853F',
          500: '#D2691E',
          600: '#A0522D',
          700: '#8B4513',
          800: '#6B3308',
          900: '#4A2511',
        },
        secondary: {
          50: '#F9F5F1',
          100: '#F4EAE0',
          200: '#E9D5C1',
          300: '#DFC0A2',
          400: '#D4AB83',
          500: '#C99764',
          600: '#B17844',
          700: '#996633',
          800: '#805422',
          900: '#664211',
        },
        accent: {
          50: '#FFFAF0',
          100: '#FEF5E7',
          200: '#FAEBD7',
          300: '#F5DEB3',
          400: '#F4A460',
          500: '#E9967A',
          600: '#D87B58',
          700: '#C76036',
          800: '#B24614',
          900: '#8B2500',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'skill': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'project': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
      },
    },
  },
  plugins: [],
};