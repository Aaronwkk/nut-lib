<template>
  <search-table :model="form" :api="remoteApi">
    <el-form-item>
      <el-input v-model="form.value"></el-input>
    </el-form-item>
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