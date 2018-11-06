<template>
  <v-tab-item>
    <intro-card
      title="公司架构"
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
                :aspect-ratio="5/4"
                src="/img/about/frame.png"
                max-height="480"
                contain/>
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
  name: 'AboutFrame',
  components: {
    IntroCard
  }
}
</script>
