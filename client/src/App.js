import {useState, useEffect} from 'react'
import useAuth from './utils/useAuth'
import Authorizedapp from './screens/Authorizedapp'
import Unauthorizedapp from './screens/Unauthorizedapp'
import {getUser} from './context/auth/authAction'
import Spinner from './components/Spinner'

const App = () => {
  const [{isAuthenticated}, authDispatch] = useAuth()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setLoading(true)
      getUser(authDispatch, setLoading)
    }
    //eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner className="text-8xl" />
      </div>
    )
  }
  return isAuthenticated ? <Authorizedapp /> : <Unauthorizedapp />
}

export default App
