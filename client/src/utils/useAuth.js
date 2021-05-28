import {useContext} from 'react'
import authContext from '../context/auth/authContext'

const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('Component must be wrapped with in AuthContextProvider')
  }
  return context
}

export default useAuth
