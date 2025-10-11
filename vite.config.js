import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import path from 'path'

export default defineConfig(async () => {
  const { imagetools } = await import('vite-imagetools');

  return {
    base: './',
    server: {
      port: 3000,
      strictPort: true,
      host: true
    },
    plugins: [
      vue(),
      /*
      viteCompression({
        algorithm: 'brotli',
        ext: '.br',
        threshold: 5120,
        deleteOriginFile: true
      }),*/
      imagetools(),
      process.env.ANALYZE ? visualizer({ open: true }) : null
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/sass/bootstrap.scss";
            @import "@/assets/sass/style.scss";
          `,
          api: 'modern-compiler',
          silenceDeprecations: [ // めんどくさすぎる＆すべて外部SCSS＆デザインのみの問題のため、嫌な気分になるが警告無視
            'mixed-decls',
            'slash-div',
            'global-builtin',
            'color-functions',
            'import'
          ]
        }
      }
    },
    build: {
      target: 'esnext',
      minify: 'terser',
      cssCodeSplit: true,
      assetsDir: 'assets',
      copyPublicDir: true,
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({name}) => {
            if (/\.(jpe?g|png|gif|ico|svg)$/.test(name)) {
              return 'assets/images/[name]-[hash][extname]'
            }
            if (/\.(woff2?|eot|ttf)$/.test(name)) {
              return 'assets/fonts/[name]-[hash][extname]'
            }
            if (/\.css$/.test(name)) {
              return 'assets/css/[name]-[hash][extname]'
            }
            if (/\.(js|map)$/.test(name)) {
              return 'assets/js/[name][extname]'
            }
            return 'assets/[ext]/[name]-[hash].[ext]'
          },
          manualChunks: {
            'vue-core': ['vue'],
            'fontawesome': ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'],
            'style': ['bootstrap'],
            'utils': ['moment', 'axios'],
          },
        },
      },
    },
  };
});