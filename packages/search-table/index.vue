<template>
  <div class="page-wrap">
    <div class="search">
      <search-form :form="form" :api="remoteApi"></search-form>
    </div>
    <div class="main-content">
      <grid ref="grid" :remote-method="api"></grid>
    </div>
  </div>
</template>
<script>

import searchForm from '../search-form'
import grid from '../grid'

export default {
  components: {searchForm},
  data(){
    return {
      
    }
  },
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    api: {
      type: Promise,
      default: async () => {}
    },
  },
  methods: {
    handleClick(){
      this.$refs.form.validate((vali)=>{
        if(vali){
          this.api();
        }
      });
    },
    handleCancle(){
      this.$refs.form.resetFields();
    },
    async remoteApi(params){
      await this.$refs.grid.loadData(params)
    }
  }
}
</script>