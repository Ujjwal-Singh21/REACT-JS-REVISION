import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()
const UserContextProvider = UserContext.Provider

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'Increment':
      return state + 1

    case 'Decrement':
      return state - 1

    case 'Reset':
      return initialState

    default:
      return state
  }
}

function Parent () {
  const [Count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <UserContextProvider value={{ Count: Count, dispatch: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </UserContextProvider>
    </div>
  )
}

export default Parent
