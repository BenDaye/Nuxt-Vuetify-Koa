<template>
  <detail-tab-item
    title="分支机构"
    id="fenzhijigou">
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
  name: "DetailFenzhijigou",
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
      mockData: mock.Branches
    };
  },
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    },
    dataDic() {
      const dic = new Map([
        ["CompanyId", { text: "CompanyId", grid: 2, align: "center" }],
        ["RegNo", { text: "注册号", grid: 2, align: "center" }],
        ["Name", { text: "名称", grid: 11, align: "center" }],
        ["BelongOrg", { text: "登记机关", grid: 2, align: "center" }],
        ["CreditCode", { text: "社会统一信用代码", grid: 2, align: "center" }],
        ["OperName", { text: "法人姓名或负责人姓名", grid: 2, align: "center" }]
      ]);
      const entriesForRender = ["Name"];

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
