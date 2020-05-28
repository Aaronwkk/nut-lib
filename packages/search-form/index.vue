<template>
  <div>
    <el-form :model="model" ref="form" :label-width="label">
      <slot/>
      <el-form-item>
        <el-button @click="handleClick" type="primary">search</el-button>
        <el-button @click="handleCancle" type="waring">reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    api: {
      type: Promise,
      default: async () => {}
    },
    label: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    handleClick(){
      this.$refs.form.validate((vali)=>{
        if(vali){
          this.api(this.form);
        }
      });
    },
    handleCancle(){
      this.$refs.form.resetFields();
    }
  }
}
</script>