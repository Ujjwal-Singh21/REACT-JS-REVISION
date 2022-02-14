import DataFetchingOne from './Components/DataFetchingOne'
import DataFetchingTwo from './Components/DataFetchingTwo'
import React, { useReducer, useContext } from 'react'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'
import Parent from './Check/Parent'
import ParentComponent from './Components/UseCallBackHook/ParentComponent'
import CounterOne from './Components/UseMemoHook/CounterOne'
import FocusInput from './Components/UseRefHook/FocusInput'
import ClassTimer from './Components/UseRefHook/ClassTimer'
import HookTimerWithoutRef from './Components/UseRefHook/HookTimerWithoutRef'
import HookTimerWithRef from './Components/UseRefHook/HookTimerWithRef'

export const CountContext = React.createContext()

const initialState = 0

const reducer = (currentState, action) => {
  switch (action) {
    case 'Increment':
      return currentState + 1
    case 'Decrement':
      return currentState - 1
    case 'Reset':
      return initialState
    default:
      return currentState
  }
}

function App () {
  return (
    <div className='App'>
      {/* <HookTimerWithRef /> */}
      {/* <HookTimerWithoutRef /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <CounterOne /> */}
      {/* <ParentComponent /> */}
      {/* <Parent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
    </div>
  )

  // const [count, dispatch] = useReducer(reducer, initialState)
  // return (
  //   <CountContext.Provider value={{CountState: count, CountDispatch: dispatch}} >
  //     <div className='App'>
  //       ParentCount - {count}
  //       <ComponentA />
  //       <ComponentB />
  //       <ComponentC />
  //     </div>
  //   </CountContext.Provider>
  // )
}

export default App
