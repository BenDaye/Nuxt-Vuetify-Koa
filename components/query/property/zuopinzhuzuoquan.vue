<template>
  <detail-tab-item
    title="作品著作权"
    id="zuopinzhuzuoquan">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-zuopinzhuzuoquan.js";
export default {
  name: "DetailZuopinzhuzuoquan",
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
        ["Name", { text: "作品名称", grid: 2, align: "left" }],
        [
          "PublishDate",
          { text: "首次发布日期", grid: 2, align: "center", isDate: true }
        ],
        [
          "FinishDate",
          { text: "创作完成日期", grid: 2, align: "center", isDate: true }
        ],
        ["RegisterNo", { text: "登记号", grid: 2, align: "left" }],
        [
          "RegisterDate",
          { text: "登记日期", grid: 2, align: "center", isDate: true }
        ],
        ["Category", { text: "类别", grid: 1, align: "center" }],
        ["Owner", { text: "作品著作权人", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Name",
        "PublishDate",
        "FinishDate",
        "RegisterNo",
        "RegisterDate",
        "Category"
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
