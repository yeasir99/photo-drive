import {useState} from 'react'
import ImageUploading from 'react-images-uploading'
import {FcAddImage, FcRemoveImage} from 'react-icons/fc'
import {ImCross} from 'react-icons/im'
import {IoCloudUpload} from 'react-icons/io5'
import {client} from '../utils/api-client'

function Upload() {
  const [images, setImages] = useState([])
  const [uploading, setUploading] = useState(false)
  const maxNumber = 69
  const onChange = (imageList, addUpdateIndex) => setImages(imageList)

  const handleUpload = async () => {
    setUploading(true)
    const uploadedImageData = images.map(image => {
      const formData = new FormData()
      formData.append('upload_preset', 'vbgheiiv')
      formData.append('tags', 'browser_upload')
      formData.append('file', image.file)

      const config = {
        method: 'POST',
        body: formData,
      }
      const url = 'https://api.cloudinary.com/v1_1/dui18wjxg/image/upload'
      return fetch(url, config)
        .then(res => res.json())
        .then(({secure_url, asset_id, public_id, url}) => ({
          secure_url,
          asset_id,
          public_id,
          url,
        }))
    })

    let resolveImageData = await Promise.all(uploadedImageData)

    const resData = client('/api/imagedata', {data: resolveImageData}).then(
      res => {
        setImages([])
        setUploading(false)
        return res
      },
    )
    console.log(resData)
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
              className={`"max-w-full mx-auto  h-48 min-h-full border-2 ${
                isDragging
                  ? 'bg-green-200 border-green-400'
                  : 'bg-green-100 border-green-200'
              } rounded-md flex justify-items-center"`}
              {...dragProps}
            >
              <div className="mx-auto py-2 self-end">
                <button
                  onClick={onImageUpload}
                  className="bg-blue-200 flex justify-items-center items-center p-2 border-2 border-green-200 rounded-md "
                >
                  <FcAddImage className="mr-1 text-xl" /> Click or Drop here
                </button>
              </div>
            </div>
            {images.length ? (
              <div className="flex my-1">
                <h2 className="text-lg font-semibold">
                  Total:{' '}
                  <span className="text-blue-500">{imageList.length} </span>
                </h2>
                <button
                  onClick={onImageRemoveAll}
                  className="bg-blue-200 flex justify-items-center items-center p-2 border-2 border-red-300 rounded-md ml-auto"
                >
                  <FcRemoveImage className="mr-1 text-xl" />
                  Remove all
                </button>
              </div>
            ) : null}

            <div className="grid grid-cols-2 gap-3 ">
              {imageList.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.data_url}
                    alt=""
                    className="min-w-full h-auto border rounded-md"
                  />
                  <button
                    onClick={() => onImageRemove(index)}
                    className=" border-2 border-red-700 p-2 rounded-full absolute right-0.5 top-0.5 z-10"
                  >
                    <ImCross className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </ImageUploading>
      {images.length ? (
        <button
          className=" bg-blue-200 flex justify-items-center items-center mt-3 p-2 border-2 border-green-200 rounded-md mx-auto"
          onClick={handleUpload}
        >
          <IoCloudUpload className="mr-1" /> Upload
        </button>
      ) : null}
    </div>
  )
}

export default Upload
