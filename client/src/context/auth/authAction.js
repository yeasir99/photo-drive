import authActionTypes from './authActionTypes'

export function registerUser(dispatch, formData) {
  dispatch({type: authActionTypes.REGISTER_REQUEST})
  // handle some async task
}

export function LoginUser(dispatch, formData) {
  dispatch({type: authActionTypes.LOGIN_REQUEST})
  // handle some async task
}

export function getUser(dispatch) {
  dispatch({type: authActionTypes.REQUEST_USER})
  // handle some async task
}

export function clearError(dispatch) {
  dispatch({type: authActionTypes.CLEAR_ERROR})
}
