<template>
  <div class="demo-block">
    <grid ref="grid" :remoteMethod="loadData">
      <el-table-column prop="name" label="名称"/>
      <el-table-column prop="age" label="年龄"/>
    </grid>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        name: null
      },
      detailList: [
        {
          age: 18,
          name: '王小虎'
        },
        {
          age: 18,
          name: '王小虎'
        },
        {
          age: 18,
          name: '王小虎'
        },
        {
          age: 18,
          name: '王小虎'
        },
      ],
    };
  },
  mounted(){
    this.search()
  },
  methods: {
    loadData(params) {
      console.log(params)
      return {
        data: this.detailList,
        recordsCount: 30
      }
    },
    search(){
      this.$refs.grid.loadData(this.form)
    }
  }
};
</script>
<style scoped>
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding: 8px;
}
</style>
