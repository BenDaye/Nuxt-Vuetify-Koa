<template>
  <detail-tab-item
    title="司法拍卖"
    id="sifapaimai">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-sifapaimai.js";
export default {
  name: "DetailSifapaimai",
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
        ["Id", { text: "主键", grid: 2, align: "center" }],
        ["Name", { text: "标题", grid: 3, align: "left" }],
        ["Executegov", { text: "委托法院", grid: 3, align: "left" }],
        ["ActionRemark", { text: "拍卖时间", grid: 3, align: "left" }],
        ["YiWu", { text: "起拍价", grid: 2, align: "center" }]
      ]);
      const entriesForRender = ["Name", "Executegov", "ActionRemark", "YiWu"];

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
