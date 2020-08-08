<template>
  <el-dialog
    v-bind="_options"
    v-on="_event"
    :visible="visible"
    :title="_title"
    :before-close="beforeClose"
    @close="onClose">
    <el-form :model="form" v-bind="formOptions" ref="form">
      <slot/>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button
        v-if="cancel" 
        @click="$emit('update:visible', false)">
      {{t('nut.cancel')}}
      </el-button>
      <el-button
        v-if="reset"
        @click="handleReset">
      {{t('nut.reset')}}
      </el-button>
      <el-button
        v-if="confirm"
        :loading="loading"
        type="primary"
        @click="handleConfirm">
      {{t('nut.confirm')}}
      </el-button>
    </span>
  </el-dialog>
</template>

<script>

import locale from '../../src/mixins/locale'

export default {
  mixins: [locale],
  props: {
    cancel: {
      type: Boolean,
      default: true
    },
    reset: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Boolean,
      default: true
    },
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
    events: {
      type: Object,
      default: () => {}
    }
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
      return this.title || this.t('nut.add')
    },
    _event(){
      return this.events
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
    },
  }
};
</script>