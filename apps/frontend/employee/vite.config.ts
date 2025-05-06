/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import path from 'path';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/employee',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'employee',
      filename: 'remoteEntry.js',
      exposes: {
        './EmployeeList': './src/sections/employee/EmployeeList.vue',
      },
      shared: ['vue', 'vue-router', 'primevue', 'tailwindcss'],
      remotes: {
        payroll: 'http://localhost:4500/assets/remoteEntry.js',
      },
    }),
  ],
  resolve: {
    // alias: {
    //   '@frontend-lib': path.resolve(
    //     __dirname,
    //     '../../../libs/frontend-lib/src'
    //   ),
    // },
  },
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
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
