<template>
  <div class="form-group">
    <p class="title" :class="{'sub-title': isSub}">{{title}}</p>
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    isSub: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
  .form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 16px;
    margin-bottom: 18px;
    color: #000;
  }
  .title.sub-title {
    font-size: 14px;
    color: #909399;
  }
</style>
