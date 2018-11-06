<template>
  <detail-tab-item
    title="证书信息"
    id="zhengshuxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-zhengshuxinxi.js";
export default {
  name: "DetailZhengshuxinxi",
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
        ["Id", { text: "主键", grid: 2, align: "center" }],
        ["Name", { text: "产品名称", grid: 4, align: "left" }],
        ["No", { text: "证书编号", grid: 3, align: "left" }],
        ["Type", { text: "证书类型", grid: 2, align: "center" }],
        [
          "StartDate",
          { text: "证书生效时间", grid: 2, align: "center", isDate: true }
        ],
        [
          "EndDate",
          { text: "证书截止日期", grid: 2, align: "center", isDate: true }
        ]
      ]);
      const entriesForRender = ["Name", "No", "StartDate", "EndDate"];

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
