export const state = () => ({
  visible: false,
  type: null,
  title: null,
  content: null,
  icon: null
})

export const mutations = {
  changeNotice(state, payload) {
    if (!payload) return
    const {
      visible,
      type = null,
      title = null,
      content = null,
      icon = null
    } = payload
    state.visible = visible
    state.type = type
    state.title = title
    state.content = content
    state.icon = icon
  }
}

export const actions = {
  handleNotice({ commit, state }, payload) {
    const noticeVisible = state.visible
    const { visible } = payload
    return new Promise((resolve, reject) => {
      if (typeof visible === 'undefined') {
        reject(new Error('visible is required'))
      } else {
        if (noticeVisible && visible) {
          commit('changeNotice', { visible: false })
          setTimeout(() => {
            commit('changeNotice', payload)
          }, 300)
        } else {
          commit('changeNotice', payload)
        }
        resolve()
      }
    })
  }
}
