import './App.css'
import ComponentC from './Components/UseContextHook/ComponentC'
import { UserProvider, ChannelProvider } from './Components/UseContextHook/CreateContext'
import CounterOne from './Components/UseReducerHook/CounterOne'
import CounterThree from './Components/UseReducerHook/CounterThree'
import CounterTwo from './Components/UseReducerHook/CounterTwo'

function App () {
  return (
    <div className='App'>
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}

      {/* <UserProvider value={'Vishwas'}>
        <ChannelProvider value={'CodeEvolution'}>
          <ComponentC />
        </ChannelProvider>
      </UserProvider> */}

    </div>
  )
}

export default App
