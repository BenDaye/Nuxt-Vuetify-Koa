<template>
  <intro-card
    title="产品服务"
    icon="assignment">
    <v-btn
      slot="more"
      flat
      color="grey"
      to="/product">查看更多</v-btn>
    <v-container
      fluid
      grid-list-lg
      class="pa-0">
      <v-layout
        row
        wrap>
        <v-flex
          v-for="(item, index) in serviceList"
          :key="index"
          xs12
          md3
          lg3
          d-flex>
          <v-card
            hover
            to="/query">
            <v-container
              fluid
              class="pa-2">
              <v-layout
                :class="`card${++index}`"
                class="card-icon"
                column>
                <v-flex text-xs-center>
                  <v-icon
                    x-large
                    class="white--text">{{ item.icon }}</v-icon>
                </v-flex>
                <v-flex text-xs-center>
                  <span class="white--text subheading">{{ item.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-text>
              <span>{{ item.content }}</span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </intro-card>
</template>

<script>
import IntroCard from '~/components/index/intro-card'
export default {
  name: 'IndexService',
  components: {
    IntroCard
  },
  data() {
    return {
      serviceList: [
        {
          icon: 'library_books',
          title: '信用报告',
          content:
            '南国征信为个人和企业提供信用报告服务，帮助用户缓解信息不对称，有效识别和防范信用风险。'
        },
        {
          icon: 'font_download',
          title: '信用评分',
          content:
            '利用信贷记录、政府数据、行为数据等多源大数据为信用主体进行多维度信用分析，形成信用评分。'
        },
        {
          icon: 'notifications_active',
          title: '风险预警',
          content:
            '南国征信根据客户外部环境与内部环境的变化，对客户未来风险进行预测和报警。'
        },
        {
          icon: 'local_atm',
          title: '精准营销',
          content:
            '南国征信通过对合作机构的存量客户数据以及自身海量数据进行对比分析，协助企业等机构营销符合条件的存量及新增客户。'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.card-icon {
  border-radius: 2px;
  &.card1 {
    background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  }
  &.card2 {
    background-image: linear-gradient(135deg, #81fbb8 10%, #28c76f 100%);
  }
  &.card3 {
    background-image: linear-gradient(135deg, #feb692 10%, #ea5455 100%);
  }
  &.card4 {
    background-image: linear-gradient(135deg, #ffe985 10%, #fa742b 100%);
  }
}
</style>
