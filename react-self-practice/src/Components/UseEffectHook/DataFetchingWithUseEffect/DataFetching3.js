import React, { useEffect, useState } from 'react'
import axios from 'axios'

const initialState = {}

function DataFetching3 () {
  const [user, setUser] = useState(initialState)
  const [error, setError] = useState('')
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(id)

  useEffect(async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
      .then(response => {
        setUser(response.data)
        setError('')
      })
      .catch(error => {
        setError('Something went wrong')
        setUser({})
        console.log(error)
      })
  }, [idFromButtonClick])

  return (
    <div>

      <div>
        <label> Enter User Id : </label>
        <input type='text' value={id} onChange={e => setId(e.target.value)} />
      </div>

      <div>
          <button onClick={() => setIdFromButtonClick(id)}> Get User </button>
      </div>

      <div>
        {user ? <h1> {user.name} </h1> : null}
        {error ? <h1> {error} </h1> : null}
      </div>

    </div>
  )
}

export default DataFetching3
