<template>
  <detail-tab-item
    title="变更记录"
    id="biangengjilu">
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
  name: "DetailBiangengjilu",
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
      mockData: mock.ChangeRecords
    };
  },
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    },
    dataDic() {
      const dic = new Map([
        ["ProjectName", { text: "变更事项", grid: 2, align: "center" }],
        [
          "BeforeContent",
          { text: "变更前内容", grid: 4, align: "left", isWrapText: true }
        ],
        [
          "AfterContent",
          { text: "变更后内容", grid: 4, align: "left", isWrapText: true }
        ],
        [
          "ChangeDate",
          { text: "变更日期", grid: 2, align: "center", isDate: true }
        ]
      ]);
      const entriesForRender = [
        "ProjectName",
        "BeforeContent",
        "AfterContent",
        "ChangeDate"
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
