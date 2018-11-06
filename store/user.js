/* eslint-disable */
// import { login, logout, getUserInfo, register } from '@/api/user'
// import { setToken, getToken, getVcodeTimer, setVcodeTimer } from '@/libs/util'

export const state = () => ({
  userName: '',
  userId: '',
  avatorImgPath: '',
  // token: getToken(),
  info: null,
  access: ['admin'],
  // vcodeTimerForLogin: getVcodeTimer('vcodeTimerForLogin'),
  // vcodeTimerForRegister: getVcodeTimer('vcodeTimerForRegister')
})

// export const mutations = {
//   setAvator(state, avatorPath) {
//     state.avatorImgPath = avatorPath
//   },
//   setUserId(state, id) {
//     state.userId = id
//   },
//   setUserName(state, name) {
//     state.userName = name
//   },
//   setAccess(state, access) {
//     state.access = access
//   },
//   setToken(state, token) {
//     state.token = token
//     setToken(token)
//   },
//   setTimer(state, { type, timer }) {
//     state[type] = timer
//     setVcodeTimer(type, timer)
//   },
//   setInfo(state, info) {
//     state.info = info
//   }
// }

// export const actions = {
//   // 登录
//   handleLogin({ commit }, { userName, password, type, vcode }) {
//     userName = userName.trim()
//     return new Promise((resolve, reject) => {
//       login({
//         userName,
//         password,
//         type,
//         vcode
//       })
//         .then(res => {
//           const data = res.data
//           if (data.code === 0) {
//             commit('setToken', data.sid)
//             resolve(data)
//           } else reject(data)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   },
//   // 退出登录
//   handleLogOut({ state, commit }) {
//     return new Promise((resolve, reject) => {
//       logout(state.token)
//         .then(() => {
//           commit('setToken', '')
//           // commit("setAccess", []);
//           commit('setInfo', null)
//           resolve()
//         })
//         .catch(err => {
//           reject(err)
//         })
//       // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
//       // commit("setToken", "");
//       // commit("setAccess", []);
//       // commit("setAvator", "");
//       // commit("setUserId", "");
//       // commit("setUserName", "");
//       // resolve();
//     })
//   },
//   // 获取用户相关信息
//   getUserInfo({ state, commit }) {
//     return new Promise((resolve, reject) => {
//       getUserInfo(state.token)
//         .then(res => {
//           if (res.errno === 0) {
//             const data = res.data
//             commit('setInfo', data)
//             resolve(data)
//           } else reject(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   },
//   // 注册
//   handleRegister({ commit }, { userName, password, vcode }) {
//     userName = userName.trim()
//     return new Promise((resolve, reject) => {
//       register({ userName, password, vcode })
//         .then(res => {
//           const data = res.data
//           if (data.code === 0) {
//             resolve(data)
//           } else reject(data)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   }
// }
