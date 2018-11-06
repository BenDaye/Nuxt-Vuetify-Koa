<template>
  <div>
    <v-card
      flat>
      <v-container
        fluid
        grid-list-xs
        class="px-0">
        <v-layout
          row
          align-center
          class="px-3">
          <v-flex
            v-if="!$vuetify.breakpoint.xsOnly"
            xs2>
            <v-img
              :aspect-ratio="1/1"
              src="/img/query/defaultCompanyLogo.jpg"
              max-height="180"
              contain
              alt="defaultCompanyLogo"/>
          </v-flex>

          <v-flex>
            <!-- <v-btn
              flat
              left
              color="primary"
              large>
              {{ value.Name }}
            </v-btn> -->
            <div
              class="info--text pl-4 py-2 subheading font-weight-medium company-name"
              @click="handleDetail(value.Name)">{{ value.Name }}</div>
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
                <span class="body-2">{{ value.CreditCode }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md4
                lg6
                class="body-1">
                法定代表人：
                <span class="body-2">{{ value.OperName }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md8
                lg6
                class="body-1">
                注册号：
                <span class="body-2">{{ value.No }}</span>
              </v-flex>
              <v-flex
                xs12
                sm12
                md4
                class="body-1">
                成立日期：
                <span class="body-2">{{ startDate }}</span>
              </v-flex>
              <v-flex
                xs12
                class="body-1">
                查询纬度：
                <span class="body-2">{{ value.Dimension }}</span>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-chip
            :color="status === '存续' ? 'success' : 'error'"
            label
            outline>{{ status }}</v-chip>
        </v-layout>
      </v-container>
    </v-card>
    <v-divider/>
  </div>
</template>

<script>
const dayjs = require('dayjs')
export default {
  name: 'QueryListItem',
  props: {
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    startDate() {
      return dayjs(this.value.StartDate).format('YYYY年MM月DD日')
    },
    status() {
      return this.value.Status.includes('存续') ? '存续' : this.value.Status
    }
  },
  methods: {
    handleDetail(name) {
      console.log('​handleDetail -> name', name)
      let route = this.$router.resolve({
        path: '/detail',
        query: { name }
      })
      window.open(route.href, '_blank')
    }
  }
}
</script>

<style lang="less">
.company-name {
  &:hover {
    cursor: pointer;
  }
}
</style>
