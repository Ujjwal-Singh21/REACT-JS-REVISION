import React, { useState } from 'react'

const initialState = {
  FirstName: '',
  LastName: ''
}

function UseStateWithObject () {
  const [name, setName] = useState(initialState)

  return (
    <div>

      <div>
        <label> First Name : </label>
        <input
          type='text'
          value={name.FirstName}
          onChange={e => setName({ ...name, FirstName : e.target.value})}
        />
      </div>

      <div>
        <label> Last Name : </label>
        <input
          type='text'
          value={name.LastName}
          onChange={e => setName({...name, LastName: e.target.value})}
        />
      </div>

      <div>
        <h3> Your First Name is : {name.FirstName} </h3>
        <h3> Your Last Name is : {name.LastName} </h3>
      </div>

    </div>
  )
}

export default UseStateWithObject
