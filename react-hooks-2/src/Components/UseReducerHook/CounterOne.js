import React, { useReducer } from 'react'

// setting up reducer function and declaring initial State
const initialState = 0

const reducer = (currentState, action) => {
  switch (action) {
    case 'Increment':
      return currentState + 1
    case 'Decrement':
      return currentState - 1
    case 'Reset':
      return initialState
    default:
      return currentState
  }
}

function CounterOne () {
  const [count, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={() => dispatch('Increment')}> Increment </button>
      <button onClick={() => dispatch('Decrement')}> Decrement </button>
      <button onClick={() => dispatch('Reset')}> Reset </button>
    </div>
  )
}

export default CounterOne
