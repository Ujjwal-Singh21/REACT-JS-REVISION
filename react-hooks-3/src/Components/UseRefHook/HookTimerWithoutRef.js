// // throws an error ' 'interval' is not defined  no-undef'
// // This is because 'interval' scope is within useEffect() body only
// // Hence it is not accessible in button onClick Event
//--------------------------------------------------------------------------
import { useState, useEffect } from 'react'

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
      <h3> HookTimer Value - {timer} </h3>
      <button onClick={() => clearInterval(interval)}> Clear Hook Timer </button>
    </div>
  )
}

export default HookTimerWithoutRef
