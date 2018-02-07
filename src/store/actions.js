import * as types from './mutation-types'

export function setUserInfo ({commit, dispatch, state}, user) {
  commit(types.SET_USER_INFO, user)
}

export function removeUserInfo ({commit, dispatch}) {
  window.localStorage.clear()
  commit(types.REMOVE_USER_INFO)
}
