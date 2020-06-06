<template>
  <div>
    <el-form :model="model" ref="form" :label-width="label" :inline="inline">
      <slot/>
      <el-form-item>
        <el-button @click="handleSerch" type="primary">search</el-button>
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
    inline: {
      type: Boolean,
      default: false
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
  mounted(){
    this.form = this.$refs.form
  },
  methods: {
    handleSerch(){
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