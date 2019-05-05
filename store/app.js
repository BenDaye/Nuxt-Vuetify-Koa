export const state = () => ({
  dark: true,
  drawerLeft: {
    visible: false,
    miniVariant: false,
    clipped: false
  },
  drawerRight: {
    visible: false,
    miniVariant: false,
    clipped: false
  },
  extended: false
})

export const mutations = {
  changeTheme(state) {
    state.dark = !state.dark
  },
  changeDrawerLeft(state, payload) {
    if (!payload) return
    const { visible, miniVariant, clipped } = payload
    state.drawerLeft = {
      visible:
        typeof visible === 'undefined' ? state.drawerLeft.visible : visible,
      miniVariant:
        typeof miniVariant === 'undefined'
          ? state.drawerLeft.miniVariant
          : miniVariant,
      clipped:
        typeof clipped === 'undefined' ? state.drawerLeft.clipped : clipped
    }
  },
  changeDrawerRight(state, payload) {
    if (!payload) return
    const { visible, miniVariant, clipped } = payload
    state.drawerRight = {
      visible:
        typeof visible === 'undefined' ? state.drawerRight.visible : visible,
      miniVariant:
        typeof miniVariant === 'undefined'
          ? state.drawerRight.miniVariant
          : miniVariant,
      clipped:
        typeof clipped === 'undefined' ? state.drawerRight.clipped : clipped
    }
  }
}
