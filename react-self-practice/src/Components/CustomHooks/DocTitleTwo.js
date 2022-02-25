import React, { useState } from 'react'
import useDocument from './useDocumentTitle'

function DocTitleTwo () {
  const [count, setCount] = useState(0)
  useDocument(count)
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Clicked - {count}
      </button>
    </div>
  )
}

export default DocTitleTwo
