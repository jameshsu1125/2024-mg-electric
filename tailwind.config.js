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
      mxLight: ['MX Light', 'sans-serif'],
      mxMedium: ['MX Medium', 'sans-serif'],
      mxThin: ['MX Thin', 'sans-serif'],
      mxUltra: ['MX Ultra', 'sans-serif'],
      mxXBlack: ['MX XBlack', 'sans-serif'],
      mxRegular: ['MX Regular', 'sans-serif'],
      gillBoldItalic: ['Gill Bold Italic', 'sans-serif'],
      gillRegular: ['Gill Regular', 'sans-serif'],
      gillBold: ['Gill Bold', 'sans-serif'],
      gillSemiBold: ['Gill SemiBold', 'sans-serif'],
      gillSemiBoldItalic: ['Gill SemiBoldItalic', 'sans-serif'],
      gillUltraBold: ['Gill UltraBold', 'sans-serif'],
      gillItalic: ['Gill Italic', 'sans-serif'],
      gillLight: ['Gill Light', 'sans-serif'],
      gillLightItalic: ['Gill LightItalic', 'sans-serif'],
    },
    colors: {
      ...color,
      primary: '#3aae36',
      secondary: '#333333',
      tertiary: '#ff0066',
      quaternary: '#00ff00',
      backgroundColor: '#fff',
      textColor: '#111',
    },
    extend: {
      spacing: {
        dh: '800px',
        mh: '280px',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
