<template>
  <el-dialog
    v-bind="_options"
    :visible.sync="dialogVisible"
    @close="onClose">
    <form-container ref="formContainer" :button="false" :options="formOptions">
      <slot/>
    </form-container>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
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
    };
  },
  computed: {
    _options(){
      return this.options
    }
  },
  methods: {
    open(){
      this.dialogVisible = true
    },
    onClose(){
      this.$refs.formContainer.resetFields()
    },
    handleConfirm(){
      this.dialogVisible = false
      this.$refs.formContainer.resetFields()
    }
  }
};
</script>