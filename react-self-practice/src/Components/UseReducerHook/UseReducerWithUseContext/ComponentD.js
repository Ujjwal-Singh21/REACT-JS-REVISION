import React, { useContext } from 'react'
import { UserContext } from './Parent'

function ComponentD () {
  const { Count, dispatch } = useContext(UserContext)
  return (
    <div>
      <h3> Component-D </h3>
      <div>
        <h2> Count - {Count} </h2>
        <button onClick={() => dispatch('Increment')}> Increment </button>
        <button onClick={() => dispatch('Decrement')}> Decrement </button>
        <button onClick={() => dispatch('Reset')}> Reset </button>
      </div>
    </div>
  )
}

export default ComponentD
