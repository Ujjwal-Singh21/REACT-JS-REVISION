// child functional component
// created as arrow function so that it can receive ref from parent
// and forward to particular input element directly.
// create React.forwardRef() and assign it to const
// pass whole arrow function as parameter to this forwardRef() method

// (step-1) in beginning
//-------------------------
// const FwdRef = () => {
//   return (
//     <div>
//       <input type='text' />
//     </div>
//   )
// }

// (step-2) How it looks after assigning it as 1st parameter to React.forwardRef()
//----------------------------------------------------------------------------------
import React from 'react'

const FwdRef = React.forwardRef((props,ref) => {
  return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  )
})

export default FwdRef
