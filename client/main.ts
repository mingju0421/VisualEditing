import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

import * as Utils from './common/js/Utils'
// import UserModel from './mixins/userModel.js'
Vue.config.productionTip = false

Vue.use(Element)
/** 引入公共方法 */
Vue.prototype.$Utils = Utils

/** 注册全局 mixins */
// Vue.mixin(UserModel)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
