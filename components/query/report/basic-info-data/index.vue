<template>
  <detail-tab-item title="企业基本信息">
    <v-container
      fluid
      class="pa-0">
      <v-layout
        row
        wrap>
        <template v-for="(dataItem, dataIndex) in renderData">
          <v-flex
            xs2
            d-flex
            :key="dataItem[0]">
            <query-table-card
              :type="1"
              :value="dataItem[0]"
              wrap/>
          </v-flex>
          <v-flex
            v-bind="{ [`xs${['电子邮箱', '企业通信地址'].includes(dataItem[0]) ? 10 : 4}`]: true }"
            d-flex
            :key="dataIndex">
            <query-table-card :value="dataItem[1]"/>
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTableCard from "_c/query/table/card";
export default {
  name: "DetailReportBasic",
  components: {
    DetailTabItem,
    QueryTableCard
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    dataDic() {
      const dic = new Map([
        ["RegNo", "注册号"],
        ["Status", "企业经营状态"],
        ["CompanyName", "企业名称"],
        ["OperatorName", "经营者姓名"],
        ["ContactNo", "企业联系电话"],
        ["PostCode", "邮政编码"],
        ["EmployeeCount", "从业人数"],
        ["BelongTo", "隶属关系"],
        ["IsStockRightTransfer", "有限责任公司本年度是否发生股东股权转让"],
        ["HasNewStockOrByStock", "企业是否有投资信息或购买其他公司股权"],
        ["EmailAddress", "电子邮箱"],
        ["Address", "企业通信地址"],
        ["HasWebSite", "是否有网站或网店"],
        ["CapitalAmount", "资金数额"],
        ["HasProvideAssurance", "是否有对外担保信息"],
        ["OperationPlaces", "经营场所"],
        ["MainType", "主体类型"],
        ["OperationDuration", "经营期限"],
        ["IfContentSame", "章程信息(是否一致)"],
        ["DifferentContent", "章程信息(不一致内容)"],
        ["GeneralOperationItem", "经营范围(一般经营项目)"],
        ["ApprovedOperationItem", "经营范围(许可经营项目)"]
      ]);

      const entriesForRender = [
        "RegNo",
        "Status",
        "ContactNo",
        "PostCode",
        "EmployeeCount",
        "BelongTo",
        "IsStockRightTransfer",
        "HasNewStockOrByStock",
        "Address",
        "EmailAddress"
      ];

      let obj = Object.create(null);
      for (const [k, v] of dic) {
        if (!entriesForRender.includes(k)) {
          continue;
        }
        obj[k] = v;
      }
      return obj;
    },
    renderData() {
      let map = new Map();
      for (const k of Object.keys(this.dataDic)) {
        map.set(this.dataDic[k], this.data[k]);
      }
      return [...map.entries()];
    }
  }
};
</script>
