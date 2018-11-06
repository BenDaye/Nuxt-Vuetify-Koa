<template>
  <v-card
    :color="type === 1 ? 'blue lighten-5' : ''"
    tile>
    <v-card-text :class="type === 1 ? 'body-2' : 'body-1'">
      <v-img
        v-if="isImg"
        :src="value"
        contain
        max-height="60"/>
      <div v-else-if="isEntries">
        <v-tooltip top>
          <div 
            slot="activator" 
            class="text-no-wrap text-truncate">{{ formatEntries[0] ? `${formatEntries[0].R}-${formatEntries[0].P}` : '' }}</div>
          <div
            v-for="(item, index) in formatEntries"
            :key="index">{{ item.R }}-{{ item.P }}</div>
        </v-tooltip>
      </div>
      <div v-else-if="isWrapText">
        <div
          v-for="(item, index) in formatWrapText"
          :key="index">{{ item }}</div>
      </div>
      <div v-else-if="isDate">
        {{ formatDate }}
      </div>
      <v-tooltip 
        top 
        v-else 
        max-width="300">
        <div 
          slot="activator" 
          :class="!wrap ? 'text-no-wrap text-truncate' : ''">{{ value }}</div>
        <span>{{ value }}</span>
      </v-tooltip>
      <!-- <div
        v-else
        :class="(type === 1 && !wrap) ? 'text-no-wrap text-truncate' : ''">{{ value }}</div> -->
      <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
const dayjs = require("dayjs");
export default {
  name: "QueryTableCard",
  props: {
    type: {
      type: Number,
      default() {
        return 0;
      }
    },
    value: {
      type: String,
      default() {
        return "";
      }
    },
    renderHtml: {
      type: Boolean,
      default() {
        return false;
      }
    },
    wrap: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isImg: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isEntries: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isWrapText: {
      type: Boolean,
      default() {
        return false;
      }
    },
    isDate: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  computed: {
    formatEntries() {
      let formatText = this.value;
      if (formatText) {
        return JSON.parse(formatText);
      } else return [];
    },
    formatWrapText() {
      let formatText = this.value;
      if (formatText) {
        return formatText.replace(/；/g, ";").split(";");
      } else return [];
    },
    formatDate() {
      return this.value ? dayjs(this.value).format("YYYY年MM月DD日") : "";
    }
  }
};
</script>
