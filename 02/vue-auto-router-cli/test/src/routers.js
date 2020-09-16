import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/3ce',
      name: '3ce',
      component: () => import('./views/3ce.vue')
    },
    {
      path: '/aaa',
      name: 'aaa',
      component: () => import('./views/aaa.vue')
    },
    {
      path: '/abc',
      name: 'abc',
      component: () => import('./views/ABC.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
  ]
})
