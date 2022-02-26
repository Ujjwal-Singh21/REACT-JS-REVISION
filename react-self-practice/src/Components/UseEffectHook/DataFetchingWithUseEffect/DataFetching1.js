import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = []

function DataFetching1 () {
  const [users, setUsers] = useState(initialState)
  const [error, setError] = useState('')

  useEffect(async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data)
        setError('')
      })
      .catch(error => {
        setError('Something went wrong')
        setUsers([])
        console.log(error)
      })
  }, [])

  return (
    <div>
      <h1> List of User Names </h1>
      {
          users.length ? users.map(user => <ol key={user.id}> {user.name} </ol>)
          : null
      }

      {
           error && <h2 className='error'> {error} </h2>
      }
    </div>
  )
}

export default DataFetching1
