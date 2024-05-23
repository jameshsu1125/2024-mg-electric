/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

import {
  scopedPreflightStyles,
  isolateInsideOfContainer, // there are also isolateOutsideOfContainer and isolateForComponents
} from 'tailwindcss-scoped-preflight';

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
      xxs: '0.625rem',
    },
    fontFamily: {
      mxBlack: ['MX Black', 'monospace', 'sans-serif'],
      mxBold: ['MX Bold', 'monospace', 'sans-serif'],
      mxBook: ['MX Book', 'monospace', 'sans-serif'],
      mxHeavy: ['MX Heavy', 'monospace', 'sans-serif'],
      mxLight: ['MX Light', 'monospace', 'sans-serif'],
      mxMedium: ['MX Medium', 'monospace', 'sans-serif'],
      mxThin: ['MX Thin', 'monospace', 'sans-serif'],
      mxUltra: ['MX Ultra', 'monospace', 'sans-serif'],
      mxXBlack: ['MX XBlack', 'monospace', 'sans-serif'],
      mxRegular: ['MX Regular', 'monospace', 'sans-serif'],
      gillBoldItalic: ['Gill Bold Italic', 'monospace', 'sans-serif'],
      gillRegular: ['Gill Regular', 'monospace', 'sans-serif'],
      gillBold: ['Gill Bold', 'monospace', 'sans-serif'],
      gillSemiBold: ['Gill SemiBold', 'monospace', 'sans-serif'],
      gillSemiBoldItalic: ['Gill SemiBoldItalic', 'monospace', 'sans-serif'],
      gillUltraBold: ['Gill UltraBold', 'monospace', 'sans-serif'],
      gillItalic: ['Gill Italic', 'monospace', 'sans-serif'],
      gillLight: ['Gill Light', 'monospace', 'sans-serif'],
      gillLightItalic: ['Gill LightItalic', 'monospace', 'sans-serif'],
    },
    colors: {
      ...color,
      primary: '#3aae36',
      secondary: '#333333',
      tertiary: '#cccccc',
      quaternary: '#edf0f4',
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
  plugins: [
    'prettier-plugin-tailwindcss',
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('#not_aem_app'),
    }),
  ],
};
