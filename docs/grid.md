# grid 组件介绍

## 基本用法

<grid-demo name="basic"/>

<<< @/docs/.vuepress/components/grid/basic.vue


### Attributes

| 参数        | 说明           | 类型  |  默认值 |
| ------------- |:-------------| :---:| --------:|
| remoteMethod     | 请求数据接口 | Function | null |
| pageSize      |  分页大小     | Number |  20 |
| pageSizes | 每页显示个数选择器的选项设置    |   number[]	 |  [15, 20, 30, 40, 50] |
| layout | 组件布局，子组件名用逗号分隔	     |   String | 'prev, pager, next, jumper, ->, total' |
| pageSize      |  分页大小     | Number |  20 |
| border      |  是否设置边框     | Boolean |  true |
| dispalyPagination      |  是否需要显示分页     | Boolean |  true |
| tableData      |  grid数据（不设置remoteMethod的情况下）     | Object[] |  null |
| classNameHandle      |  单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className     | Function({row, column, rowIndex, columnIndex})/String |  null |
| rowKey      |  行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。     | Function(row)/String |  true |
| options | el-dialog 弹窗相关属性     |   Object | -- |