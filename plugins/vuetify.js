import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.base, // a color that is not in the material colors palette
    accent: colors.grey.darken4,
    secondary: colors.grey.darken3,
    info: colors.lightBlue.accent4,
    warning: colors.deepOrange.base,
    error: colors.deepOrange.accent4,
    success: colors.green.base,
    background: colors.grey.lighten5,
    border: colors.grey.lighten4
  },
  iconfont: 'mdi'
})
