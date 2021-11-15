import {useState, useEffect} from 'react'
import {client} from '../utils/api-client'
import Spinner from './Spinner'

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    client('/api/imagedata').then(res => {
      setData(res)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center ">
        <Spinner className="text-8xl" />
      </div>
    )
  }

  return data.length > 0 ? (
    <div>
      {data.map(item => (
        <img key={item._id} src={item.url} alt="gallery" />
      ))}
    </div>
  ) : (
    <p>No image to display first upload image</p>
  )
}

export default Home
