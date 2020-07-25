const path = require('path');

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
    externals: {
      'vue': 'Vue',
      'element-ui': 'element-ui'
    }
  },
};
