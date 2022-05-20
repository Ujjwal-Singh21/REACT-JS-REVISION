import { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentA () {
  const countContext = useContext(CountContext)

  // without destructuring
  // const { CountState, CountDispatch } = countContext
  //----------------------------------------------------------

  return (
    <div>
      <h3> Component A Count : {countContext.CountState} </h3> 
      <button onClick={() => countContext.CountDispatch('Increment')}> Increment </button>
      <button onClick={() => countContext.CountDispatch('Decrement')}> Decrement </button>
      <button onClick={() => countContext.CountDispatch('Reset')}> Reset </button>
    </div>
  )
}

export default ComponentA
