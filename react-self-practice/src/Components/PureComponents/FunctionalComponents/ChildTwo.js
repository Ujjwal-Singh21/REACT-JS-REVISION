import React from 'react'

function ChildTwo () {
  console.log('Pure Fucntional Component Render')
    return (
      <div> Pure Fucntional Child Component </div>
    )
}

export default React.memo(ChildTwo)
