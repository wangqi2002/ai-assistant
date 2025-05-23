import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9527,     // 端口
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern' // 或者 'modern-compiler'
      }
    }
  }
})