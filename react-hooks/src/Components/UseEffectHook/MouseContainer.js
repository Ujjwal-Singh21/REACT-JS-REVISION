// Container function for HookMouse.js that has a toogle button which Unmounts the
// Containing <HookMouse /> component. But for cleanUp we need another function
// that we have written in HookMouse.js and return from inside first arg arrrow 
// function passed to useEffect() method.
//-------------------------------------------------------------------------------------
import { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer () {
  
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}> Toogle Display </button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer
