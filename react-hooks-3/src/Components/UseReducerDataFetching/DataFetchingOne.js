//Firstly done with useState and useEffect hook for basic comparison
//--------------------------------------------------------------------
import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingOne () {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    console.log('data fetching')
    axios
      .get('https://jsonplaceholder.typicode.com/posts/29')
      .then((response) => {
        setLoading(false)
        setError('')
        setPost(response.data)
      })
      .catch((error) => {
        setLoading(false)
        setPost({})
        setError('Sorry Something went wrong...!!!')
      })
  }, [])

  return (
    <div>
      {loading ? 'Loadind data' : post.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
