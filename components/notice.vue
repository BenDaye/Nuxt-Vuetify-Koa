<template>
  <v-snackbar
    ref="snackbar"
    v-model="value"
    :timeout="0"
    :vertical="true"
    :color="type"
    top
    right
    auto-height>
    <span class="title">
      <v-icon color="white">{{ type === 'success' ? 'check_circle' : type === 'error' ? 'remove_circle' : type }}</v-icon>
      {{ title }}
    </span>
    <span class="snackbar-content pt-2">
      {{ content }}
    </span>
    <v-btn
      flat
      icon
      @click="msgHide">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
let timeoutFunction
export default {
  name: 'Notice',
  props: {
    value: {
      type: Boolean,
      default() {
        return false
      }
    },
    type: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    content: {
      type: [String, Object],
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      timeout: 3000
    }
  },
  watch: {
    value(show) {
      if (show) {
        this.timeoutStart()
      } else this.timeoutEnd()
    }
  },
  methods: {
    timeoutStart() {
      timeoutFunction = setTimeout(() => {
        this.msgHide()
      }, this.timeout)
    },
    timeoutEnd() {
      clearTimeout(timeoutFunction)
    }
  }
}
</script>

<style lang="less">
@media only screen and (min-width: 600px) {
  .sn-3 {
    margin-top: 312px;
  }
  .sn-2 {
    margin-top: 156px;
  }
}
.snackbar-content {
  // word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
