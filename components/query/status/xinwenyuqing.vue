<template>
  <detail-tab-item
    title="新闻舆情"
    id="xinwenyuqing">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"
      :has-no="false"
      :has-header="false" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-xinwen.js";
export default {
  name: "DetailXinwenyuqing",
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
        ["KeyNo", { text: "标题", grid: 2, align: "center" }],
        ["ImageUrl", { text: "图片url", grid: 2, align: "center" }],
        ["Title", { text: "新闻标题", grid: 8, align: "left" }],
        ["Source", { text: "新闻来源", grid: 2, align: "center" }],
        [
          "PublishTime",
          { text: "新闻发布时间", grid: 2, align: "center", isDate: true }
        ],
        ["Description", { text: "新闻描述", grid: 2, align: "center" }],
        ["Url", { text: "新闻url", grid: 2, align: "center" }]
      ]);
      const entriesForRender = ["Title", "Source", "PublishTime"];

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
