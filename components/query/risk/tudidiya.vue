<template>
  <detail-tab-item
    title="土地抵押"
    id="tudidiya">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-tudidiya.js";
export default {
  name: "DetailTudidiya",
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
        ["Id", { text: "Id", grid: 2, align: "center" }],
        ["Address", { text: "地址", grid: 3, align: "left" }],
        ["AdministrativeArea", { text: "行政区", grid: 2, align: "center" }],
        [
          "MortgageAcreage",
          { text: "抵押面积（公顷）", grid: 2, align: "center" }
        ],
        ["MortgagePurpose", { text: "抵押土地用途", grid: 2, align: "center" }],
        [
          "StartDate",
          { text: "开始日期", grid: 2, align: "center", isDate: true }
        ],
        [
          "EndDate",
          { text: "结束日期", grid: 2, align: "center", isDate: true }
        ]
      ]);
      const entriesForRender = [
        "Address",
        "MortgageAcreage",
        "MortgagePurpose",
        "StartDate",
        "EndDate"
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
