import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  count2: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return {...state, count: state.count + action.payload }
    case 'Decrement':
      return {...state, count: state.count - action.payload }
    case 'Increment2':
      return {...state, count2: state.count2 + action.payload }
    case 'Decrement2':
      return {...state, count2: state.count2 - action.payload }
    case 'Reset':
      return initialState

    default:
      return state
  }
}
function UseReducer2 () {
  const [Count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <h2> Count1 - {Count.count} </h2>
        <button onClick={() => dispatch({ type: 'Increment', payload: 5})}> Increment </button>
        <button onClick={() => dispatch({ type: 'Decrement', payload: 5})}> Decrement </button>
        <button onClick={() => dispatch({ type: 'Reset'})}> Reset </button>
      </div>

      <div>
        <h2> Count2 - {Count.count2} </h2>
        <button onClick={() => dispatch({ type: 'Increment2', payload: 10})}> Increment2 </button>
        <button onClick={() => dispatch({ type: 'Decrement2', payload: 10})}> Decrement2 </button>
        <button onClick={() => dispatch({ type: 'Reset'})}> Reset </button>
      </div>
    </div>
  )
}

export default UseReducer2
