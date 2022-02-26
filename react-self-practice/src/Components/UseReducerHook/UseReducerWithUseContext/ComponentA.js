import React, { useContext } from 'react'
import { UserContext } from './Parent'

function ComponentA () {
  const CountContext = useContext(UserContext)
  return (
    <div>
      <h2> Component-A </h2>
      <div>
        <h2> Count - {CountContext.Count} </h2>
        <button onClick={() => CountContext.dispatch('Increment')}> Increment </button>
        <button onClick={() => CountContext.dispatch('Decrement')}> Decrement </button>
        <button onClick={() => CountContext.dispatch('Reset')}> Reset </button>
      </div>
    </div>
  )
}

export default ComponentA
