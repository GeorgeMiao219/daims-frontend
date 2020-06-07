import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.window = window
Vue.use(Element)
Vue.prototype.$a = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
