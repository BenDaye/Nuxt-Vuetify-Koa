<template>
  <v-snackbar
    v-model="noticeVisible"
    :color="notice.type"
    :multi-line="!$vuetify.breakpoint.xsOnly"
    :timeout="0"
    :vertical="!$vuetify.breakpoint.xsOnly"
    top
    right
    auto-height>
    <v-layout align-center>
      <v-icon v-html="notice.icon" />
      <span class="title pl-2 text-no-wrap text-truncate">{{ $vuetify.breakpoint.xsOnly ? notice.content : notice.title }}</span>
    </v-layout>
    <p
      v-show="!$vuetify.breakpoint.xsOnly"
      class="pt-2 text-no-wrap text-truncate">
      {{ notice.content }}
    </p>
    <v-btn
      icon
      flat
      @click="$hideMsg()">
      <v-icon v-html="'close'" />
    </v-btn>
  </v-snackbar>
</template>

<script>
let timer
export default {
  name: 'Notice',
  data() {
    return {
      timeout: 30000
    }
  },
  computed: {
    notice() {
      return this.$store.state.notice
    },
    noticeVisible: {
      get() {
        return this.$store.state.notice.visible
      },
      set(value) {
        this.handleNotice({ visible: value })
      }
    }
  },
  watch: {
    noticeVisible(v) {
      if (v) {
        this.timerStart()
      } else this.timerEnd()
    }
  },
  methods: {
    timerStart() {
      if (!this.timeout) return
      timer = setTimeout(() => {
        this.$hideMsg()
      }, this.timeout)
    },
    timerEnd() {
      clearTimeout(timer)
    }
  }
}
</script>
