<template>
  <detail-tab-item
    title="经营异常"
    id="jingyingyichang">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-yichang.js";
export default {
  name: "DetailJingyingyichang",
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
        ["AddReason", { text: "列入经营异常名录原因", grid: 4, align: "left" }],
        [
          "AddDate",
          { text: "列入日期", grid: 2, align: "center", isDate: true }
        ],
        [
          "RomoveReason",
          { text: "移出经营异常名录原因", grid: 3, align: "left" }
        ],
        [
          "RemoveDate",
          { text: "移出日期", grid: 2, align: "center", isDate: true }
        ],
        ["DecisionOffice", { text: "作出决定机关", grid: 2, align: "center" }],
        [
          "RemoveDecisionOffice",
          { text: "移除决定机关", grid: 2, align: "center" }
        ]
      ]);
      const entriesForRender = [
        "AddReason",
        "AddDate",
        "RomoveReason",
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
