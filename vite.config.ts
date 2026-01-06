import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/gamleegpt/', // 이 줄이 반드시 있어야 합니다!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})