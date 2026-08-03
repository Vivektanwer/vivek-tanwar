import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  ssr: {
    // React aur baaki dependencies ko bundle kar do taaki Vercel pe external import na ho
    noExternal: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
})