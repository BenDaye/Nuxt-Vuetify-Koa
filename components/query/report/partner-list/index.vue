<template>
  <detail-tab-item title="股东（发起人）出资信息">
    <query-table
      :header-data="dataDic"
      :content-data="data" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
export default {
  name: "DetailReportWeb",
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
  computed: {
    dataDic() {
      const dic = new Map([
        ["No", { text: "序号", grid: 2, align: "center" }],
        ["Name", { text: "股东/发起人", grid: 2, align: "center" }],
        ["ShouldCapi", { text: "认缴出资额", grid: 2, align: "center" }],
        ["ShouldDate", { text: "认缴出资时间", grid: 2, align: "center" }],
        ["ShouldType", { text: "认缴出资方式", grid: 1, align: "center" }],
        ["RealCapi", { text: "实缴出资额", grid: 2, align: "center" }],
        ["RealDate", { text: "实缴出资时间", grid: 2, align: "center" }],
        ["RealType", { text: "实缴出资方式", grid: 1, align: "center" }],
        ["Form", { text: "出资类型", grid: 1, align: "center" }],
        ["InvestmentRatio", { text: "比例", grid: 1, align: "center" }]
      ]);

      const entriesForRender = [
        "Name",
        "ShouldCapi",
        "ShouldDate",
        "RealCapi",
        "RealDate",
        "InvestmentRatio"
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
