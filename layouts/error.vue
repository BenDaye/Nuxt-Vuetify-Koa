<template>
  <v-layout
    column
    justify-center
    align-center>
    <div
      class="display-4 font-weight-black"
      v-text="error.statusCode" />
    <div
      class="title font-weight-bold mt-4"
      v-text="error.message" />
    <div class="mt-4">
      <v-btn to="/">返回首页</v-btn>
      <v-btn @click.stop="$router.back()">返回上一页</v-btn>
    </div>
  </v-layout>
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
  layout: 'empty'
}
</script>
