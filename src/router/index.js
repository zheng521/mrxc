import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import SignIn from '@/pages/sign_in'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/users/sign_in', name: 'SignIn', component: SignIn }
  ]
})
