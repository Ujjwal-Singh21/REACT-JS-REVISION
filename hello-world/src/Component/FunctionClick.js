import React from 'react'

const FunctionClick = () => {

  const clickHandler = () => {
    console.log('Button Clicked in Function')
  }
  
  return (
    <div>
      <button onClick={clickHandler}> Click in Function </button>
    </div>
  )
}

export default FunctionClick
