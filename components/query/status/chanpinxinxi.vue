<template>
  <detail-tab-item
    title="产品信息"
    id="chanpinxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-chanpin.js";
export default {
  name: "DetailChanpinxinxi",
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
        ["CompanyName", { text: "公司名称", grid: 2, align: "center" }],
        ["Link", { text: "公司的关联链接", grid: 2, align: "center" }],
        [
          "ImageUrl",
          { text: "产品的图片", grid: 2, align: "center", isImg: true }
        ],
        ["Name", { text: "产品名称", grid: 2, align: "center" }],
        ["Domain", { text: "产品领域", grid: 1, align: "center" }],
        ["Tags", { text: "产品标签", grid: 2, align: "center" }],
        ["Category", { text: "产品类型", grid: 1, align: "center" }],
        ["Description", { text: "产品描述", grid: 5, align: "left" }]
      ]);
      const entriesForRender = [
        "ImageUrl",
        "Name",
        "Domain",
        "Category",
        "Description"
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
