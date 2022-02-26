import React, { useState, useEffect, useRef } from 'react'

function HookCounterWithRef () {
  const [count, setCount] = useState(0)

  // using useRef Hook for maintaining a Global Container
  const interval = useRef(null)

  const incrementCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    interval.current = setInterval(incrementCount, 1000)

    return () => {
      clearInterval(interval.current)
    }
  }, [count])

  return (
    <div>
      <h1> Counter- {count} </h1>
      <button onClick={() => clearInterval(interval.current)}>
        Clear Interval
      </button>
    </div>
  )
}

export default HookCounterWithRef
