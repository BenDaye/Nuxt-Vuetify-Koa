<template>
  <detail-tab-item
    title="被执行信息"
    id="beizhixingxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-beizhixing.js";
export default {
  name: "DetailBeizhixingxinxi",
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
        [
          "Sourceid",
          {
            text: "官网系统ID（内部保留字段，一般为空）",
            grid: 2,
            align: "center"
          }
        ],
        ["Name", { text: "名称", grid: 2, align: "center" }],
        ["Anno", { text: "立案号", grid: 6, align: "left" }],
        [
          "Liandate",
          { text: "立案时间", grid: 2, align: "center", isDate: true }
        ],
        ["ExecuteGov", { text: "执行法院", grid: 2, align: "left" }],
        ["Biaodi", { text: "标地", grid: 1, align: "center" }],
        [
          "Status",
          { text: "状态（内部保留字段，现已不使用）", grid: 2, align: "center" }
        ],
        [
          "PartyCardNum",
          { text: "身份证号码/组织机构代码", grid: 2, align: "center" }
        ],
        [
          "Updatedate",
          {
            text: "数据更新时间（内部保留字段，现已不再更新时间）",
            grid: 2,
            align: "center"
          }
        ]
      ]);
      const entriesForRender = ["Anno", "Liandate", "ExecuteGov", "Biaodi"];

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
