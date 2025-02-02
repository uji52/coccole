import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    process.env.ANALYZE ? visualizer({ open: true }) : null
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        require('rollup-plugin-image-files')({
          include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
          exclude: 'node_modules/**',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 80
            },
            optipng: {
              enabled: true,
              optimizationLevel: 5
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            webp: {
              quality: 80
            }
          }
        })
      ]
    }
  }
})