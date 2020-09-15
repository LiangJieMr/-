/*
 * @Author: liangJie
 * @Date: 2020-09-15 15:04:06
 * @LastEditors: 
 * @LastEditTime: 2020-09-15 16:36:04
 * @FilePath: \02\vue-auto-router-cli\test\src\main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
