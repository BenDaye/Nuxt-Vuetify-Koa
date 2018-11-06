import Vue from 'vue'
import { Token } from '../utils/Token'

const plugin = {
  instance: null,
  install(options) {
    Vue.mixin({
      created() {
        if (!plugin.instance) {
          plugin.instance = new Token(this)
        }
        this.$token = plugin.instance
      }
    })
  }
}

Vue.use(plugin)

export default context => {
  context.$token = new Token(context)
}
