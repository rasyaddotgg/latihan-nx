/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

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
    federation({
      name: 'host',
      remotes: {
        simple: 'http://localhost:4900/assets/remoteEntry.js',
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
  },
}));
