import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/novel-react-app/",
  plugins: [react()],
})
