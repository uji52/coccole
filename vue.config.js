const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        additionalData:
          `@import "@/assets/scss/common.scss"; \
           @import "@/assets/scss/blue.scss"; \
           @import "@/assets/scss/bootstrap"; \
           @import "@/assets/scss/_bootstrap-compass.scss"; \
           @import "@/assets/scss/_bootstrap-mincer.scss"; \
           @import "@/assets/scss/bootstrap.scss"; \
           @import "@/assets/scss/_bootstrap-sprockets.scss"; \
           @import "@/assets/scss/style2.scss"; \
           @import "@/assets/scss/style3.scss"; \
           @import "@/assets/scss/style4.scss"; \
           @import "@/assets/scss/style.scss";`
      }
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' && process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  }
}
