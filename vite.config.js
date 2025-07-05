import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cp from 'vite-plugin-cp'

export default defineConfig({
  plugins: [
  vue(),
  cp({
      targets: [
        {
          src: './data.yml',
          dest: './dist'
        }
      ]
    })
  ]
})