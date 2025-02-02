import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: true
    }),
    imagetools(),
    process.env.ANALYZE ? visualizer({ open: true }) : null
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue'],
          'style': ['bootstrap']
        }
      },
      plugins: [
        require('rollup-plugin-image-files')({
          include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
          exclude: 'node_modules/**',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 75,
              arithmetic: false,
            },
            optipng: {
              enabled: true,
              optimizationLevel: 7,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 3,
            },
            webp: {
              quality: 75,
              lossless: false,
              nearLossless: false,
            }
          }
        })
      ]
    }
  },
  server: {
    hmr: true,
    cors: true
  }
})