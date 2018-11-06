<template>
  <detail-tab-item
    title="公司简介"
    id="gongsijianjie">
    <v-card>
      <v-card-text>
        <div v-html="renderData.Content"/>
      </v-card-text>
    </v-card>
  </detail-tab-item>
</template>

<script>
import DetailTabItem from "_c/query/tab-item";
import mock from "./mock-intro.js";
export default {
  name: "DetailGongsijianjie",
  components: {
    DetailTabItem
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
  computed: {
    renderData() {
      return this.data ? this.data : this.mockData;
    }
  }
};
</script>
