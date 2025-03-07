import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as vitestDefineConfig } from 'vitest/config'

// https://vite.dev/config/
const viteConfig = defineConfig({
  plugins: [TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly',
    },
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

const vitestConfig = vitestDefineConfig({
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: './setupTest.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})

export default mergeConfig(viteConfig, vitestConfig)
