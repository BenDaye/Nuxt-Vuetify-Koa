<template>
  <detail-tab-item
    title="开庭公告"
    id="kaitinggonggao">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-kaiting.js";
export default {
  name: "DetailKaitinggonggao",
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
        ["Executegov", { text: "法院", grid: 2, align: "center" }],
        ["Id", { text: "内部ID", grid: 2, align: "center" }],
        ["CaseNo", { text: "案号", grid: 3, align: "left" }],
        [
          "LianDate",
          { text: "开庭日期", grid: 2, align: "center", isDate: true }
        ],
        ["CaseReason", { text: "案由", grid: 2, align: "left" }],
        ["Prosecutorlist", { text: "原告/上诉人", grid: 2, align: "left" }],
        ["Defendantlist", { text: "被告/被上诉人", grid: 2, align: "left" }]
      ]);
      const entriesForRender = [
        "CaseNo",
        "LianDate",
        "CaseReason",
        "Prosecutorlist",
        "Defendantlist"
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
