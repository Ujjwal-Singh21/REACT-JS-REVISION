import React from 'react'

function Title ({ myTitle }) {
  console.log('Rendering Title')
  return (
    <div>
      <h1> {myTitle}</h1>{' '}
    </div>
  )
}

export default React.memo(Title)
