// In empty [] either specify count as dependency as [count]. orelse
// In setCount use prevCount approach for normal running of ticker counter.
//-----------------------------------------------------------------------------
import { useState, useEffect } from 'react'

function HookClassCounter () {
  
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount((prevCount) => prevCount + 1)
    // setCount(count + 1)
  }

  useEffect(() => {
    console.log('count value', count)
    const interval = setInterval(tick, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div>
      <h1> {count} </h1>
    </div>
  )
}

export default HookClassCounter
