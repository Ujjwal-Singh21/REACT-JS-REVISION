import React, { useState, useEffect } from 'react'

function DocTitleDemo () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} Times`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Clicked {count} Times
      </button>
    </div>
  )
}

export default DocTitleDemo
