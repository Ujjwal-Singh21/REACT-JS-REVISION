import React from 'react'
import useCounter from './useCounter'

function CounterOne () {
  const [count, increment, decrement, reset] = useCounter(5, 5)

  return (
    <div>
      <div> CounterOne - {count} </div>
      <button onClick={increment}> Increment </button>
      <button onClick={decrement}> Decrement </button>
      <button onClick={reset}> Reset </button>
    </div>
  )
}

export default CounterOne
