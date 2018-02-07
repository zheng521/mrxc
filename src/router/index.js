import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import SignIn from '@/pages/sign_in'
import SignUp from '@/pages/sign_up'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/users/sign_in', name: 'SignIn', component: SignIn },
    { path: '/users/sign_up', name: 'SignUp', component: SignUp }
  ]
})
