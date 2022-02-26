import React, { useEffect, useRef } from 'react'

function UseRefFocusInput () {

  const focusInput = useRef(null)
  
  useEffect(() => {
    focusInput.current.focus()
  }, [])

  return (
    <div>
      <div>
        <label> User Input : </label>
        <input type='text' ref={focusInput} />
      </div>
    </div>
  )
}

export default UseRefFocusInput
