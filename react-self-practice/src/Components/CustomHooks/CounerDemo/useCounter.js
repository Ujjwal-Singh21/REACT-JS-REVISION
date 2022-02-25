import React, { useState } from 'react'

function useCounter (initialCount = 0, passedValue) {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(count => count + passedValue)
  }

  const decrement = () => {
    setCount(count => count - passedValue)
  }

  const reset = () => {
    setCount(initialCount)
  }

  return [count, increment, decrement, reset]
}

export default useCounter
