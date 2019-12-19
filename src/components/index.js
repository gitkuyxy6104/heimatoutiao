import ceList from './home/ce-list.vue'
import aheader from './home/header.vue'

export default {
  install (Vue) {
    Vue.component('a-lista', ceList) // 全局注册
    Vue.component('a-header', aheader) // 全局注册
  }
}
