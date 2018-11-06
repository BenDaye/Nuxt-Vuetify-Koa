<template>
  <detail-tab-item
    title="软件著作权"
    id="ruanjianzhuzuoquan">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-ruanjianzhuzuoquan.js";
export default {
  name: "DetailRuanjianzhuzuoquan",
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
        ["Name", { text: "软件全称", grid: 2, align: "left" }],
        ["VersionNo", { text: "版本号", grid: 1, align: "center" }],
        [
          "PublishDate",
          { text: "发布日期", grid: 2, align: "center", isDate: true }
        ],
        ["ShortName", { text: "软件简称", grid: 2, align: "left" }],
        ["RegisterNo", { text: "登记号", grid: 2, align: "center" }],
        [
          "RegisterAperDate",
          { text: "登记批准日期", grid: 2, align: "center", isDate: true }
        ],
        ["Category", { text: "分类号", grid: 2, align: "center" }],
        ["Owner", { text: "软件著作权人", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Name",
        "VersionNo",
        "PublishDate",
        "ShortName",
        "RegisterNo",
        "RegisterAperDate"
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
