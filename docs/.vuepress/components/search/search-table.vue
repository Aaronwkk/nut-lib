<template>
  <search-table ref="searchTable" :form="form" :api="remoteApi">
    <template slot="form">
      <el-form-item prop="value" label="关键字">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
    </template>
    <template>
      <el-button style="width: 100px" type="primary">创建表单</el-button>
      <br/>
    </template>
    <template slot="table">
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="age" label="年龄"/>
    </template>
  </search-table>
</template>
<script>
export default {
  data(){
    return {
      form: {
        value: null
      }
    }
  },
  mounted(){
    this.$refs.searchTable.search()
  },
  methods: {
    async remoteApi(form){
      console.log(form)
      return {
        data: [
          {name: 'xiaoming', age: '18'}
        ]
      }
    }
  }
}
</script>