import {FcHome, FcUpload} from 'react-icons/fc'
import {AiOutlineLogout} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import useAuth from './../utils/useAuth'
import {logout} from '../context/auth/authAction'

function Header() {
  const [, dispatch] = useAuth()
  const handleLogout = () => {
    logout(dispatch)
  }
  return (
    <header className="bg-gray-50 px-2 lg:px-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 relative">
        <Link to="/">
          <div className="w-10 h-10 text-xl flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer">
            <FcHome />
          </div>
        </Link>

        <div className="flex space-x-2">
          <Link to="/upload">
            <div className="w-10 h-10 text-lg flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer">
              <FcUpload />
            </div>
          </Link>
          <div
            className="w-10 h-10 text-lg flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            <AiOutlineLogout className="text-red-600 text-xl" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
