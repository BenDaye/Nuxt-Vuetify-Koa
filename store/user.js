import qs from 'qs'
export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

export const actions = {
  async sendCode({ commit }, payload) {
    const data = await this.$axios.post('sendCode', qs.stringify(payload))
    commit('setUser', data)
  },
  async loginByMessage({ commit }, payload) {
    const data = await this.$axios.post('quickLogin', qs.stringify(payload))
    commit('setUser', data)
  },
  async loginByPassword({ commit }, payload) {
    const data = await this.$axios.post('staticIndex', qs.stringify(payload))
    commit('setUser', data)
  },
  async getUserMsg({ commit }, payload) {
    const data = await this.$axios.get(
      `getUserMsg?loginCode=${payload.loginCode}`
    )
    commit('setUser', data)
  }
}
