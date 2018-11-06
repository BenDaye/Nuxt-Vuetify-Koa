<template>
  <detail-tab-item
    title="严重违法"
    id="yanzhongweifa">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-weifa.js";
export default {
  name: "DetailYanzhongweifa",
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
        ["Type", { text: "类型", grid: 3, align: "left" }],
        ["AddReason", { text: "列入原因", grid: 2, align: "left" }],
        [
          "AddDate",
          { text: "列入时间", grid: 2, align: "center", isDate: true }
        ],
        ["AddOffice", { text: "列入决定机关", grid: 2, align: "center" }],
        ["RemoveReason", { text: "移除原因", grid: 2, align: "left" }],
        [
          "RemoveDate",
          { text: "移除时间", grid: 2, align: "center", isDate: true }
        ],
        ["RemoveOffice", { text: "移除决定机关", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Type",
        "AddReason",
        "AddDate",
        "RemoveReason",
        "RemoveDate"
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
