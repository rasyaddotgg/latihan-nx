/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../../node_modules/.vite/apps/frontend/payroll',
  server: {
    port: 4400,
    host: 'localhost',
  },
  preview: {
    port: 4500,
    host: 'localhost',
  },
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'payroll',
      filename: 'remoteEntry.js',
      exposes: {
        './PayrollList': './src/sections/payroll/PayrollList.vue',
        './PayrollButton': './src/components/PayrollButton.vue',
        './TailwindButton': './src/components/TailwindButton.vue',
      },
      shared: [
        'vue',
        'vue-router',
        'primevue/button',
        'tailwindcss',
        'primevue/iconfield',
        'primevue/datatable',
        'primevue/column',
        'primevue/inputtext',
        'primevue/multiselect',
        'primevue/select',
        'primevue/tag',
        'primevue/inputicon',
        'primevue/checkbox',
      ],
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
