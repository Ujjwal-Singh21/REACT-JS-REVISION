// fetching data using useEffect() Hook
//--------------------------------------
import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching () {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response)
        setPosts(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1> Getting Data from Fake Api </h1>

      <ol>
          {
              posts.map((post) => <li key={post.id}> {post.title} </li>)
          }
      </ol>
    </div>
  )
}

export default DataFetching
