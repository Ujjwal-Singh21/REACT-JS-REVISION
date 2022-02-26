import React, { useState, useEffect } from 'react'

function HookCounter2 () {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `Cliked ${count} times`
    console.log('UseEffect Rendering')
  }, [count])

  return (
    <div>
      <div>
        <label> Enter Name : </label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button onClick={() => setCount(count + 1)}> Clicked {count} times </button>
    </div>
  )
}

export default HookCounter2
