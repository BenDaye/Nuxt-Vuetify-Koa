export const state = () => ({
  show: false,
  type: null,
  title: null,
  content: null
})

export const mutations = {
  setAppNotice(state, notice) {
    if (notice) {
      const { show, type, title, content } = notice
      if (show) {
        state.show = show
        state.type = type
        state.title = title
        state.content = content
      } else {
        state.show = false
        state.type = null
        state.title = null
        state.content = null
      }
    }
  }
}

export const actions = {
  hide({ commit }, payload = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('setAppNotice', { show: false })
        resolve()
      }, payload)
    })
  },
  async success({ dispatch, commit, state }, payload) {
    if (typeof payload === 'string') {
      payload = { content: payload }
    }
    const { show = true, type = 'success', title = '成功', content } = payload
    await dispatch('hide', state.show ? 600 : 0)
    return new Promise((resolve, reject) => {
      if (content) {
        commit('setAppNotice', {
          show,
          type,
          title,
          content
        })
        resolve()
      } else reject(new Error('content is required'))
    })
  },
  async error({ dispatch, commit, state }, payload) {
    if (typeof payload === 'string') {
      payload = { content: payload }
    }
    const { show = true, type = 'error', title = '错误', content } = payload
    await dispatch('hide', state.show ? 600 : 0)
    return new Promise((resolve, reject) => {
      if (content) {
        commit('setAppNotice', {
          show,
          type,
          title,
          content
        })
        resolve()
      } else reject(new Error('content is required'))
    })
  },
  async warning({ dispatch, commit, state }, payload) {
    if (typeof payload === 'string') {
      payload = { content: payload }
    }
    const { show = true, type = 'warning', title = '警告', content } = payload
    await dispatch('hide', state.show ? 600 : 0)
    return new Promise((resolve, reject) => {
      if (content) {
        commit('setAppNotice', {
          show,
          type,
          title,
          content
        })
        resolve()
      } else reject(new Error('content is required'))
    })
  },
  async info({ dispatch, commit, state }, payload) {
    if (typeof payload === 'string') {
      payload = { content: payload }
    }
    const { show = true, type = 'info', title = '提示', content } = payload
    await dispatch('hide', state.show ? 600 : 0)
    return new Promise((resolve, reject) => {
      if (content) {
        commit('setAppNotice', {
          show,
          type,
          title,
          content
        })
        resolve()
      } else reject(new Error('content is required'))
    })
  }
}
