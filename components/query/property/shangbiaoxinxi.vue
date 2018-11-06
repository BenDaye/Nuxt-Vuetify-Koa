<template>
  <detail-tab-item
    title="商标信息"
    id="shangbiaoxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-shangbiaoxinxi.js";
export default {
  name: "DetailShangbiaoxinxi",
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
        [
          "ImageUrl",
          { text: "图片地址", grid: 2, align: "center", isImg: true }
        ],
        ["Name", { text: "商标名", grid: 2, align: "center" }],
        ["Status", { text: "商标状态", grid: 2, align: "center" }],
        [
          "AppDate",
          { text: "申请日期", grid: 2, align: "center", isDate: true }
        ],
        ["RegNo", { text: "注册号", grid: 2, align: "center" }],
        ["IntCls", { text: "国际分类", grid: 2, align: "center" }],
        ["ApplicantCn", { text: "申请人中文", grid: 2, align: "center" }],
        ["ApplicantEn", { text: "申请人英文", grid: 2, align: "center" }],
        ["Agent", { text: "代理人名称", grid: 2, align: "center" }],
        ["FlowStatus", { text: "流程状态代码", grid: 2, align: "center" }],
        ["FlowStatusDesc", { text: "流程状态描述", grid: 2, align: "center" }],
        ["HasImage", { text: "是否有图片", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "ImageUrl",
        "Name",
        "Status",
        "AppDate",
        "RegNo",
        "IntCls"
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
