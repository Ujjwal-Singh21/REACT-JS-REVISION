import DataFetchingOne from './Components/UseReducerDataFetching/DataFetchingOne'
import DataFetchingTwo from './Components/UseReducerDataFetching/DataFetchingTwo'
import React, { useReducer } from 'react'
import ComponentA from './Components/UseReducerWithUseContext/ComponentA'
import ComponentB from './Components/UseReducerWithUseContext/ComponentB'
import ComponentC from './Components/UseReducerWithUseContext/ComponentC'
import Parent from './Check/Parent'
import ParentComponent from './Components/UseCallBackHook/ParentComponent'
import CounterOne from './Components/UseMemoHook/CounterOne'
import FocusInput from './Components/UseRefHook/FocusInput'
import ClassTimer from './Components/UseRefHook/ClassTimer'
// import HookTimerWithoutRef from './Components/UseRefHook/HookTimerWithoutRef'
import HookTimerWithRef from './Components/UseRefHook/HookTimerWithRef'

//Creatingvand Exporting CountContext
//-------------------------------------
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

//UseReducer with UseContext Hook
//---------------------------------
// function App () {

//   const [count, dispatch] = useReducer(reducer, initialState)

//   return (
//     <CountContext.Provider
//       value={{ CountState: count, CountDispatch: dispatch }}
//     >
//       <div className='App'>
//         <h1> ParentCount - {count} </h1>
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   )
// }

function App () {
  return (
    <div className='App'>
      <HookTimerWithRef />
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
}

export default App
