/* eslint-disable */
import axios from 'axios'
import Vue from 'vue'

var store = null

// export const apiHeader = {
//   'Me-Api-Platform': 'WAP',
//   'Me-Api-Id': 'a9b0f5a803a83d9b5faaee5b9ba0b3175c6f925c1a59199e8cdc119f3fb1275a',
//   'Me-Api-Key': '5d43b13f353434326b5546ead381b79890e1d781ece3a4f1847f21634e7760e8'
// }

const instance = axios.create({
  baseURL: process.env.API_ROOT,
  timeout: 15000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'}
})

// Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   // Vue.prototype.$indicator.open()
//   // Do something before request is sent
//   // Object.assign(config.headers, tokenHeader(), uidHeader())
//   return config
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error)
// })

// Add a response interceptor
// instance.interceptors.response.use(function (response) {
//   // Vue.prototype.$indicator.close()
//   // Do something with response data
//   if (response.data.message) {
//     console.log(response.data.message)
//   }
//   return response
// }, function (error) {
// 	console.log(error);
  // Vue.prototype.$indicator.close()
  // Do something with response error
  // if (error.response) {
  //   if (error.response.status === 401 || error.response.status === 403) {
  //     Vue.prototype.$toast({
  //       message: '登录已过期，请重新登录。',
  //       position: 'middle',
  //       duration: 5000
  //     })
  //     store.commit('REMOVE_USER_INFO')
  //     // FIXME
  //     window.location.href = '/login'
  //     // router.push('/login')
  //   } else if (error.response.status === 500) {
  //     Vue.prototype.$toast({
  //       message: '网络繁忙, 请稍后访问。',
  //       position: 'middle',
  //       duration: 5000
  //     })
  //   } else if (error.response.data && error.response.data.message) {
  //     Vue.prototype.$toast({
  //       message: error.response.data.message,
  //       position: 'middle',
  //       duration: 5000
  //     })
  //   }
  // } else {
  //   Vue.prototype.$toast({
  //     message: '网络繁忙, 请稍后访问。',
  //     position: 'middle',
  //     duration: 5000
  //   })
  // }
  // console.log(error)
  // return Promise.reject(error)
// })

// export const tokenHeader = () => {
//   const token = cookie.get('accessToken')
//   return { 'Authorization': `Bearer ${token}` }
// }

// export const uidHeader = () => {
//   const openid = cookie.get('wx_openid')
//   return { 'Me-WX-UID': openid }
// }
var api = {
  // Frontend Moudule
  // login: (mobile, code) => instance.post('/v1/login', { mobile, code }),
  getEntrance: () => instance.get('/api/entrance'),
}

api.install = function (Vue, options) {
  // if (options.store) {
  //   store = options.store
  // }
  Vue.prototype.api = api
  Vue.prototype.apiInstance = instance
}

export default api
