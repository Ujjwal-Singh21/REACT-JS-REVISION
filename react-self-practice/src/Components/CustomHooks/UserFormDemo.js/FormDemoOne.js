import React, { useState } from 'react'

function FormDemoOne () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label> First Name : </label>
          <input
            type='text'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label> Last Name : </label>
          <input
            type='text'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <button> Submit Form </button>
      </form>
    </div>
  )
}

export default FormDemoOne
