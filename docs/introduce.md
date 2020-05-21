# 介绍

`Nut-lib` 是一套基于 `Element-UI` 的后台 UI 标准组件库，用于快速开发后台系统


## 组件库开发规范

- 开发组件需要关注的目录如下: 
  - /packages  组件目录 应该至少包含index.vue文件
  - /packages/index.js  添加需要导出的组件
  - /tests/unit 单元测试目录
  - /docs  组件文档
  - /docs/.vuepress/router.js 文档路由配置

## 提交代码检查项

- 执行`npm run test`检查单元测试
- 执行`npm run cpd`检查代码重复率
- 执行`npm run build:doc`检查文档是否可以正常打包
- 执行`npm run lib`检查组件库是否正常打包, 包大小是否正常