import React, { useState, useEffect } from 'react'

function HookCounter () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Cliked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Clicked {count} times </button>
    </div>
  )
}

export default HookCounter
