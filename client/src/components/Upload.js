import {useState} from 'react'
import ImageUploading from 'react-images-uploading'
import {FcAddImage, FcRemoveImage} from 'react-icons/fc'

function Upload() {
  const [images, setImages] = useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className="my-5">
      <ImageUploading
        multiple
        value={images}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        onChange={onChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div>
            <div
              className="max-w-xl mx-auto bg-green-100 h-48 min-h-full border-2 border-green-200 rounded-md flex justify-items-center flex-col-reverse"
              {...dragProps}
            >
              <div className="mx-auto py-2">
                <button
                  onClick={onImageUpload}
                  className="bg-blue-200 flex justify-items-center items-center p-2 border-2 border-green-200 rounded-md "
                >
                  <FcAddImage className="mr-1 text-xl" /> Click or Drop here
                </button>
              </div>
            </div>
            {images.length ? (
              <div className="flex justify-end my-2">
                <button
                  onClick={onImageRemoveAll}
                  className="bg-blue-200 flex justify-items-center items-center p-2 border-2 border-red-300 rounded-md"
                >
                  <FcRemoveImage className="mr-1 text-xl" />
                  Remove all
                </button>
              </div>
            ) : null}

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <div className="image-item__btn-wrapper">
                  <img src={image.data_url} alt="" width="100" />
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default Upload
