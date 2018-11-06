<template>
  <detail-tab-item
    title="招投标信息"
    id="zhaotoubiaoxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-zhaotoubiao.js";
export default {
  name: "DetailZhaotoubiaoxinxi",
  components: {
    DetailTabItem,
    QueryTable
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      mockData: mock
    };
  },
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    },
    dataDic() {
      const dic = new Map([
        ["Title", { text: "描述", grid: 6, align: "left" }],
        [
          "Pubdate",
          { text: "发布时间", grid: 2, align: "center", isDate: true }
        ],
        ["ProvinceName", { text: "区域", grid: 1, align: "center" }],
        ["ChannelName", { text: "项目分类", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Title",
        "Pubdate",
        "ProvinceName",
        "ChannelName"
      ];

      let obj = Object.create(null);
      for (const [k, v] of dic) {
        if (!entriesForRender.includes(k)) {
          continue;
        }
        obj[k] = { value: k, ...v };
      }

      return obj;
    }
  }
};
</script>
