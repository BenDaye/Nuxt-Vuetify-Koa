<template>
  <detail-tab-item
    title="失信信息"
    id="shixinxinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData" />
    {{ data }}
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-shixin.js";
export default {
  name: "DetailShixinxinxi",
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
          "Sourceid",
          {
            text: "官网主键（内部保留字段，一般为空）",
            grid: 2,
            align: "center"
          }
        ],
        [
          "Uniqueno",
          {
            text: "唯一编号（内部保留字段，一般为空）",
            grid: 2,
            align: "center"
          }
        ],
        ["Name", { text: "被执行人姓名/名称", grid: 2, align: "center" }],
        ["Anno", { text: "案号", grid: 4, align: "left" }],
        [
          "Publicdate",
          { text: "发布时间", grid: 2, align: "center", isDate: true }
        ],
        ["Executegov", { text: "执行法院", grid: 2, align: "left" }],
        [
          "Liandate",
          { text: "立案时间", grid: 2, align: "center", isDate: true }
        ],
        [
          "Orgno",
          { text: "身份证号码/组织机构代码", grid: 2, align: "center" }
        ],
        [
          "Ownername",
          { text: "法定代表人或者负责人姓名", grid: 2, align: "center" }
        ],
        ["Province", { text: "省份", grid: 1, align: "center" }],
        [
          "Executeunite",
          { text: "做出执行依据单位", grid: 2, align: "center" }
        ],
        ["Yiwu", { text: "生效法律文书确定的义务", grid: 2, align: "center" }],
        [
          "Executestatus",
          { text: "被执行人的履行情况", grid: 2, align: "center" }
        ],
        [
          "Actionremark",
          { text: "失信被执行人行为具体情形", grid: 2, align: "center" }
        ],
        ["Age", { text: "年龄", grid: 2, align: "center" }],
        ["Sexy", { text: "性别", grid: 2, align: "center" }],
        [
          "Updatedate",
          {
            text: "数据更新时间（内部保留字段，现已不再更新时间）",
            grid: 2,
            align: "center"
          }
        ],
        ["Executeno", { text: "执行依据文号", grid: 2, align: "center" }],
        ["Performedpart", { text: "已履行", grid: 2, align: "center" }],
        ["Unperformpart", { text: "未履行", grid: 2, align: "center" }],
        [
          "OrgType",
          {
            text: "组织类型（1：自然人，2：企业，3：社会组织，空白：无法判定）",
            grid: 2,
            align: "center"
          }
        ],
        ["OrgTypeName", { text: "组织类型名称", grid: 2, align: "center" }]
      ]);
      const entriesForRender = [
        "Anno",
        "Publicdate",
        "Executegov",
        "Liandate",
        "Province"
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
