<template>
  <el-upload
    v-loading="loading"
    :before-upload="handleBeforeUpload"
    :on-error="handleUploadError"
    :show-file-list="false"
    :on-success="handleUploadSuccess"
    :action="action"
    :headers="setHeaders()"
    :multiple="false"
    accept="image/png, image/jpeg">
    <img
      v-if="value"
      :src="value"
      class="avatar">
    <i
      v-else
      class="el-icon-plus avatar-uploader-icon" />
    <div
      slot="tip"
      class="el-upload__tip">上传说明：{{size? '':`图片尺寸 ${size}，`}}大小不超过1M</div>
  </el-upload>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: undefined
    },
    maxSize: {
      type: Number,
      default: 1024
    },
    action: {
      type: String,
      default: ''
    },
    setHeaders: {
      type: Function,
      default: () => {}
    },
    size: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleBeforeUpload(file) {
      if(file.size > this.maxSize * 1000) {
        this.$message.warning('图片请控制在1M内')
        return false;
      }
      this.loading = true;
    },
    handleUploadSuccess({ data }) {
      this.$emit('input', data);
      this.loading = false;
    },
    handleUploadError() {
      this.loading = false;
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
