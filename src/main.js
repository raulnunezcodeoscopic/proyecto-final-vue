import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
