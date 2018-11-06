<template>
  <detail-tab-item
    title="动产抵押"
    id="dongchandiya">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-dongchan.js";
export default {
  name: "DetailDongchandiya",
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
        ["RegisterNo", { text: "登记编号", grid: 6, align: "center" }],
        [
          "RegisterDate",
          { text: "登记时间", grid: 2, align: "center", isDate: true }
        ],
        [
          "PublicDate",
          { text: "公示时间", grid: 2, align: "center", isDate: true }
        ],
        ["RegisterOffice", { text: "登记机关", grid: 2, align: "center" }],
        [
          "DebtSecuredAmount",
          { text: "被担保债权数额", grid: 2, align: "center" }
        ],
        ["Status", { text: "状态", grid: 1, align: "center" }]
      ]);
      const entriesForRender = [
        "RegisterNo",
        "RegisterDate",
        "DebtSecuredAmount",
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
