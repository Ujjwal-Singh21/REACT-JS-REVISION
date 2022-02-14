import React, { useState, useEffect } from 'react'

function HookMouse () {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = event => {
    console.log('Mouse effect is executed')
    setX(event.clientX)
    setY(event.clientY)
  }

  useEffect(() => {
    console.log('UseEffect is executed')
    window.addEventListener('mousemove', logMousePosition)

    // clean-up code to cancel all subscriptions after unmounting the component
    return () => {
      console.log('clean-up code executing')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div>
      Hook Mouse : X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
