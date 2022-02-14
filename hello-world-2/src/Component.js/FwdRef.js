// child functional component
// created as arrow function so that it can receive ref from parent
// and fwd to particular input element directly
// create React.forwardRef() and assign it to const
// pass whole arrow function as parameter to this forwardRef() method

// (step-1) in beginning
//-------------------------
// const FwdRef = () => {
//   return (
//     <div>
//       <input type='text' ></input>
//     </div>
//   )
// }

// (step-2) after assigning it as 1st parameter to React.forwardRef()
//-----------------------------------------------------------------------
import React from 'react'

const FwdRef = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type='text' ref={ref}></input>
    </div>
  )
})

export default FwdRef
