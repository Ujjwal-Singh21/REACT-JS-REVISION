import './App.css'
import Form from './Components/Form'
import LifecycleA from './Components/LifecycleA'
import FragmentDemo from './Components/FragmentDemo'
import Table from './Components/Table'
import PureComp from './Components/PureComp'
import ParentComponent from './Components/ParentComponent'
import RefsDemo from './Components/RefsDemo'
import FocusInput from './Components/FocusInput'
import ParentFwdRef from './Components/ParentFwdRef'
import PortalDemo from './Components/PortalDemo'
import Hero from './Components/Hero'
import ErrorBoundary from './Components/ErrorBoundary'

function App () {
  return (
    <div className='App'>

      {/* <ErrorBoundary>
        <Hero heroName='SuperMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='BatMan' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <ParentFwdRef /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComponent /> */}
      {/* <PureComp /> */}
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
      <LifecycleA />
      {/* <Form /> */}
    </div>
  )
}

export default App
