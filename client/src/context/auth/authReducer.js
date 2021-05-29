import authActionTypes from './authActionTypes'

const authReducer = (state, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
    case authActionTypes.REGISTER_REQUEST:
    case authActionTypes.REQUEST_USER:
      return {
        ...state,
        loading: true,
      }
    case authActionTypes.REGISTER_REQUEST_SUCCESS:
    case authActionTypes.LOGIN_REQUEST_SUCCESS:
    case authActionTypes.REQUEST_USER_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: true,
        loading: false,
        error: null,
      }
    case authActionTypes.LOGIN_REQUEST_FAIL:
    case authActionTypes.REGISTER_REQUEST_FAIL:
    case authActionTypes.REQUEST_USER_FAIL:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
