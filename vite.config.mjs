import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import * as sass from 'sass-embedded';

export default defineConfig(async () => {
  process.env.SASS_SILENCE_DEPRECATIONS = 'all';
  const { imagetools } = await import('vite-imagetools');
  return {
    base: './',
    logLevel: 'error',
    server: {
      port: 8080,
      strictPort: true,
      host: true
    },
    plugins: [
      vue(),
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
          implementation: sass,
          quietDeps: true,
          logger: {
            warn: () => {}
          },
          silenceDeprecations: [ // めんどくさすぎる＆すべて外部SCSS＆デザインのみの問題のため、嫌な気分になるが警告無視
            'mixed-decls',
            'slash-div',
            'global-builtin',
            'color-functions',
            'import',
            'if-function'
          ]
        }
      }
    },
    build: {
      target: 'esnext',
      minify: 'terser',
      cssMinify: false,
      cssCodeSplit: true,
      assetsDir: 'assets',
      copyPublicDir: true,
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        onwarn(warning, warn) {
          const message = warning.message || '';
          if (
            message.includes('mixed-decls deprecation') ||
            message.includes('didn\'t resolve at build time') ||
            message.includes('Expected identifier but found "*"') ||
            message.includes('Deprecation Warning') ||
            warning.code === 'UNRESOLVED_IMPORT'
          ) {
            return;
          }
          warn(warning);
        },
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: ({name}) => {
            if (/\.(jpe?g|png|gif|ico|svg)$/.test(name)) {
              return 'assets/images/[name]-[hash][extname]';
            }
            if (/\.(woff2?|eot|ttf)$/.test(name)) {
              return 'assets/fonts/[name]-[hash][extname]';
            }
            if (/\.css$/.test(name)) {
              return 'assets/css/[name]-[hash][extname]';
            }
            if (/\.(js|map)$/.test(name)) {
              return 'assets/js/[name][extname]';
            }
            return 'assets/[ext]/[name]-[hash].[ext]';
          },
          manualChunks(id) {
            if (id.includes('node_modules/vue')) {
              return 'vue-core';
            }
            if (id.includes('node_modules/@fortawesome')) {
              return 'fontawesome';
            }
            if (id.includes('node_modules/bootstrap')) {
              return 'style';
            }
            if (id.includes('node_modules/moment') || id.includes('node_modules/axios')) {
              return 'utils';
            }
          },
        },
      },
    },
  };
});