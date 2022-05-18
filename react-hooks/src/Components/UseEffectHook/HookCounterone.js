// useEffect() to increment counter in title and button.
// useEffect() takes an arrow function as argument and executed it every time the
// component is re - rendered or updated.
//--------------------------------------------------------------------------------------
import { useState, useEffect } from 'react'

function HookCounterOne () {
  
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Clicked {count} times </button>
    </div>
  )
}

export default HookCounterOne
