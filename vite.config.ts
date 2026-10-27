import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8734,
    allowedHosts: [
      'designy.cyberpunk.co.in',
      '.cyberpunk.co.in',
      'localhost',
      '127.0.0.1'
    ],
  },
})
