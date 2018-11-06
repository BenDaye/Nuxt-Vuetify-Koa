<template>
  <detail-tab-item title="企业资产状况信息">
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
            xs4
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
  name: "DetailReportAssets",
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
        ["TotalAssets", "资产总额"],
        ["TotalOwnersEquity", "所有者权益合计"],
        ["GrossTradingIncome", "营业总收入"],
        ["TotalProfit", "利润总额"],
        ["MainBusinessIncome", "营业总收入中主营业务"],
        ["NetProfit", "净利润"],
        ["TotalTaxAmount", "纳税总额"],
        ["TotalLiabilities", "负债总额"],
        ["BankingCredit", "金融贷款"],
        ["GovernmentSubsidy", "获得政府扶持资金、补助"]
      ]);

      const entriesForRender = [
        "TotalAssets",
        "TotalOwnersEquity",
        "GrossTradingIncome",
        "TotalProfit",
        "MainBusinessIncome",
        "NetProfit",
        "TotalTaxAmount",
        "TotalLiabilities"
        // "BankingCredit",
        // "GovernmentSubsidy"
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
