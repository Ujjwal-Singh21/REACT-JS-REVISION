import React, { useState, useEffect, useRef } from 'react'

function HookCounterWithoutRef () {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    const interval = setInterval(incrementCount, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      <h1> Counter - {count} </h1>
      {/* Error says interval is not defined bacause inteval is locally scoped to effect hook */}
      {/* <button onClick={() => clearInterval(interval)}> Clear Interval </button> */}
    </div>
  )
}

export default HookCounterWithoutRef
