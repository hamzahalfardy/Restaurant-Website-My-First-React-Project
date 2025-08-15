import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/Restaurant-Website-My-First-React-Project/',
    server: {
    host: '0.0.0.0', // expose to network
    port: 3000       // optional, to keep port fixed
  }
})
