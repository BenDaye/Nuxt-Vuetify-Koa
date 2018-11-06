<template>
  <detail-tab-item
    title="网站信息"
    id="wangzhanxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-wangzhanxinxi.js";
export default {
  name: "DetailWangzhanxinxi",
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
        ["KeyNo", { text: "KeyNo", grid: 2, align: "center" }],
        ["CompanyName", { text: "公司名", grid: 2, align: "center" }],
        ["HomeSite", { text: "网址", grid: 3, align: "left" }],
        ["Title", { text: "标题", grid: 2, align: "left" }],
        ["YuMing", { text: "域名", grid: 2, align: "left" }],
        ["BeiAn", { text: "备案号", grid: 2, align: "left" }],
        ["SDate", { text: "审核日期", grid: 2, align: "center", isDate: true }],
        ["Status", { text: "状态", grid: 2, align: "center" }],
        ["TypeName", { text: "类型名", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "HomeSite",
        "Title",
        "YuMing",
        "BeiAn",
        "SDate"
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
