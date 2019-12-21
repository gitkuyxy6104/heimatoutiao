import Vue from 'vue'
import App from './App.vue'
import router from './quanxian'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from './gongju/request'
import Component from './components'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Component)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
