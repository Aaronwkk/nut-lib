<template>
  <div class="page-wrap">
    <div class="search">
      <el-form :model="form" v-bind="_formOptions" inline :rules="rules" ref="form">
        <slot name="form"/>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="search">{{t('nut.search')}}</el-button>
          <el-button @click="handleCancle">{{t('nut.reset')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <slot/>
    <grid
      ref="grid"
      :remote-method="api"
      :options="_tableOptions"
      :rowKey="rowKey"
      @selectionChange="(val)=>$emit('selectionChange', val)"
    >
      <slot name="table"></slot>
    </grid>
  </div>
</template>
<script>

import grid from '../grid'
import locale from '../../src/mixins/locale'

export default {
  mixins: [locale],
  data(){
    return {
      loading: false
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
    },
    formOptions: {
      type: Object,
      default: () => {}
    },
    tableOptions: {
      type: Object,
      default: () => {}
    }
  },
  mounted(){
    this.grid = this.$refs.grid
    this.table = this.$refs.grid.$refs.table
  },
  computed: {
    _formOptions(){
      return this.formOptions
    },
    _tableOptions(){
      return this.tableOptions
    }
  },
  methods: {
    search(){
      this.$emit('beforeSearch')
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
    async loadData(){
      this.loading = true
      await this.$refs.grid.loadData(this.form)
      this.loading = false
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