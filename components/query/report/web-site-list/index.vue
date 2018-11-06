<template>
  <detail-tab-item title="网站或网店信息">
    <query-table
      :header-data="dataDic"
      :content-data="data" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
export default {
  name: "DetailReportWeb",
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
  computed: {
    dataDic() {
      const dic = new Map([
        ["No", { text: "序号", grid: 2, align: "center" }],
        ["Type", { text: "类型", grid: 2, align: "center" }],
        ["Name", { text: "名称", grid: 4, align: "center" }],
        ["WebSite", { text: "网址", grid: 5, align: "center" }]
      ]);

      const entriesForRender = ["Type", "Name", "WebSite"];

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
