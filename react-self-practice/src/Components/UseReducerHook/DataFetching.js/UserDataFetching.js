import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: '',
  user: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FetchDataSuccess':
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload
      }

    case 'FetchDataFailure':
      return {
        ...state,
        loading: false,
        error: 'Something went Wrong',
        posts: {}
      }
  }
}

function UserDataFetching () {
  const [User, dispatch] = useReducer(reducer, initialState)

  useEffect(async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        dispatch({ type: 'FetchDataSuccess', payload: response.data })
      })
      .catch(error => {
        dispatch({ type: 'FetchDataFailure', payload: error })
      })
  }, [])
  
  return (
    <div>
      <h2 className='primary'> Fetching Data with useReducer </h2>
      {
          User.loading ? 'loading' : User.user ? <h2> {User.user.title} </h2>
           : null
      }
      {
          User.error ? <h2 className='error'> {User.error} </h2> : null
      }
    </div>
  )
}

export default UserDataFetching
