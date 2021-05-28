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

  // handle some async task
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

export function getUser(dispatch) {
  dispatch({type: authActionTypes.REQUEST_USER})
  // handle some async task
}

export function clearError(dispatch) {
  dispatch({type: authActionTypes.CLEAR_ERROR})
}
