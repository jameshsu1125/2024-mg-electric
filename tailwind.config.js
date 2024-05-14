/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    fontFamily: {
      mxBlack: ['MX Black', 'sans-serif'],
      mxBold: ['MX Bold', 'sans-serif'],
      mxBook: ['MX Book', 'sans-serif'],
      mxHeavy: ['MX Heavy', 'sans-serif'],
    },
    colors: {
      ...color,
      primary: '#870000',
      secondary: '#ff6600',
      tertiary: '#ff0066',
      quaternary: '#00ff00',
      backgroundColor: '#fff',
      textColor: '#111',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
