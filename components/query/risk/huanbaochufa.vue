<template>
  <detail-tab-item
    title="环保处罚"
    id="huanbaochufa">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-huanbaochufa.js";
export default {
  name: "DetailHuanbaochufa",
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
        ["CaseNo", { text: "决定书文号", grid: 4, align: "center" }],
        [
          "PunishDate",
          { text: "处罚日期", grid: 2, align: "center", isDate: true }
        ],
        ["IllegalType", { text: "违法类型", grid: 2, align: "center" }],
        ["PunishGov", { text: "处罚单位", grid: 4, align: "center" }]
      ]);
      const entriesForRender = [
        "CaseNo",
        "PunishDate",
        "IllegalType",
        "PunishGov"
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
