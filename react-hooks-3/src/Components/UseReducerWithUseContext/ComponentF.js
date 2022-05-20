import { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentF () {

  const countContext = useContext(CountContext)

  // with destructure without alias name
  //---------------------------------------
  const { CountState, CountDispatch } = countContext

  return (
    <div>
      <h3> Component F Count : {CountState} </h3>
      <button onClick={() => CountDispatch('Increment')}> Increment </button>
      <button onClick={() => CountDispatch('Decrement')}> Decrement </button>
      <button onClick={() => CountDispatch('Reset')}> Reset </button>
    </div>
  )
}

export default ComponentF
