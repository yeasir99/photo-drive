import {useState} from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {RiLogoutCircleRFill, RiProfileLine} from 'react-icons/ri'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-gray-100 px-2 lg:px-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 relative">
        <div className="text-xl">Brand Name</div>
        <div>
          <div
            className="w-10 h-10 text-lg flex justify-center items-center rounded-3xl bg-blue-200 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaUserAlt />
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-16 right-0 bg-gray-200 py-4">
            <div className="text-lg py-2 px-10 cursor-pointer hover:text-indigo-400 flex justify-between items-center">
              <RiProfileLine className="mr-2" /> Profile
            </div>

            <div className="text-lg py-1 px-10 cursor-pointer hover:text-indigo-400 flex justify-between items-center">
              <RiLogoutCircleRFill className="mr-2" /> Logout
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
