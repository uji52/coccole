const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const PurgeCSSPlugin = require('purgecss-webpack-plugin').PurgeCSSPlugin;
const glob = require('glob-all');
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData:
          '@import "@/assets/scss/common.scss"; \
           @import "@/assets/scss/blue.scss"; \
           @import "@/assets/scss/bootstrap"; \
           @import "@/assets/scss/_bootstrap-compass.scss"; \
           @import "@/assets/scss/_bootstrap-mincer.scss"; \
           @import "@/assets/scss/bootstrap.scss"; \
           @import "@/assets/scss/_bootstrap-sprockets.scss"; \
           @import "@/assets/scss/style2.scss"; \
           @import "@/assets/scss/style3.scss"; \
           @import "@/assets/scss/style4.scss"; \
           @import "@/assets/scss/style.scss";'
      }
    },
  },
  configureWebpack: config => {
    config.plugins.push(
      new PurgeCSSPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/**/*.vue'),
          path.join(__dirname, './public/index.html')
        ]),
        safelist: {
          standard: [/^el-/], 
        }
      })
    );
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8
      })
    );
    if (process.env.NODE_ENV === 'production' && process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
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
      })
      .end()
  },
}
