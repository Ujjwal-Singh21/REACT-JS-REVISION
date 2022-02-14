// without a custom hook all code and functionality together
import React, { useState } from 'react'

function UserForm () {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const submitHandler = (event) => {
      event.preventDefault()
      alert(` Hello Mr. ${firstName} ${lastName} `)

  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <div>
          <label> FirstName : </label>
          <input value={firstName} onChange = {(e) => setFirstName(e.target.value)} />
        </div>

        <div>
          <label> LastName : </label>
          <input value={lastName} onChange = {(e) => setLastName(e.target.value)} />
        </div>

        <button type='submit'> Submit </button>

      </form>
    </div>
  )
}

export default UserForm
