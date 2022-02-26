import React, { useContext } from 'react'
import { UserContext } from './Parent'

function ComponentF () {
  const { Count, dispatch } = useContext(UserContext)
  return (
    <div>
      <h4> Component-F </h4>
      <div>
        <h2> Count - {Count} </h2>
        <button onClick={() => dispatch('Increment')}> Increment </button>
        <button onClick={() => dispatch('Decrement')}> Decrement </button>
        <button onClick={() => dispatch('Reset')}> Reset </button>
      </div>
    </div>
  )
}

export default ComponentF
