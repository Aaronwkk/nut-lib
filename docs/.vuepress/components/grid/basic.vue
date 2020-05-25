<template>
  <div class="demo-block">
    <grid :remoteMethod="loadData"/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      detailList: [
        {
          label: '用户昵称',
          value: '王小虎'
        }, {
          label: '联系方式',
          value: '13912345678'
        }, {
          label: '用户昵称',
          value: '王小虎'
        }, {
          label: '账户余额',
          value: '3.00 元'
        }, {
          label: '会员等级',
          value: '白银会员'
        }, {
          label: '信用分',
          value: '126'
        }, {
          label: '不良记录',
          value: '无'
        }
      ],
    };
  },
  methods: {
    loadData() {
      return {
        data: this.detailList,
        recordsCount: 30
      }
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
