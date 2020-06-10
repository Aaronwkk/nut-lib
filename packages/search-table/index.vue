<template>
  <div class="page-wrap">
    <div class="search">
      <el-form :model="form" inline :rules="rules" ref="form">
        <slot name="form"/>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">search</el-button>
          <el-button @click="handleCancle">reset</el-button>
        </el-form-item>
      </el-form>
    </div>
    <slot/>
    <grid
      ref="grid"
      :remote-method="api"
      :rowKey="rowKey"
      @selectionChange="(val)=>$emit('selectionChange', val)"
    >
      <slot name="table"></slot>
    </grid>
  </div>
</template>
<script>

import grid from '../grid'

export default {
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
      type: Function,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    },
    rowKey: {
      type: Function,
      default: () => {}
    }
  },
  mounted(){
    this.grid = this.$refs.grid
    this.table = this.$refs.grid.$refs.table
  },
  methods: {
    handleSearch(){
      this.$refs.form.validate((vali)=>{
        this.$emit('search')
        if(vali){
          this.loadData();
        }
      });
    },
    handleCancle(){
      this.$emit('reset')
      this.$refs.form.resetFields();
    },
    async loadData(params){
      await this.$refs.grid.loadData(params)
    }
  }
}
</script>
<style>
.page-wrap{
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>