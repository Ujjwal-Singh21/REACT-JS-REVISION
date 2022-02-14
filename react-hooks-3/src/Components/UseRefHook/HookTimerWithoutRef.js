// // throws an error ' 'interval' is not defined  no-undef'
// // this is because 'interval' scope is within useEffect() body only
// // hence it is not accessible in button onClick Event

import React, { useState, useEffect } from 'react'

function HookTimerWithoutRef () {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      HookTimer Value - {timer}
      <button onClick={() => clearInterval(interval)}> Clear Hook Timer </button>
    </div>
  )
}

export default HookTimerWithoutRef
