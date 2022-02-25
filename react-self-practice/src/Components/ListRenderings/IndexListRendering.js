import React from 'react'

function IndexListRendering () {
  const nameList = ['Bruce', 'Clarke', 'Diana', 'Stark']
  return (
    <div>
      {
         nameList.map((name, index) => <h2 key={index}> {index} {name} </h2>)
      }
    </div>
  )
}

export default IndexListRendering
