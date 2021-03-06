const path = require('path');

module.exports = {
  title: 'nut-lib',
  port: 8008,
  base:'/nut-lib/',
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
    config.resolve.alias.set('nut-lib', path.join(__dirname, '../../src'));
  },
};
