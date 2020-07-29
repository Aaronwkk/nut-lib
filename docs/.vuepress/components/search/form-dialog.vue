<template>
<div>
  <el-button @click="visible = true">打开弹窗</el-button>
  <form-dialog 
    :options="options" 
    :form="form" 
    :api="remoteApi"
    :events="events"
    :visible.sync="visible">
    <template>
      <el-form-item
        label="活动名称" 
        prop="name" 
        :rules="[{ required: true, message: '请输入活动名称', trigger: 'blur' },]">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item
        label="活动地点" 
        prop="area" 
        :rules="[{ required: true, message: '请输入活动地点', trigger: 'blur' },]">
        <el-input v-model="form.area"></el-input>
      </el-form-item>
    </template>
  </form-dialog>
</div>
</template>
<script>
export default {
  data(){
    return {
      options: {
        fullscreen: true
      },
      visible: false,
      form: {
        name: null,
        area: null
      },
      events: {
        open: () => {
          console.log('event open')
        }
      }
    }
  },
  methods: {
    async remoteApi(params){
      console.log('params', params)
      return {
        data: [
          {name: 'xiaoming', age: '18'}
        ]
      }
    }
  }
}
</script>