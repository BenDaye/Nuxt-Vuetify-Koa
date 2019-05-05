<template>
  <div class="loading-page">
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300">
      <v-card
        :color="color"
        dark>
        <v-card-text>
          {{ text }}
          <v-progress-linear
            :indeterminate="indeterminate"
            color="white"
            class="mb-0" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      text: '加载中，请稍候...',
      indeterminate: false,
      color: 'info'
    }
  },
  methods: {
    start() {
      this.text = '加载中，请稍候...'
      this.color = 'info'
      this.indeterminate = true
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail() {
      this.text = '加载失败，请刷新重试。'
      this.color = 'error'
      this.indeterminate = false
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
}
</style>
