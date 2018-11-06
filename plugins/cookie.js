import Vue from 'vue'
import { Cookie } from '../utils/Cookie'

const plugin = {
  instance: null,
  install(options) {
    Vue.mixin({
      created(options) {
        if (!plugin.instance) {
          plugin.instance = new Cookie(this)
        }
        this.$cookie = plugin.instance
      }
    })
  }
}

Vue.use(plugin)

export default context => {
  context.$cookie = new Cookie(context)
}
