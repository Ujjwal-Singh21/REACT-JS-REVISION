import './App.css'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import ClickCounter1 from './Component/ClickCounterWithHOC'
import HoverCounter1 from './Component/HoverCounterWithHOC'
import User from './Component/User'
import ClickCounterTwo from './Component/ClickCounterTwo'
import HoverCounterTwo from './Component/HoverCounterTwo'
import Counter from './Component/Counter'
import ComponentC from './Component/ComponentC'
import { UserProvider } from './Component/UserContextApi'

function App () {
  return (
    <div className='App'>
      
      {/* ContextAPI */}
      {/* <UserProvider value='Vishwas'>
        <ComponentC />
      </UserProvider> */}

      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}

      {/* <User render = {(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'} /> */}

      {/* Updated with HOC, without code duplication */}
      {/* <ClickCounter1 name = 'Superman' /> */}
      {/* <HoverCounter1 /> */}

      {/* Normal without HOC, with code duplication */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter /> */}
    </div>
  )
}

export default App
