import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mock.js'
Vue.prototype.$axios=axios
import axios from 'axios'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
