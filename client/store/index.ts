import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from 'element-ui'

// 各个模块
import user from './modules/user'

Vue.use(Vuex)

const state = {}

const actions = {
  /**
   * 显示提示
   * @param store
   * @param msg { message || data: 消息内容, type: 消息类型 }
   */
  showMassage(store: any, msg: { type: any; message: any; data: any }) {
    console.log(msg)
    Message({
      type: msg.type,
      message: msg.message || msg.data,
    })
  },
}

const mutations = {}
const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user,
  },
})
