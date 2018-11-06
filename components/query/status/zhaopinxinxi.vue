<template>
  <detail-tab-item
    title="招聘信息"
    id="zhaopinxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-zhaopin.js";
export default {
  name: "DetailZhaopinxinxi",
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
        ["Description", { text: "招聘描述", grid: 2, align: "center" }],
        ["Number", { text: "招聘人数", grid: 2, align: "center" }],
        [
          "PublishTime",
          { text: "职位发布日期", grid: 2, align: "center", isDate: true }
        ],
        ["Title", { text: "职位", grid: 4, align: "left" }],
        ["Salary", { text: "薪资", grid: 2, align: "center" }],
        ["Education", { text: "学历", grid: 1, align: "center" }],
        ["Experience", { text: "经验", grid: 1, align: "center" }],
        ["Source", { text: "招聘来源", grid: 2, align: "center" }],
        ["Area", { text: "地区", grid: 1, align: "center" }]
      ]);
      const entriesForRender = [
        "PublishTime",
        "Title",
        "Salary",
        "Education",
        "Experience",
        "Area"
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
