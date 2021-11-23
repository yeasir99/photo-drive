import Modal from 'react-modal'
import {ImCross} from 'react-icons/im'
import {FaCopy} from 'react-icons/fa'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#root')

function ModalAbst({open, setOpen, style}) {
  const closeModal = () =>
    setOpen({
      isOpen: false,
      image: '',
    })

  return (
    <Modal
      isOpen={open.isOpen}
      onRequestClose={closeModal}
      style={{...customStyles, ...style}}
    >
      <div className="max-w-screen-xl">
        <div>
          <button
            onClick={closeModal}
            className=" border-2 border-red-700 p-2 rounded-full absolute right-0.5 top-0.5 z-10"
          >
            <ImCross className="text-red-500" />
          </button>
        </div>
        <div className="max-w-full">
          <img src={open.image?.url} alt="gallery" className="w-full h-auto" />
        </div>
        <div>
          <button
            onClick={() => navigator.clipboard.writeText(open.image.url)}
            className="mt-1 border-1 bg-green-400 rounded-md py-1 px-3"
          >
            <div className="flex justify-items-center items-center text-white">
              <FaCopy className="mr-1" /> url
            </div>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAbst
