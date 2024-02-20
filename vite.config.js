import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'localhost',
  base: './',
  plugins: [react()],
  build: {
    outDir: '../test-dss-electron/app',
    // assetsDir: './'
    // assetsDir: 'static',
  }
})
