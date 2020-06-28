/**
 * 用户数据状态管理
 */

const state = {
  token: '',
  permissionsList: [],
  userData: {
    avatar: '',
    level: '',
  },
}

const actions = {
  /**
   * 更新个人信息
   * @param commit
   */
  updateUserInfo({ commit }: any, userData: object) {
    commit('updateUserInfo', userData)
  },
  /** 更新 token */
  updateUserToken({ commit }: any, userData: string) {
    commit('updateUserToken', userData)
  },
  /** 退出登录 */
  doLogout() {},
}
const mutations = {
  /**
   * 更新个人数据
   * @param state
   * @param data
   */
  updateUserInfo(state: { userData: any }, data: object) {
    state.userData = { ...data }
  },
  /**
   * 更新 token
   * @param state
   * @param data
   */
  updateUserToken(state: { token: string }, data: string) {
    state.token = data || ''
  },
}
const getters = {
  /**
   * 获取登录认证信息 token
   * @param state
   * @returns {string}
   */
  authorization(state: { token: string }) {
    return state.token ? 'Bearer' + state.token : ''
  },
  /**
   * 用户信息
   * @param state
   * @returns {avatar, level}
   */
  userData(state: { userData: any }) {
    return state.userData
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
