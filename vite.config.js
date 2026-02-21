import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my-vue-app/', // This matches your repo name exactly
  plugins: [vue()],
})