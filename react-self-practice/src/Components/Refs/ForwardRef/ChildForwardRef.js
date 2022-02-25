import React from 'react'

export const ChildForwardRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <label> User Input : </label>
      <input type='text' readOnly value={props.Name} ref={ref} />
    </div>
  )
})
