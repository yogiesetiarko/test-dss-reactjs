import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'localhost',
  plugins: [react()],
  build: {
    // outDir: '../test-dss-electron/build',
    // assetsDir: './'
    // assetsDir: 'static',
  }
})
