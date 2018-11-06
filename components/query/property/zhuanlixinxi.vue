<template>
  <detail-tab-item
    title="专利信息"
    id="zhuanlixinxi">
    <query-table
      :header-data="dataDic"
      :content-data="renderData"/>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTable from "_c/query/table/table";
import mock from "./mock-zhuanlixinxi.js";
export default {
  name: "DetailZhuanlixinxi",
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
        ["DocumentTypes", { text: "文档类型", grid: 2, align: "center" }],
        ["Agent", { text: "代理人", grid: 2, align: "center" }],
        ["LegalStatusDate", { text: "法律状态日期", grid: 2, align: "center" }],
        ["PrimaryExaminer", { text: "审查官", grid: 2, align: "center" }],
        ["AssiantExaminer", { text: "助理审查官", grid: 2, align: "center" }],
        ["Cites", { text: "引用", grid: 2, align: "center" }],
        ["OtherReferences", { text: "其他参考文献", grid: 2, align: "center" }],
        ["PatentImage", { text: "专利图片", grid: 2, align: "center" }],
        [
          "IPCList",
          { text: "国际专利分类号（IPC）", grid: 2, align: "center" }
        ],
        ["ApplicationNumber", { text: "申请号", grid: 2, align: "center" }],
        ["ApplicationDate", { text: "申请日", grid: 2, align: "center" }],
        ["KindCodeDesc", { text: "类型名称", grid: 2, align: "center" }],
        [
          "PublicationNumber",
          { text: "公开（公告）号", grid: 2, align: "center" }
        ],
        [
          "PublicationDate",
          { text: "公开（公告）日", grid: 2, align: "center", isDate: true }
        ],
        ["LegalStatusDesc", { text: "法律状态详情", grid: 2, align: "center" }],
        ["Title", { text: "标题", grid: 5, align: "left" }],
        ["Abstract", { text: "摘要介绍", grid: 2, align: "center" }],
        ["Agency", { text: "专利代理机构", grid: 2, align: "center" }],
        ["IPCDesc", { text: "国际专利分类详情", grid: 2, align: "center" }],
        ["InventorStringList", { text: "发明人", grid: 2, align: "center" }],
        ["AssigneestringList", { text: "申请人", grid: 2, align: "center" }],
        [
          "PatentLegalHistory",
          { text: "法律状态历史记录", grid: 2, align: "center" }
        ]
      ]);
      const entriesForRender = [
        "KindCodeDesc",
        "PublicationNumber",
        "PublicationDate",
        "Title"
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
