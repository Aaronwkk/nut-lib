<template>
  <search-form :model="form" :api="loadData">
    <el-form-item label="搜索关键字">
      <el-input v-model="form.value"></el-input>
    </el-form-item>
  </search-form>
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
    async loadData() {
      console.log('search success')
    }
  }
}
</script>