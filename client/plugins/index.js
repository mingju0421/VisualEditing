/**
 * 组件库入口
 */

import Text from './text'
const components = [Text]

// 定义 install 方法, 接受 Vue 作为参数
const install = (Vue) => {
  // 判断是否安装, 安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map((component) => Vue.component(component.name, component))
}

// 检测到 Vue 才执行
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件必须有 install, 才能使用 Vue.use()
  Text,
}
