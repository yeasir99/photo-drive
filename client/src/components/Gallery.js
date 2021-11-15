import Spinner from './Spinner'

function Gallery({loading, data}) {
  if (loading) {
    return (
      <div className="flex justify-center ">
        <Spinner className="text-8xl" />
      </div>
    )
  }

  return data.length > 0 ? (
    <div className="grid grid-cols-5 gap-2 mt-2">
      {data.map(item => (
        <div key={item._id} className="cursor-pointer">
          <img src={item.url} alt="gallery" className="w-full h-auto" />
        </div>
      ))}
    </div>
  ) : (
    <p>No image to display first upload image</p>
  )
}

export default Gallery
