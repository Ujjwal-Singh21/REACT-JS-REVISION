import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentD () {
  const countContext = useContext(CountContext)
  // with destructure with alias name
  const { CountState: count, CountDispatch: dispatch } = countContext
  return (
    <div>
      ComponentD Count - {count}
      <button onClick={() => dispatch('Increment')}> Increment </button>
      <button onClick={() => dispatch('Decrement')}> Decrement </button>
      <button onClick={() => dispatch('Reset')}> Reset </button>
    </div>
  )
}

export default ComponentD
