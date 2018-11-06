<template>
  <detail-tab-item
    title="法院公告"
    id="fayuangonggao">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-fayuan.js";
export default {
  name: "DetailFayuangonggao",
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
        ["UploadDate", { text: "下载时间", grid: 2, align: "center" }],
        ["Content", { text: "内容", grid: 2, align: "center" }],
        ["PublishedPage", { text: "公布页", grid: 2, align: "center" }],
        ["Party", { text: "公司名、当事人", grid: 5, align: "left" }],
        ["Category", { text: "种类", grid: 2, align: "left" }],
        ["Court", { text: "执行法院", grid: 2, align: "left" }],
        [
          "PublishedDate",
          { text: "公布日期", grid: 2, align: "center", isDate: true }
        ],
        ["Id", { text: "主键", grid: 2, align: "center" }]
      ]);
      const entriesForRender = ["Party", "Category", "Court", "PublishedDate"];

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
