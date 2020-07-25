<template>
  <el-dialog
    v-bind="_options"
    :visible="visible"
    :title="_title"
    :before-close="beforeClose"
    @close="onClose">
    <el-form :model="form" ref="form">
      <slot/>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">{{t('nut.cancel')}}</el-button>
      <el-button @click="handleReset">{{t('nut.reset')}}</el-button>
      <el-button :loading="loading" type="primary" @click="handleConfirm">{{t('nut.confirm')}}</el-button>
    </span>
  </el-dialog>
</template>

<script>

import locale from '../../src/mixins/locale'

export default {
  mixins: [locale],
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    api: {
      type: Function,
      default: () => {}
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {}
    },
    formOptions: {
      type: Object,
      default: () => {}
    },
  },
  data(){
    return {
      loading: false
    }
  },
  computed: {
    _options(){
      return this.options
    },
    _title() {
      this.title || this.t('nut.add')
    }
  },
  methods: {
    onClose(){
      this.$emit('closed')
      this.$refs.form.resetFields()
    },
    beforeClose(done){
      this.$emit('beforeClose')
      this.$emit('update:visible', false)
      done()
    },
    handleConfirm(){
      this.$emit('beforeConfirm')
      this.$refs.form.validate(async (vali)=>{
        if(vali){
          this.$emit('confirm')
          try{
            this.loading = true
            await this.api(this.form);
            this.$emit('update:visible', false)
          } catch(e){
            console.log(e)
          } finally {
            this.loading = false
          }
        }
      });
    },
    handleReset(){
      this.$emit('reset')
      this.$refs.form.resetFields()
    }
  }
};
</script>