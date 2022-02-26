// Using setInterval inside React components allows us to execute a function or some
// code at specific intervals. ... This will schedule once the React component mounts
// for the first time. To properly clear the interval, we return clearInterval from
// the useEffect Hook, passing in the interval.

import React, { useState, useEffect } from 'react'

function HookClassCounter () {
  const [count, setCount] = useState(0)

  const tick = () => {
    // setCount(count + 1)
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    console.log('Count value', count)
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h2> {count} </h2>
    </div>
  )
}

export default HookClassCounter
