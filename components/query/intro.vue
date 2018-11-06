<template>
  <v-flex>
    <v-card>
      <v-container
        fluid
        grid-list-lg>
        <v-layout
          row
          align-center
          class="px-3">
          <img
            src="@/assets/query/defaultCompanyLogo.jpg"
            height="80"
            width="80"
            alt="logo">
          <v-flex>
            <v-flex
              class="pl-4 py-2 title">{{ value.Name || '/' }}
              <v-chip
                v-if="status"
                label
                :color="status === '存续' ? 'success' : 'error'"
                outline>{{ status }}</v-chip>
            </v-flex>
            <v-layout
              row
              wrap
              class="pl-4">
              <v-flex
                xs12
                sm12
                md8
                lg6
                class="body-1">
                统一社会信用代码：
                <span class="body-2">{{ value.CreditCode || '/' }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md4
                lg6
                class="body-1">
                法定代表人：
                <span class="body-2">{{ value.OperName || '/' }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md8
                lg6
                class="body-1">
                注册号：
                <span class="body-2">{{ value.No || '/' }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md4
                class="body-1">
                成立日期：
                <span class="body-2">{{ startDate || '/' }}</span>
              </v-flex>
              <v-flex
                xs12
                class="body-1">
                地址：
                <span class="body-2">{{ value.Address || '/' }}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <!-- TODO -->
          <v-btn
            outline
            color="primary"
            disabled>关注</v-btn>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
const dayjs = require("dayjs");
export default {
  name: "DetailIntro",
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    value() {
      if (this.data && this.data !== {}) {
        return this.data;
      } else
        return {
          Name: "",
          CreditCode: "",
          OperName: "",
          No: "",
          Address: "",
          StartDate: "",
          Status: ""
        };
    },
    startDate() {
      if (this.value.StartDate) {
        return dayjs(this.value.StartDate).format("YYYY年MM月DD日");
      } else return this.value.StartDate;
    },
    status() {
      return this.value.Status.includes("存续") ? "存续" : this.value.Status;
    }
  }
};
</script>
