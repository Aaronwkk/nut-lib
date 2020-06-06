<template>
  <div class="flex-box">
    <div
      class="flex-box">
      <el-table
        v-loading="searching"
        :data="pagedData"
        :cell-class-name="classNameHandle"
        v-bind="moreBind()"
        ref="table"
        border
        stripe
        highlight-current-row
        :row-key="rowKey"
        height="100%"
        style="width: 100%;margin-bottom: 12px;"
        @selection-change="onSelectionChange">
        <slot/>
      </el-table>
    </div>

    <el-pagination
      v-if="dispalyPagination"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="size"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import deepCopy from '../utils/deepCopy';

export default {
  props: {
    moreBind: {
      type: Function,
      default: () => ({})
    },
    remoteMethod: {
      type: Function,
      default: null,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    pageSizes: {
      type: Array,
      default: () => [15, 20, 30, 40, 50],
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    border: {
      type: Boolean,
      default: true,
    },
    dispalyPagination: {
      type: Boolean,
      default: true,
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    classNameHandle: {
      type: [String, Function],
      default: ''
    },
    rowKey: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      postData: {},
      searching: false,
      data: [],
      currentPage: 1,
      size: this.pageSize,
      total: 0,
    };
  },
  computed: {
    pagedData() {
      if (this.remoteMethod) {
        return this.data;
      }

      const offset = (this.currentPage - 1) * this.size;
      return this.data.slice(offset, offset + this.size);
    },
  },
  watch: {
    tableData(val) {
      if (!this.remoteMethod) {
        this.data = val || [];
        this.total = this.data.length;
      }
    },
  },
  methods: {
    onSelectionChange(val){
      this.$emit('selectionChange', val)
    },
    async loadData(params) {
      if (this.remoteMethod) {
        this.currentPage = 1;
        return this._loadData(params);
      }
      return null;
    },
    async _loadData(params) {
      if (!this.remoteMethod) {
        return null;
      }

      if (params) {
        this.postData = deepCopy(params);
      }
      this.postData = this.postData || {};
      this.postData.pageIndex = this.currentPage;
      this.postData.pageSize = this.size;

      this.searching = true;
      try {
        const response = await this.remoteMethod(this.postData);
        if (response) {
          const { data, recordsCount } = response;
          this.data = data;
          this.total = recordsCount;
        }
        this.searching = false;
        return response;
      } catch (e) {
        this.data = [];
        this.total = 0;
        this.searching = false;
        return null;
      }
    },
    async reload() {
      return this._loadData(this.postData);
    },
    reset() {
      this.postData = {};
      this.searching = false;
      this.data = [];
      this.currentPage = 1;
      this.size = this.pageSize;
      this.total = 0;
    },
    handleSizeChange(size) {
      this.size = size;
      this._loadData();
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this._loadData();
    },
  },
};
</script>

<style scoped>
  .flex-box {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
</style>
