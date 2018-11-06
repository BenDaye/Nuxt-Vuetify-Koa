<template>
  <v-tab-item>
    <intro-card
      title="人才招聘"
      icon="home"
      no-padding>
      <v-card>
        <v-container
          fluid
          fill-height>
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              d-flex>
              <v-img
                :aspect-ratio="16/9"
                :height="$vuetify.breakpoint.xsOnly ? 180 : 360"
                src="/img/about/job.jpg"
                contain/>
            </v-flex>
            <v-flex
              xs12
              d-flex
              text-xs-center>
              <div class="body-1 grey--text">暂无招聘信息</div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </intro-card>
  </v-tab-item>
</template>

<script>
import IntroCard from '~/components/index/intro-card'
export default {
  name: 'AboutRecruit',
  components: {
    IntroCard
  }
}
</script>
