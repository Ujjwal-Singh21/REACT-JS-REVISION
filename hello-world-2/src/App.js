import './App.css'
import Form from './Component.js/Form'
import LifecycleA from './Component.js/LifecycleA'
import FragmentDemo from './Component.js/FragmentDemo'
import Table from './Component.js/Table'
import PureComp from './Component.js/PureComp'
import ParentComponent from './Component.js/ParentComponent'
import RefsDemo from './Component.js/RefsDemo'
import FocusInput from './Component.js/FocusInput'
import ParentFwdRef from './Component.js/ParentFwdRef'
import PortalDemo from './Component.js/PortalDemo'
import Hero from './Component.js/Hero'
import ErrorBoundary from './Component.js/ErrorBoundary'

function App () {
  return (
    <div className='App'>

      <ErrorBoundary>
        <Hero heroName='SuperMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='BatMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary>

      {/* <PortalDemo /> */}
      {/* <ParentFwdRef /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComponent /> */}
      {/* <PureComp /> */}
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
    </div>
  )
}

export default App
