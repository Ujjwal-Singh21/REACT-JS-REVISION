import React from 'react'

function ListRendering1 () {
  const nameList = ['Bruce', 'Clarke', 'Diana', 'Stark']
  return (
    <div>
      {
           nameList.map(name => <h2 key={name}> {name} </h2>)
      }
    </div>
  )
}

export default ListRendering1
