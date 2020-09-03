import Vue from 'vue'
import App from './App.vue'
import router from './Krouter.js'
import VueRouter from './vue-router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
