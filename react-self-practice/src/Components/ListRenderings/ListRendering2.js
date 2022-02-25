import React from 'react'

function ListRendering2 () {
  const nameList = ['Bruce', 'Clarke', 'Diana', 'Stark']

  const newName = nameList.map(name => <h2 key={name}> {name} </h2>)

  return (
    <div>
      <strong> {newName} </strong>
    </div>
  )
}

export default ListRendering2
