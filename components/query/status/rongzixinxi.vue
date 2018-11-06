<template>
  <detail-tab-item
    title="融资信息"
    id="rongzixinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-rongzi.js";
export default {
  name: "DetailRongzixinxi",
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
        ["CompanyName", { text: "公司名", grid: 2, align: "center" }],
        ["ProductName", { text: "产品名称", grid: 2, align: "center" }],
        ["Date", { text: "融资时间", grid: 2, align: "center", isDate: true }],
        ["Amount", { text: "融资金额", grid: 2, align: "left" }],
        ["Round", { text: "几轮融资", grid: 2, align: "center" }],
        ["Investment", { text: "投资方", grid: 3, align: "left" }],
        ["KeyNo", { text: "KeyNo", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Date",
        "ProductName",
        "Round",
        "Amount",
        "Investment"
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
