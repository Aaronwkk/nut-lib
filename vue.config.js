const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  parallel: false,
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        packages: path.join(__dirname, '.', 'packages'),
        'nut-lib': path.join(__dirname,'.', 'src')
      }
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ],
    externals: {
      'vue': 'Vue',
      'element-ui': 'element-ui',
      'vue-i18n': 'vue-i18n'
    }
  },
};
