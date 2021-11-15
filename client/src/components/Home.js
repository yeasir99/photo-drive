import {useState, useEffect} from 'react'
import {client} from '../utils/api-client'
import Gallery from './Gallery'

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

  return <Gallery loading={loading} data={data} />
}

export default Home
