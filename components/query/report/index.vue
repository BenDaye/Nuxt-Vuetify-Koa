<template>
  <v-layout column>
    <v-flex>
      <v-btn
        v-for="(item, index) in renderData"
        :key="index"
        depressed
        :color="activeTab === index ? 'orange darken-3 white--text' : ''"
        @click.stop="activeTab = index">
        {{ item.Year }}
      </v-btn>
    </v-flex>
    <v-divider/>

    <v-tabs-items v-model="activeTab">
      <v-tab-item
        v-for="(item, index) in renderData"
        :key="index">
        <p class="grey--text pt-3 pl-3">{{ item.PublishDate | formatDate }}公布</p>
        <detail-report-basic :data="basicInfoData"/>
        <detail-report-web :data="webSiteList"/>
        <detail-report-partner :data="partnerList"/>
        <detail-report-assets :data="assetsData"/>
      </v-tab-item>
    </v-tabs-items>
  </v-layout>
</template>

<script>
import DetailReportBasic from "./basic-info-data/index";
import DetailReportWeb from "./web-site-list/index";
import DetailReportPartner from "./partner-list/index";
import DetailReportAssets from "./assets-data/index";
import mock from "./mock-report.js";
const dayjs = require("dayjs");
export default {
  name: "DetailReport",
  components: {
    DetailReportBasic,
    DetailReportWeb,
    DetailReportPartner,
    DetailReportAssets
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
      mockData: mock,
      activeTab: 0
    };
  },
  filters: {
    formatDate(date) {
      return date ? dayjs(date).format("YYYY年MM月DD日") : "";
    }
  },
  computed: {
    renderData() {
      return this.data.length ? this.data : this.mockData;
    },
    basicInfoData() {
      return this.renderData[this.activeTab].BasicInfoData;
    },
    webSiteList() {
      return this.renderData[this.activeTab].WebSiteList;
    },
    partnerList() {
      return this.renderData[this.activeTab].PartnerList;
    },
    assetsData() {
      return this.renderData[this.activeTab].AssetsData;
    }
  }
};
</script>
