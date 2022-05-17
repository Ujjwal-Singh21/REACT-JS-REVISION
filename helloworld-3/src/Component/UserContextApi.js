// creating an UserContextAPI using createContext() method
//----------------------------------------------------------
import React from 'react'

const UserContextAPI = React.createContext('CodeEvolution') //default value

const UserConsumer = UserContextAPI.Consumer
const UserProvider = UserContextAPI.Provider

// using named export
//---------------------
export { UserConsumer, UserProvider }

// using default export for learning contexType approach
//-------------------------------------------------------
export default UserContextAPI
