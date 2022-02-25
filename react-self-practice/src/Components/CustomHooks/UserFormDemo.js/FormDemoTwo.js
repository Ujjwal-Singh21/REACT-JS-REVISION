import React from 'react'
import useForm from './useForm'

function FormDemoTwo () {
  const [firstName, bindFirstName, resetFirstName] = useForm('')
  const [lastName, bindLastName, resetLastName] = useForm('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label> First Name : </label>
          <input type='text' {...bindFirstName} />
        </div>

        <div>
          <label> Last Name : </label>
          <input type='text' {...bindLastName} />
        </div>

        <button> Submit </button>
      </form>
    </div>
  )
}

export default FormDemoTwo
