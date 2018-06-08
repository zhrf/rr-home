import Vue from 'vue'
import Router from 'vue-router'
import Layout from './Layout'
import Login from './Login'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
