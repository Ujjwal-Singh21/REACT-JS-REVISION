import { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  loading: true,
  error: ' ',
  post: {}
}

const reducer = (currentState, action) => {

  switch (action.type) {
    
    case 'FETCH_SUCCESFULL':
      return {
        loading: false,
        post: action.payload,
        error: ' '
      }

    case 'FETCH_FAILURE':
      return {
        loading: false,
        post: {},
        error: 'Sorry Something went wrong...!!'
      }

    default:
      return currentState
  }
}

function DataFetchingTwo () {
  
  const [newState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
      console.log('getting data');
    axios
      .get('https://jsonplaceholder.typicode.com/posts/21')
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESFULL', payload: response.data })
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_FAILURE', payload: null })
      })
  }, [])

  return (
    <div>
      { newState.loading ? 'loading' : newState.post.title }
      { newState.error ? newState.error : null }
    </div>
  )
}

export default DataFetchingTwo
