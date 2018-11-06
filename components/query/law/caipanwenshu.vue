<template>
  <detail-tab-item
    title="裁判文书"
    id="caipanwenshu">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-caipanwenshu.js";
export default {
  name: "DetailCaipanwenshu",
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
        ["CaseName", { text: "裁判文书名字", grid: 4, align: "left" }],
        [
          "SubmitDate",
          { text: "发布时间", grid: 2, align: "center", isDate: true }
        ],
        ["CaseNo", { text: "裁判文书编号", grid: 3, align: "left" }],
        ["CaseType", { text: "裁判文书类型", grid: 2, align: "center" }],
        [
          "UpdateDate",
          { text: "审判时间", grid: 2, align: "center", isDate: true }
        ],
        ["IsProsecutor", { text: "是否原告", grid: 2, align: "center" }],
        ["IsDefendant", { text: "是否被告", grid: 2, align: "center" }],
        ["CourtYear", { text: "开庭时间年份", grid: 2, align: "center" }],
        [
          "CaseRole",
          { text: "涉案人员角色", grid: 1, align: "left", isEntries: true }
        ],
        ["Court", { text: "执行法院", grid: 1, align: "center" }]
      ]);
      const entriesForRender = [
        "CaseName",
        "SubmitDate",
        "CaseNo",
        "CaseRole",
        "Court"
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
