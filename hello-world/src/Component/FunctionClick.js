import React from 'react'

const FunctionClick = () => {
  function clickHandler () {
    console.log('Button Clicked in Function')
  }
  return (
    <div>
      <button onClick={clickHandler}> Click Function </button>
    </div>
  )
}

export default FunctionClick
