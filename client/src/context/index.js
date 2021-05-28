import {BrowserRouter as Router} from 'react-router-dom'
import AuthProvider from './auth/AuthProvider'

const AppProvider = ({children}) => (
  <Router>
    <AuthProvider>{children}</AuthProvider>
  </Router>
)

export default AppProvider
