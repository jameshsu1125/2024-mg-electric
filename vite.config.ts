import react from '@vitejs/plugin-react';
import { certificateFor } from 'devcert';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, './src/pages');
  const { key, cert } = await certificateFor('localhost');

  const base = 'https://mg4electric.netlify.app/';

  const config = {
    base: './',
    root: resolve(__dirname, 'src/pages'),
    publicDir: resolve(__dirname, 'public'),
    build: {
      outDir: resolve(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: resolve(__dirname, 'src/pages/index.html'),
        },
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          rootPath: base,
          math: 'always',
          globalVars: {
            mainColor: 'red',
          },
        },
      },
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_TITLE,
            description: env.VITE_SUBSCRIPTION,
            url: env.VITE_URL,
            facebookID: env.VITE_FACEBOOK_ID,
          },
        },
      }),
      cssInjectedByJsPlugin(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      port: 5173,
      https: { key, cert },
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  };

  if (process.env.NODE_ENV !== 'production') {
    delete config.css.preprocessorOptions.less.rootPath;
  }

  return config;
});
