<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout column>
      <v-img
        :height="$vuetify.breakpoint.xsOnly ? 180 : 360"
        src="/img/about/banner-2.jpg"
        position="center center"
        gradient="to top, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4)">
        <ben-container>
          <v-layout
            fill-height
            column
            justify-center>
            <div class="display-1 white--text">关于我们</div>
            <div class="headline white--text">ABOUT US</div>
          </v-layout>
        </ben-container>
      </v-img>

      <ben-container>
        <v-container
          fluid
          grid-list-lg
          class="pa-0">
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              lg2>
              <v-card>
                <v-list v-if="!$vuetify.breakpoint.xsOnly">
                  <template v-for="(item, index) in aboutList">
                    <v-list-tile
                      :key="item"
                      @click="aboutTab = index">
                      <v-list-tile-content>
                        <v-btn
                          :flat="aboutTab !== index"
                          block
                          depressed
                          color="orange darken-3 white--text"
                          large>{{ item }}</v-btn>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-divider
                      v-if="index + 1 < aboutList.length"
                      :key="index"/>
                  </template>

                </v-list>

                <v-tabs
                  v-if="$vuetify.breakpoint.xsOnly"
                  v-model="aboutTab"
                  centered
                  slider-color="orange darken-3"
                  show-arrows>
                  <v-tab
                    v-for="(item, index) in aboutList"
                    :key="index"
                    :class="aboutTab === index ? 'orange--text text--darken-3' : ''">{{ item }}</v-tab>
                </v-tabs>
              </v-card>

            </v-flex>

            <v-flex
              xs12
              lg10>
              <v-tabs-items v-model="aboutTab">
                <about-intro/>
                <about-dev/>
                <about-frame/>
                <about-partner/>
                <about-recruit/>
                <about-contact/>
              </v-tabs-items>
            </v-flex>
          </v-layout>
        </v-container>
      </ben-container>

    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container'
import IntroCard from '~/components/index/intro-card'
import AboutIntro from '~/components/about/intro'
import AboutDev from '~/components/about/development'
import AboutFrame from '~/components/about/frame'
import AboutPartner from '~/components/about/partner'
import AboutRecruit from '~/components/about/recruit'
import AboutContact from '~/components/about/contact'
export default {
  name: 'AboutPage',
  components: {
    BenContainer,
    IntroCard,
    AboutIntro,
    AboutDev,
    AboutFrame,
    AboutPartner,
    AboutRecruit,
    AboutContact
  },
  data() {
    return {
      aboutTab: 0,
      aboutList: [
        '公司简介',
        '发展历程',
        '公司架构',
        '合作伙伴',
        '人才招聘',
        '联系我们'
      ]
    }
  }
}
</script>

<style lang="less">
.v-tabs__icon {
  &.v-tabs__icon--prev,
  &.v-tabs__icon--next {
    top: 12px;
  }
}
</style>
