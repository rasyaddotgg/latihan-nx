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
      // filename: 'remoteEntry.js',
      remotes: {
        'remote-sample': 'http://localhost:4900/assets/remoteEntry.js',
        employee: 'http://localhost:4300/assets/remoteEntry.js',
      },
      // malah error rror: ENOENT: no such file or directory, stat 'D:\PROGRAMMING\LATIHAN\latihan-nx\apps\frontend\host\node_modules\primevue\button' pas di build
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
