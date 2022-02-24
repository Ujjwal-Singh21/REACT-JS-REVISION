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

function CounterThree () {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      
      <div>
      <h1> Count: {count} </h1>
      <button onClick={() => dispatch('Increment')}> Increment </button>
      <button onClick={() => dispatch('Decrement')}> Decrement </button>
      <button onClick={() => dispatch('Reset')}> Reset </button>
      </div>

      <div>
      <h1>CountTwo: {countTwo}</h1>
      <button onClick={() => dispatchTwo('Increment')}> Increment2 </button>
      <button onClick={() => dispatchTwo('Decrement')}> Decrement </button>
      <button onClick={() => dispatchTwo('Reset')}> Reset </button>
      </div>
      
    </div>
  )
}

export default CounterThree
