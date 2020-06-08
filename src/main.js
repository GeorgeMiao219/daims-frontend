import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {Input, Button, Col, Row, MessageBox, Message} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.window = window
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$a = axios;
Vue.use(Input)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
