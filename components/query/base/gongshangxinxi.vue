<template>
  <detail-tab-item
    title="工商信息"
    id="gongshangxinxi">
    <v-container
      fluid
      class="pa-0">
      <v-layout
        row
        wrap>
        <v-flex
          xs4
          text-xs-center>
          <query-table-card
            :type="1"
            value="法定代表人"/>
        </v-flex>
        <v-flex
          xs2
          text-xs-center>
          <query-table-card
            :type="1"
            value="注册信息"/>
        </v-flex>
        <v-flex
          xs6
          text-xs-center>
          <query-table-card
            :type="1"
            value="股权结构图"/>
        </v-flex>
        <v-flex
          xs4
          d-flex>
          <query-table-card>
            <v-container
              fluid
              grid-list-lg>
              <v-layout
                row
                align-center>
                <v-avatar
                  tile
                  size="48px">
                  <v-img src="/img/query/avatar.png"/>
                </v-avatar>
                <div class="subheading pl-3">{{ renderData.OperName }}</div>
              </v-layout>
            </v-container>
          </query-table-card>
        </v-flex>
        <v-flex xs2>
          <query-table-card>
            <div>注册资本</div>
            <div>{{ renderData.RegistCapi }}</div>
          </query-table-card>
          <query-table-card>
            <div>注册时间</div>
            <div>{{ renderData.StartDate | formatDate }}</div>
          </query-table-card>
          <query-table-card>
            <div>公司状态</div>
            <div>{{ renderData.Status }}</div>
          </query-table-card>
        </v-flex>
        <v-flex
          xs6
          d-flex>
          <query-table-card>
            <!-- <v-container fluid> -->
            <v-layout
              justify-center
              align-center
              wrap>
              <v-flex xs12>
                <v-img
                  src="/img/query/equitydef.png"
                  max-height="140"
                  contain/>
              </v-flex>
              <v-btn
                small
                color="orange darken-3 white--text">登录查看</v-btn>
            </v-layout>
            <!-- </v-container> -->
          </query-table-card>
        </v-flex>

        <template v-for="(item, index) in dataToMap">
          <v-flex
            xs2
            d-flex
            :key="item[0]">
            <query-table-card
              :type="1"
              :value="item[0]"/>
          </v-flex>
          <v-flex
            v-bind="{ [`xs${['地址', '经营范围'].includes(item[0]) ? 10 : 4}`]: true }"
            d-flex
            :key="index">
            <query-table-card
              :value="item[1]"
              :wrap="['地址', '经营范围'].includes(item[0])"/>
          </v-flex>
        </template>

      </v-layout>
    </v-container>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import QueryTableCard from "_c/query/table/card";
import mock from "./mock-base.js";
const dayjs = require("dayjs");
export default {
  name: "DetailGongshangxinxi",
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
  data() {
    return {
      mockData: mock
    };
  },
  filters: {
    formatDate(date) {
      return date ? dayjs(date).format("YYYY年MM月DD日") : "";
    }
  },
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    },
    dataDic() {
      const dic = new Map([
        // ["KeyNo", "内部KeyNo"],
        // ["Name", "公司名称"],
        ["No", "注册号"],
        ["CreditCode", "统一社会信用代码"],
        ["OrgNo", "组织机构代码"],
        ["BelongOrg", "登记机关"],
        // ["OperName", "法人名"],
        // ["StartDate", "成立日期"],
        // ["EndDate", "吊销日期"],
        // ["Status", "企业状态"],
        ["Province", "省份"],
        // ["UpdatedDate", "更新日期"],
        ["RegistCapi", "注册资本"],
        ["EconKind", "企业类型"],
        ["Term", "营业期限"],
        // ["TermStart", "营业开始日期"],
        // ["TeamEnd", "营业结束日期"],
        ["CheckDate", "发照日期"],
        ["IsOnStock", "是否上市"],
        // ["StockNumber", "上市公司代码"],
        // ["StockType", "上市类型"],
        // ["ImageUrl", "企业Logo"],
        ["Address", "地址"],
        ["Scope", "经营范围"]
      ]);

      const entriesForRender = [
        "No",
        "BelongOrg",
        "Province",
        "CreditCode",
        "EconKind",
        "Term",
        "OrgNo",
        "IsOnStock",
        "Address",
        "Scope"
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
    dataToMap() {
      let map = new Map();
      for (const k of Object.keys(this.dataDic)) {
        let rd;
        if (k === "IsOnStock") {
          if (this.renderData[k].toString() === "0") {
            rd = "未上市";
          } else {
            rd = "已上市";
          }
        } else if (k === "Term") {
          rd = `${dayjs(this.renderData["TermStart"]).format(
            "YYYY年MM月DD日"
          )} - ${dayjs(this.renderData["TeamEnd"]).format("YYYY年MM月DD日")}`;
        } else {
          rd = this.renderData[k];
        }
        map.set(this.dataDic[k], rd);
      }
      return [...map.entries()];
    }
    // provinceDic() {
    //   const dic = new Map([
    //     ["BJ", "北京市"],
    //     ["TJ", "天津市"],
    //     ["SH", "上海市"],
    //     ["CQ", "重庆市"],
    //     ["HB", "河北省"],
    //     ["SX", "山西省"],
    //     ["LN", "辽宁省"],
    //     ["JL", "吉林省"],
    //     ["HLJ", "黑龙江省"],
    //     ["JS", "江苏省"],
    //     ["ZJ", "浙江省"],
    //     ["AH", "安徽省"],
    //     ["FJ", "福建省"],
    //     ["JX", "江西省"],
    //     ["SD", "山东省"],
    //     ["HN", "河南省"],
    //     ["HB", "湖北省"],
    //     ["HN", "湖南省"],
    //     ["GD", "广东省"],
    //     ["HN", "海南省"],
    //     ["SC", "四川省"],
    //     ["GZ", "贵州省"],
    //     ["YN", "云南省"],
    //     ["SX", "陕西省"],
    //     ["GS", "甘肃省"],
    //     ["QH", "青海省"],
    //     ["TW", "台湾省"],
    //     ["NMG", "内蒙古自治区"],
    //     ["GX", "广西壮族自治区"],
    //     ["XZ", "西藏自治区"],
    //     ["NX", "宁夏回族自治区"],
    //     ["XJ", "新疆维吾尔自治区"],
    //     ["XG", "香港特别行政区"],
    //     ["AM", "澳门特别行政区"]
    //   ]);
    //   return [...dic.entries()];
    // },
  }
};
</script>
