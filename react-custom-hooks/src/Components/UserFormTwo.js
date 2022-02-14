// with a custom hook, basic code here and functionality code like state management
// for firstName, lastName, passing value and event capturing handler are available in
// custom hook file 'useInput' which is returned from there and receieved here simply
// using Array Destructuring feature

import React from 'react'
import useInput from './useInput'

function UserFormTwo () {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (event) => {
    event.preventDefault()
    alert(` Hello Mr. ${firstName} ${lastName} `)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <div>
          <label> FirstName : </label>
          <input {...bindFirstName} type='text'/>
        </div>

        <div>
          <label> LastName : </label>
          <input {...bindLastName} type= 'text'/>
        </div>

        <button type='submit'> Submit </button>

      </form>
    </div>
  )
}

export default UserFormTwo
