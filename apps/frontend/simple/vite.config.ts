/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/simple',
  server: {
    port: 4800,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 4900,
    host: 'localhost',
    strictPort: true,
  },
  plugins: [
    vue(),
    federation({
      name: 'simple',
      filename: 'remoteEntry.js',
      exposes: {
        './SimpleButton': './src/components/SimpleButton.vue',
        './PrimeButton': './src/components/PrimeButton.vue',
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
    cssCodeSplit: true,
    minify: false,
  },
}));
