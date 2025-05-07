/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/remote',
  server: {
    port: 4500,
    host: 'localhost',
  },
  preview: {
    port: 4600,
    host: 'localhost',
  },
  plugins: [
    vue(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteButton': './src/components/RemoteButton.vue',
      },
      shared: ['vue', 'vue-router', 'primevue/button'],
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
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
