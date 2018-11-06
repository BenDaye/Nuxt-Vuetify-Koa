<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout row>
      <v-flex
        v-if="hasNo"
        xs1
        text-xs-center>
        <query-table-card
          :type="1"
          value="序号"/>
      </v-flex>
      <v-flex
        v-for="(headerItem, headerIndex) in header"
        :key="headerIndex"
        text-xs-center
        v-bind="{ [`xs${headerItem.grid? headerItem.grid : 2}`]: true }">
        <query-table-card
          :type="1"
          :value="headerItem.text ? headerItem.text : '???'"/>
      </v-flex>


    </v-layout>

    <v-layout v-if="!contentData">
      <v-flex
        xs12
        text-xs-center>
        <query-table-card value="暂无数据"/>
      </v-flex>
    </v-layout>

    <template v-if="contentData && headerData">
      <template v-for="(contentItem, contentIndex) in contentData">
        <v-layout :key="contentIndex">
          <v-flex
            v-if="hasNo"
            xs1
            d-flex
            text-xs-center>
            <query-table-card :value="`${contentIndex + 1}`"/>
          </v-flex>
          <v-flex
            v-for="(headerItem, headerIndex) in header"
            :key="headerIndex"
            d-flex
            v-bind="{ [`xs${headerItem.grid ? headerItem.grid : 2}`]: true, [`text-xs-${headerItem.align ? headerItem.align : 'left'}`]: true }">
            <query-table-card
              :is-img="headerItem.isImg"
              :is-entries="headerItem.isEntries"
              :is-wrap-text="headerItem.isWrapText"
              :is-date="headerItem.isDate"
              :value="contentItem[headerItem.value]"/>
          </v-flex>
        </v-layout>
      </template>
    </template>
  </v-container>
</template>

<script>
import QueryTableCard from "_c/query/table/card";
export default {
  name: "QueryTable",
  components: {
    QueryTableCard
  },
  props: {
    headerData: {
      type: Object,
      default() {
        return [];
      }
    },
    contentData: {
      type: Array,
      default() {
        return [];
      }
    },
    hasNo: {
      type: Boolean,
      default() {
        return true;
      }
    },
    hasHeader: {
      type: Boolean,
      default() {
        return true;
      }
    }
  },
  computed: {
    header() {
      return Object.values(this.headerData);
    }
  }
};
</script>
