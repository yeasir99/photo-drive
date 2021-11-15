import Spinner from './Spinner'
import {useState} from 'react'
import ModalAbst from './ModalAbst'

function Gallery({loading, data}) {
  const [open, setOpen] = useState({
    image: '',
    isOpen: false,
  })
  console.log(open)

  if (loading) {
    return (
      <div className="flex justify-center ">
        <Spinner className="text-8xl" />
      </div>
    )
  }

  return data.length > 0 ? (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-2">
      {data.map(item => (
        <div
          key={item._id}
          className="cursor-pointer"
          onClick={() => {
            setOpen({image: item, isOpen: true})
          }}
        >
          <img src={item.url} alt="gallery" className="w-full h-auto" />
        </div>
      ))}
      <ModalAbst open={open} setOpen={setOpen} />
    </div>
  ) : (
    <p>No image to display first upload image</p>
  )
}

export default Gallery
