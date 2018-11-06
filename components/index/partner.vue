<template>
  <intro-card
    title="合作伙伴"
    icon="thumb_up">
    <v-card>
      <v-tabs
        v-model="partnerTab"
        slider-color="orange darken-2">
        <v-tab :class="partnerTab === 0 ? 'orange--text text--darken-3' : ''">合作机构</v-tab>
        <v-tab :class="partnerTab === 1 ? 'orange--text text--darken-3' : ''">信息源单位</v-tab>
      </v-tabs>
      <v-divider/>
      <v-tabs-items v-model="partnerTab">
        <v-tab-item>
          <v-container
            fluid
            grid-list-lg
            class="px-0">
            <v-layout
              row
              wrap>
              <v-flex
                v-for="(item, index) in 23"
                :key="index"
                xs6
                lg2
                d-flex>
                <v-img
                  :src="index < 3 ? `/img/home-partner-${++index}.png`: `/img/home-bank-${index - 2}.jpg` "
                  :max-height="index < 3 ? 42 : 48"
                  contain/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container
            fluid
            grid-list-lg
            class="px-0">
            <v-layout
              row
              wrap>
              <v-flex
                v-for="(item, index) in partnerSourceList"
                :key="index"
                xs6
                lg2>
                <v-btn flat><span class="headline pr-2 error--text">·</span><span class="body-1">{{ item }}</span></v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </intro-card>
</template>

<script>
import IntroCard from '~/components/index/intro-card'
export default {
  name: 'IndexPartner',
  components: {
    IntroCard
  },
  data() {
    return {
      partnerTab: 0,
      partnerSourceList: [
        '广西区质监局',
        '南宁市工商局',
        '青秀区工商局',
        '兴宁区工商局',
        '江南区工商局',
        '西乡塘区工商局',
        '良庆区工商局',
        '邕宁区工商局',
        '武鸣区工商局',
        '东盟商务区工商局',
        '五象新区工商局',
        '横县工商局',
        '宾阳县工商局',
        '上林县工商局',
        '隆安县工商局',
        '马山县工商局'
      ]
    }
  }
}
</script>
