<template>
  <el-dialog
    v-bind="_options"
    :visible.sync="dialogVisible"
    :before-close="beforeClose"
    @close="onClose">
    <form-container ref="formContainer" :button="false" :options="formOptions">
      <slot/>
    </form-container>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import formContainer from '../form-container'

export default {
  components: {
    formContainer
  },
  props: {
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
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  watch: {
    visible(){
      this.dialogVisible = this.visible
    }
  },
  computed: {
    _options(){
      return this.options
    },
    _visible(){

    }
  },
  methods: {
    onClose(){
      this.$refs.formContainer.resetFields()
    },
    beforeClose(done){
      this.dialogVisible = true;
      this.$emit('update:visible', false)
      done()
    },
    handleConfirm(){
      this.$refs.formContainer.resetFields()
    }
  }
};
</script>