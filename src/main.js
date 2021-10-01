import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用Element-UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引用axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
