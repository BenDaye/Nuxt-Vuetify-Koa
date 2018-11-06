<template>
  <v-container
    fluid
    class="pa-0">
    <v-layout column>
      <v-carousel
        :style="$vuetify.breakpoint.xsOnly ? { height: '240px' } : { height:'460px' }"
        hide-controls
        hide-delimiters>
        <v-carousel-item src="/img/home-carousel-1.jpg">
          <v-flex
            text-xs-center
            class="pt-5">
            <div
              :class="$vuetify.breakpoint.xsOnly ? 'headline' : 'display-3'"
              class="white--text">精准的行业数据对比</div>
            <div
              :class="$vuetify.breakpoint.xsOnly ? 'subheading' : 'headline'"
              class="white--text pt-2">一目了然各行业通过数值之间的对比</div>
          </v-flex>
        </v-carousel-item>
        <v-carousel-item src="/img/home-carousel-2.jpg">
          <v-flex
            text-xs-center
            xs8
            class="pt-5 mt-5">
            <div
              :class="$vuetify.breakpoint.xsOnly ? 'headline' : 'display-3'"
              class="white--text">全面的数据服务</div>
            <div
              :class="$vuetify.breakpoint.xsOnly ? 'subheading' : 'headline'"
              class="white--text pt-2">不断增添互联网数据源</div>
            <div
              :class="$vuetify.breakpoint.xsOnly ? 'subheading pt-1' : 'headline pt-2'"
              class="white--text">以专业的数据服务处于行业前列</div>
          </v-flex>
        </v-carousel-item>
      </v-carousel>

      <ben-container :no-padding="$vuetify.breakpoint.xsOnly">
        <index-service/>
        <index-about-news/>
        <index-partner/>
      </ben-container>

    </v-layout>
  </v-container>
</template>

<script>
import BenContainer from '~/components/container'
import IndexService from '~/components/index/service'
import IndexPartner from '~/components/index/partner'
import IndexAboutNews from '~/components/index/about&news'
export default {
  name: 'IndexPage',
  components: {
    BenContainer,
    IndexService,
    IndexPartner,
    IndexAboutNews
  },
  data() {
    return {}
  }
}
</script>
