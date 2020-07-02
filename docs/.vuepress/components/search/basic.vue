<template>
  <form-container :model="form" :api="loadData" inline>
    <el-form-item label="国家">
      <el-input v-model="form.country"></el-input>
    </el-form-item>
    <el-form-item label="搜索关键字">
      <el-input v-model="form.value"></el-input>
    </el-form-item>
  </form-container>
</template>
<script>
export default {
  data(){
    return {
      form: {
        value: null,
        country: null
      }
    }
  },
  methods: {
    async loadData() {
      console.log('search success')
    }
  }
}
</script>