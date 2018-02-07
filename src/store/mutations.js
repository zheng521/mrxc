import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_INFO] (state, user) {
    state.username = user.username
    state.signed = true
  }
}

export default mutations
