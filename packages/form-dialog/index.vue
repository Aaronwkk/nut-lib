<template>
  <el-dialog
    v-bind="_options"
    :visible="visible"
    :before-close="beforeClose"
    @close="onClose">
    <el-form :model="form" ref="form">
      <slot/>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">Cancel</el-button>
      <el-button @click="handleReset">Reset</el-button>
      <el-button :loading="loading" type="primary" @click="handleConfirm">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
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
      default: '新增'
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
  },
  methods: {
    onClose(){
      this.$refs.form.resetFields()
    },
    beforeClose(done){
      this.$emit('closed')
      this.$emit('update:visible', false)
      done()
    },
    handleConfirm(){
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