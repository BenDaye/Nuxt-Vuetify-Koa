<template>
  <detail-tab-item
    title="对外投资"
    id="duiwaitouzi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-invest.js";
export default {
  name: "DetailDuiwaitouzi",
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
        ["KeyNo", { text: "内部KeyNo", grid: 2, align: "center" }],
        ["Name", { text: "公司名称", grid: 4, align: "left" }],
        ["OperName", { text: "法人", grid: 1, align: "center" }],
        ["No", { text: "注册号", grid: 2, align: "center" }],
        ["CreditCode", { text: "全国统一信用代码", grid: 2, align: "center" }],
        ["EconKind", { text: "企业类型", grid: 2, align: "center" }],
        ["RegistCapi", { text: "注册资本", grid: 2, align: "left" }],
        ["FundedRatio", { text: "出资比例", grid: 1, align: "center" }],
        [
          "StartDate",
          { text: "成立日期", grid: 2, align: "center", isDate: true }
        ],
        ["Status", { text: "状态", grid: 1, align: "center" }]
      ]);
      const entriesForRender = [
        "Name",
        "OperName",
        "RegistCapi",
        "FundedRatio",
        "StartDate",
        "Status"
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
