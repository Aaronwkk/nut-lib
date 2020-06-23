<template>
<el-form v-bind="attrs" :model="model" ref="form">
  <slot/>
  <el-form-item v-if="button">
    <el-button @click="handleSearch" type="primary">{{confirmDesc}}</el-button>
    <el-button @click="handleCancle" type="waring">{{resetDesc}}</el-button>
  </el-form-item>
</el-form>
</template>
<script>

const LABEL_WIDTH = '100px'

export default {
  data(){
    return {}
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    inline: {
      type: Boolean,
      default: false
    },
    confirmDesc: {
      type:String,
      default: '搜索'
    },
    resetDesc:{
      type: String,
      default: '重置'
    },
    button: {
      type: Boolean,
      default: true
    },
    api: {
      type: Function,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {
      }
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    attrs(){
      const {
        inline,
        model,
        options,
        rules
      } = this;
      const opt = Object.assign({},
        {
          labelWidth: LABEL_WIDTH,
          inline,
          model,
          rules
        }, options)
      return opt
    }
  },
  mounted(){
    this.form = this.$refs.form
  },
  methods: {
    handleSearch(){
      this.$refs.form.validate((vali)=>{
        if(vali){
          this.api(this.model);
          this.$emit('search')
        }
      });
    },
    handleCancle(){
      this.resetFields();
      this.$emit('reset')
    },
    resetFields(){
      this.$refs.form.resetFields();
    }
  }
}
</script>