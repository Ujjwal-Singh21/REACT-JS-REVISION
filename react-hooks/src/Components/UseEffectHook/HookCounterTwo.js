// we can write condtion regarding when useEffect() should be executed
// we pass a second arg to this hook as an array [] and value inside that array
// determines that useEffect should execute only when the value changes and gets update
// this is called conditionally run effect

import React, { useState, useEffect } from 'react'

function HookCounterTwo () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState(' ')

  useEffect(() => {
    console.log('useEffect - updating Document title')
    document.title = `You Clicked ${count} times`
  }, [count])

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={event => setName(event.target.value)} />

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterTwo
