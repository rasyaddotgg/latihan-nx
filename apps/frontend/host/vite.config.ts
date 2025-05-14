/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/host',
  server: {
    port: 4600,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 4700,
    host: 'localhost',
    strictPort: true,
  },
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        dummy: '$dummy.js',
      },
      exposes: {
        './stores/useCounter': './src/stores/useCounter.ts',
      },
      shared: ['vue', 'vue-router', 'pinia'],
    }),
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    target: 'esnext',
    cssCodeSplit: false,
    minify: false,
    cssMinify: false,
  },
}));
