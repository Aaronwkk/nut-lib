const path = require('path');

module.exports = {
  title: 'unt-lib',
  port: 8008,
  description: '基于Element-UI的后台标准组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '脚手架', link: '' }
    ],
    sidebar: require('./router'),
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('packages', path.join(__dirname, '../../packages'));
  },
};
