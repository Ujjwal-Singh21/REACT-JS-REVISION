// fetching data using useEffect() Hook
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingTwo () {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response)
        setPost(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])
  return (
    <div>

      <input
        type='text'
        value={id}
        onChange={(event) => setId(event.target.value)}
      />

      <h1 className='primary'> Getting Data from Fake Api </h1>
      <h1 key={post.id}> {post.title} </h1>

    </div>
  )
}

export default DataFetchingTwo
