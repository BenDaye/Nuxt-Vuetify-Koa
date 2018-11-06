import Vue from 'vue'
import { mapActions } from 'vuex'

const plugin = {
  install() {
    Vue.mixin({
      methods: {
        ...mapActions({
          msgHide: 'notice/hide',
          msgSuccess: 'notice/success',
          msgError: 'notice/error',
          msgWarning: 'notice/warning',
          msgInfo: 'notice/info'
        })
      }
    })
  }
}

Vue.use(plugin)
