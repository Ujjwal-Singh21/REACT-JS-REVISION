import React, { useState, useEffect } from 'react'

function HookMouse () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = event => {
    setX(event.clientX)
    setY(event.clientY)
  }

  useEffect(() => {
    console.log('UseEffect executing')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
        console.log('Executing CleanUp Code');
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      <h3>
        HookMouse - X Value {x}, Y Value {y}
      </h3>
    </div>
  )
}

export default HookMouse
