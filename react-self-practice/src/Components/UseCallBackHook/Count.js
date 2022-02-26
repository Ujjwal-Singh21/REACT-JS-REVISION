import React from 'react'

function Count ({ text, count }) {
  console.log('Rendering Count', text)
  return (
    <div>
      <h3> Count - {count} </h3>
    </div>
  )
}

export default React.memo(Count)
