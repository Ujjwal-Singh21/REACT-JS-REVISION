import { useState } from 'react'

function useInput (initialValue) {
  // for handling firstName, lastName together
  const [value, setValue] = useState(initialValue)

  // extra feature just for resetting values to empty string
  const reset = () => {
    setValue(initialValue)
  }

  // syncing and onChange capturing both input element features together as an object
  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value)
    }
  }

  // passing all this to UserForm to use and minimise code
  return [value, bind, reset]
}

export default useInput
