<template>
  <v-app :dark="app.dark">
    <v-content>
      <v-container
        fluid
        fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {
          statusCode: 0,
          message: '未知错误'
        }
      }
    }
  },
  computed: {
    app() {
      return this.$store.state.app
    }
  }
}
</script>
