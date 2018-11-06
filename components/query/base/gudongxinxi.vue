<template>
  <detail-tab-item
    title="股东信息"
    id="gudongxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-base.js";
export default {
  name: "DetailGudongxinxi",
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
      mockData: mock.Partners
    };
  },
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    },
    dataDic() {
      const dic = new Map([
        ["StockName", { text: "股东", grid: 5, align: "center" }],
        ["StockType", { text: "股东类型", grid: 2, align: "center" }],
        ["StockPercent", { text: "出资比例", grid: 2, align: "center" }],
        ["ShouldCapi", { text: "认缴出资额", grid: 2, align: "center" }],
        [
          "ShoudDate",
          { text: "认缴出资时间", grid: 2, align: "center", isDate: true }
        ],
        ["InvestType", { text: "认缴出资方式", grid: 2, align: "center" }],
        ["InvestName", { text: "实际出资方式", grid: 2, align: "center" }],
        ["RealCapi", { text: "实缴出资额", grid: 2, align: "center" }],
        [
          "CapiDate",
          { text: "实缴时间", grid: 2, align: "center", isDate: true }
        ]
      ]);
      const entriesForRender = [
        "StockName",
        "StockPercent",
        "ShouldCapi",
        "ShoudDate"
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
