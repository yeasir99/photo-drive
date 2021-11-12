import authActionTypes from './authActionTypes'
import {client} from '../../utils/api-client'

export function registerUser(dispatch, config, cb) {
  dispatch({type: authActionTypes.REGISTER_REQUEST})

  client('/api/user', config).then(
    data => {
      cb()
      dispatch({type: authActionTypes.REGISTER_REQUEST_SUCCESS, payload: data})
    },
    error =>
      dispatch({type: authActionTypes.REGISTER_REQUEST_FAIL, payload: error}),
  )
}

export function loginUser(dispatch, config, cb) {
  dispatch({type: authActionTypes.LOGIN_REQUEST})
  client('/api/auth', config).then(
    data => {
      cb()
      dispatch({type: authActionTypes.LOGIN_REQUEST_SUCCESS, payload: data})
    },
    error =>
      dispatch({type: authActionTypes.LOGIN_REQUEST_FAIL, payload: error}),
  )
}

export function getUser(dispatch, cb) {
  dispatch({type: authActionTypes.REQUEST_USER})
  client('/api/auth').then(
    data => {
      dispatch({type: authActionTypes.REQUEST_USER_SUCCESS, payload: data})
      cb(false)
    },
    error => {
      dispatch({type: authActionTypes.REQUEST_USER_FAIL, payload: error})
      cb(false)
    },
  )
}

export function logout(dispatch) {
  dispatch({type: authActionTypes.LOGOUT_REQUEST})
  client('/api/auth/logout', {method: 'POST'}).then(
    resolve => {
      dispatch({type: authActionTypes.LOGOUT_REQUEST_SUCCESS})
    },
    reject => {
      dispatch({type: authActionTypes.LOGOUT_REQUEST_FAIL, payload: reject})
    },
  )
}

export function clearError(dispatch) {
  dispatch({type: authActionTypes.CLEAR_ERROR})
}
