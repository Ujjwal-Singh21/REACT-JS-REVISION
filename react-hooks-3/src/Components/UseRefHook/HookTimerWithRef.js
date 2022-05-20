// -> Rectifying the old error by using useRef() hook which contains 'interval' variable
// and makes it globally scoped.
// -> This hook can be used to create a generic container which can hold a mutable value
// similar to instance(State) property on class components.
//-----------------------------------------------------------------------------------------
// 1) This generic container does not cause re-renders when the mutable value/data
//    inside it changes.
// 2) At the same time it also remembers the stored data even after other state variables
//   cause a re-render in that particular component.
//------------------------------------------------------------------------------------------
import { useState, useEffect, useRef } from 'react'

function HookTimerWithRef () {

  const [timer, setTimer] = useState(0)

  const intervalRef = useRef()

  useEffect(() => {
     intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }

  }, [])
  
  return (
    <div>
      <h3> HookTimer Value : {timer} </h3>
      <button onClick={() => clearInterval(intervalRef.current)}> Clear Hook Timer </button>
    </div>
  )
}

export default HookTimerWithRef
