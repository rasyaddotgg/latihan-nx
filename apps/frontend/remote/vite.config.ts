/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/remote',
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
      name: 'remote-sample',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteButton': './src/components/RemoteButton.vue',
      },
      shared: ['vue', 'vue-router'],
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
