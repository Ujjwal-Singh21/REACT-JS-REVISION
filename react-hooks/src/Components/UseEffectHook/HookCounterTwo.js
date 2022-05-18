// We can write condition regarding when useEffect() should be executed.
// We pass a second arg to this hook as an array [] and value inside that array.
// This array is called as dependency array.
// It determines that useEffect should execute only when the value changes and gets update.
// This is called conditionally run useFffect.
//--------------------------------------------------------------------------------------
import { useState, useEffect } from 'react'

function HookCounterTwo () {

  const [count, setCount] = useState(0)
  const [name, setName] = useState(' ')

  useEffect(() => {
    console.log('useEffect - updating Document title')
    document.title = `Clicked ${count} times`
  }, [count])

  return (
    <div>

      <div>
        <label> Name: </label>
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <button onClick={() => setCount(count + 1)}> Clicked {count} times </button>

    </div>
  )
}

export default HookCounterTwo
