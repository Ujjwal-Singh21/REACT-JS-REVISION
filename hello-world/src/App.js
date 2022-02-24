import './App.css'
import Greet from './Component/Greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Greetings from './Component/PropsDemo'
import Message from './Component/Message'
import Counter from './Component/Counter'
import FunctionClick from './Component/FunctionClick'
import ClassClick from './Component/ClassClick'
import EventBind from './Component/EventBind'
import ParentComponent from './Component/ParentComponent'
import UserGreeting from './Component/UserGreeting'
import NameList from './Component/NameList'
import NameList2 from './Component/NameList2'
import NameList3 from './Component/NameList3'
import StyleSheet from './Component/StyleSheet'
import Inline from './Component/Inline'
import './appStyle.css'
import styles from './appStyle.module.css'

function App () {
  return (
    <div className='App'>
{/* 
      <h1 className='error'> regular style sheet ERROR </h1>
      <h1 className={styles.success}> Css Modules Success </h1> */}

      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <NameList3 /> */}
      {/* <NameList2 /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet /> */}
      {/* <Hello /> */}

      {/* Passing arguemnts/properties to a Class component */}
      {/* <Welcome name='Bruce' heroname='BatMan' />
      <Welcome name='Clarke' heroname='SuperMan' />
      <Welcome name='Diana' heroname='WonderWoman' /> */}
      

      {/* Passing arguements/properties to a function component */}   
      {/* <Greetings name='Bruce' heroname='BatMan' />
      <Greetings name='Clarke' heroname='SuperMan'>
        <button> Action </button>
      </Greetings>
      <Greetings name='Diana' heroname='WonderWoman' /> */}

      {/* Passing some dynamic unknown content to component */}
      {/* <Greetings>
        <p> This is Children props </p>
      </Greetings> */}
    </div>
  )
}

export default App
