import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cp from 'vite-plugin-cp'

export default defineConfig({
  plugins: [
    vue(),
    cp({
      targets: [
        { src: './data.yml', dest: './dist' }
      ]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    historyApiFallback: true // Enable history API fallback for dev
  }
})