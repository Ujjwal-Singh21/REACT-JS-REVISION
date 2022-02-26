import React, { useReducer } from 'react'

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
function UseReducer3 () {
  const [Count, dispatch] = useReducer(reducer, initialState)
  const [Count2, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <h2> Count1 - {Count} </h2>
        <button onClick={() => dispatch('Increment')}> Increment </button>
        <button onClick={() => dispatch('Decrement')}> Decrement </button>
        <button onClick={() => dispatch('Reset')}> Reset </button>
      </div>

      <div>
        <h2> Count2 - {Count2} </h2>
        <button onClick={() => dispatchTwo('Increment')}> Increment </button>
        <button onClick={() => dispatchTwo('Decrement')}> Decrement </button>
        <button onClick={() => dispatchTwo('Reset')}> Reset </button>
      </div>

    </div>
  )
}

export default UseReducer3
