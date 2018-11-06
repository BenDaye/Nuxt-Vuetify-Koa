<template>
  <ben-container>
    <v-responsive :aspect-ratio="16/8">
      <v-container
        fluid
        fill-height>
        <v-layout
          row
          wrap
          align-center
          justify-space-around
          fill-height>
          <v-flex
            xs12
            sm5
            lg3
            class="hidden-xs-only">
            <v-img src="/img/login/login_pic.png"/>
          </v-flex>
          <slot/>
        </v-layout>
      </v-container>
    </v-responsive>
  </ben-container>
</template>

<script>
import BenContainer from '~/components/container'
export default {
  name: 'LoginContainer',
  components: {
    BenContainer
  }
}
</script>
