import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // CRÍTICO: o nome exato do seu repositório no GitHub
  base: '/portfolio/',

  resolve: {
    alias: { '@': '/src' }  // mantém o alias @ funcionando
  }
})
