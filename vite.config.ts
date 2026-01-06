import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/gamleegpt/', // 저장소 이름을 앞뒤에 슬래시(/)와 함께 적어주세요.
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})