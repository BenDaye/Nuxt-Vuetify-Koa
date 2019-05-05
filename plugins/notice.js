import Vue from 'vue'

const plugin = {
  install(options) {
    Vue.mixin({
      methods: {
        $successMsg(args) {
          if (typeof args === 'string') {
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'success',
              title: '成功',
              content: args,
              icon: 'check_circle'
            })
          } else {
            const {
              title = '成功',
              content = null,
              icon = 'check_circle'
            } = args
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'success',
              title,
              content,
              icon
            })
          }
        },
        $errorMsg(args) {
          if (typeof args === 'string') {
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'error',
              title: '错误',
              content: args,
              icon: 'remove_circle'
            })
          } else {
            const {
              title = '错误',
              content = null,
              icon = 'remove_circle'
            } = args
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'error',
              title,
              content,
              icon
            })
          }
        },
        $warningMsg(args) {
          if (typeof args === 'string') {
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'warning',
              title: '错误',
              content: args,
              icon: 'warning'
            })
          } else {
            const { title = '警告', content = null, icon = 'warning' } = args
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'warning',
              title,
              content,
              icon
            })
          }
        },
        $infoMsg(args) {
          if (typeof args === 'string') {
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'info',
              title: '错误',
              content: args,
              icon: 'info'
            })
          } else {
            const { title = '提示', content = null, icon = 'info' } = args
            this.$store.dispatch('notice/handleNotice', {
              visible: true,
              type: 'info',
              title,
              content,
              icon
            })
          }
        },
        $hideMsg() {
          this.$store.dispatch('notice/handleNotice', { visible: false })
        }
      }
    })
  }
}

Vue.use(plugin)
