<template>
  <search-table :model="form" :api="remoteApi">
    <template slot="form">
      <el-form-item label="关键字">
        <el-input v-model="form.value"></el-input>
      </el-form-item>
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
  methods: {
    async remoteApi(){
      return {
        data: [
          {name: 'xiaoming', age: '18'}
        ]
      }
    }
  }
}
</script>