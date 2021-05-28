import useAuth from './utils/useAuth'
import Authorizedapp from './screens/Authorizedapp'
import Unauthorizedapp from './screens/Unauthorizedapp'

const App = () => {
  const [{isAuthenticated}] = useAuth()

  //let isAuthenticated = false
  return isAuthenticated ? <Authorizedapp /> : <Unauthorizedapp />
}

export default App
