import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import path from 'path'

export default defineConfig(async () => {
  const { imagetools } = await import('vite-imagetools');

  return {
    plugins: [
      vue(),
      viteCompression({
        algorithm: 'brotli',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false
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
            'vendor': ['vue', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
            'style': ['bootstrap']
          }
        },
      }
    }
  };
});