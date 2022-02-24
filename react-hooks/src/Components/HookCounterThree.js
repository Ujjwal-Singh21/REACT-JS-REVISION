import React, { useState } from 'react'

function HookCounterThree () {
  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form>

      <input
        type='text'
        value={name.firstName}
        onChange={(event) => setName({ ...name, firstName: event.target.value })}
      />

      <input
        type='text'
        value={name.lastName}
        onChange={(event) => setName({ ...name, lastName: event.target.value })}
      />

      <h3>Your FirstName is : {name.firstName}</h3>
      <h3>Your LastName is : {name.lastName}</h3>
      {/* <h2>{JSON.stringify(name)}</h2> */}
    </form>
  )
}

export default HookCounterThree
