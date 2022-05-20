import { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentD () {

  const countContext = useContext(CountContext)

  // with destructure with alias name
  //-----------------------------------
  const { CountState: count, CountDispatch: dispatch } = countContext

  return (
    <div>
      <h3> Component D Count :  {count} </h3>
      <button onClick={() => dispatch('Increment')}> Increment </button>
      <button onClick={() => dispatch('Decrement')}> Decrement </button>
      <button onClick={() => dispatch('Reset')}> Reset </button>
    </div>
  )
}

export default ComponentD
