import {FcHome, FcUpload} from 'react-icons/fc'
import {AiOutlineLogout} from 'react-icons/ai'

function Header() {
  return (
    <header className="bg-gray-50 px-2 lg:px-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 relative">
        <div className="w-10 h-10 text-xl flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer">
          <FcHome />
        </div>
        <div className="flex space-x-2">
          <div className="w-10 h-10 text-lg flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer">
            <FcUpload />
          </div>
          <div className="w-10 h-10 text-lg flex justify-center items-center rounded-3xl bg-gray-200 cursor-pointer">
            <AiOutlineLogout className="text-red-600 text-xl" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
