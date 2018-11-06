<template>
  <v-flex class="mt-5">
    <v-card flat>
      <v-card-title class="px-4">
        <div class="body-1">已为您查找到{{ result.totalRecords }}家相关企业</div>
        <v-spacer/>
        <!-- <v-btn flat>默认排序</v-btn> -->
        <!-- <v-btn color="primary">导出数据</v-btn> -->
      </v-card-title>
      <v-divider/>
      <v-layout class="py-3 px-5">
        <div class="body-2">公司</div>
        <v-spacer/>
        <div class="body-2">状态</div>
      </v-layout>
      <v-divider/>
      <list-item
        v-for="(item, index) in result.data"
        :key="index"
        :value="item"/>
      <v-layout
        row
        align-center
        justify-center
        class="pa-4">
        <v-pagination
          v-model="result.pageIndex"
          :length="result.length"
          :total-visible="10"
          color="primary"/>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import ListItem from './list-item.vue'
import get from 'lodash.get'
export default {
  name: 'QueryList',
  components: {
    ListItem
  },
  props: {
    listData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    result() {
      if (!this.listData) {
        return {}
      } else {
        return {
          totalRecords: get(this.listData, ['Paging', 'TotalRecords']),
          pageIndex: get(this.listData, ['Paging', 'pageIndex']),
          // pageSize: get(this.listData, ['Paging', 'pageSize']),
          length: Math.ceil(
            get(this.listData, ['Paging', 'TotalRecords']) /
              get(this.listData, ['Paging', 'PageSize'])
          ),
          data: get(this.listData, ['Result'])
        }
      }
    }
  },
  watch: {
    pageIndex(index) {
      this.$emit('changePageIndex', index)
    }
  }
}
</script>
