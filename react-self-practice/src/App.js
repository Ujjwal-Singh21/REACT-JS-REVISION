import './App.css'
import PostForm from './Components/Axios/PostForm'
import PostList from './Components/Axios/PostList'
import ConditionalRendering from './Components/ConditionalRendering/ConditionalRendering'
import CounterOne from './Components/CustomHooks/CounerDemo/CounterOne'
import CounterTwo from './Components/CustomHooks/CounerDemo/CounterTwo'
import DocTitleDemo from './Components/CustomHooks/DocTitleDemo'
import DocTitleOne from './Components/CustomHooks/DocTitleOne'
import DocTitleTwo from './Components/CustomHooks/DocTitleTwo'
import FormDemoOne from './Components/CustomHooks/UserFormDemo.js/FormDemoOne'
import FormDemoTwo from './Components/CustomHooks/UserFormDemo.js/FormDemoTwo'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary'
import Hero from './Components/ErrorBoundary/Hero'
import ClickCounter from './Components/HigherOrderComponent/ClickCounter'
import ClickCounterTwo from './Components/HigherOrderComponent/ClickCounterTwo'
import HoverCounter from './Components/HigherOrderComponent/HoverCounter'
import HoverCounterTwo from './Components/HigherOrderComponent/HoverCounterTwo'
import IndexListRendering from './Components/ListRenderings/IndexListRendering'
import ListRendering1 from './Components/ListRenderings/ListRendering1'
import ListRendering2 from './Components/ListRenderings/ListRendering2'
import ObjectListRendering from './Components/ListRenderings/ObjectListRendering'
import PortalDemo from './Components/Portals/PortalDemo'
import ParentOne from './Components/PureComponents/ClassCpmponents/ParentOne'
import ParentTwo from './Components/PureComponents/FunctionalComponents/ParentTwo'
import ParentForwardRef from './Components/Refs/ForwardRef/ParentForwardRef'
import ParentFocusInput from './Components/Refs/ParentFocusInput'
import RefDemo1 from './Components/Refs/RefDemo1'
import RefDemo2 from './Components/Refs/RefDemo2'
import RenderPropsClickCounter from './Components/RenderProps.js/RenderPropsClickCounter'
import RenderPropsCounter from './Components/RenderProps.js/RenderPropsCounter'
import RenderPropsHoverCounter from './Components/RenderProps.js/RenderPropsHoverCounter'
import Counter from './Components/SetState/Counter'
import ParentComponent from './Components/UseCallBackHook/ParentComponent'
import ClassCounter from './Components/UseEffectHook/ClassCounter'
import ClassCounter2 from './Components/UseEffectHook/ClassCounter2'
import ClassMouse from './Components/UseEffectHook/ClassMouse'
import DataFetching1 from './Components/UseEffectHook/DataFetchingWithUseEffect/DataFetching1'
import DataFetching2 from './Components/UseEffectHook/DataFetchingWithUseEffect/DataFetching2'
import DataFetching3 from './Components/UseEffectHook/DataFetchingWithUseEffect/DataFetching3'
import HookClassCounter from './Components/UseEffectHook/HookClassCounter'
import HookCounter from './Components/UseEffectHook/HookCounter'
import HookCounter2 from './Components/UseEffectHook/HookCounter2'
import HookMouse from './Components/UseEffectHook/HookMouse'
import IntervalClassCounter from './Components/UseEffectHook/IntervalClassCounter'
import MouseContainer from './Components/UseEffectHook/MouseContainer'
import MemoCounter from './Components/UseMemoHook/MemoCounter'
import UserDataFetching from './Components/UseReducerHook/DataFetching.js/UserDataFetching'
import UseReducer1 from './Components/UseReducerHook/UseReducer1'
import UseReducer2 from './Components/UseReducerHook/UseReducer2'
import UseReducer3 from './Components/UseReducerHook/UseReducer3'
import Parent from './Components/UseReducerHook/UseReducerWithUseContext/Parent'
import HookCounterWithoutRef from './Components/UseRefHook/HookCounterWithoutRef'
import HookCounterWithRef from './Components/UseRefHook/HookCounterWithRef'
import UseRefFocusInput from './Components/UseRefHook/UseRefFocusInput'
import UseStateWithArray from './Components/UseStateHook/UseStateWithArray'
import UseStateWithObject from './Components/UseStateHook/UseStateWithObject'

function App () {
  return (
    <div className='App'>
      {/* UseRef Hook Practice */}
      {/* <HookCounterWithRef /> */}
      {/* <HookCounterWithoutRef /> */}
      {/* <UseRefFocusInput /> */}

      {/* UseMemo Hook Practice */}
      {/* <MemoCounter /> */}

      {/* UseCallBack Practice */}
      {/* <ParentComponent /> */}

      {/* UseReducer with DataFetching */}
      {/* <UserDataFetching /> */}

      {/* UseReducer With UseContext Practice */}
      {/* <Parent /> */}

      {/* UseReducer Hook Practice */}
      {/* <UseReducer3 /> */}
      {/* <UseReducer2 /> */}
      {/* <UseReducer1 /> */}

      {/* Data Fetching with UseEffect Practice */}
      {/* <DataFetching3 /> */}
      {/* <DataFetching2 /> */}
      {/* <DataFetching1 /> */}

      {/* UseEffect Hook Practice */}
      {/* <HookClassCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounter2 /> */}
      {/* <ClassCounter2 /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}

      {/* UseState Hook Practice */}
      {/* <UseStateWithArray /> */}
      {/* <UseStateWithObject /> */}

      {/* React Http Practice */}
      {/* <PostForm /> */}
      {/* <PostList /> */}

      {/* Render props Practice */}
      {/* <RenderPropsCounter>
        {(count, handleClick) => {
          return (
            <RenderPropsClickCounter count={count} handleClick={handleClick} />
          )
        }}
      </RenderPropsCounter>

      <RenderPropsCounter>
        {(count, handleClick) => {
          return (
            <RenderPropsHoverCounter count={count} handleClick={handleClick} />
          )
        }}
      </RenderPropsCounter> */}

      {/* <RenderPropsCounter
        render={(count, handleClick) => {
          return (
            <RenderPropsClickCounter count={count} handleClick={handleClick} />
          )
        }}
      />

      <RenderPropsCounter
        render={(count, handleClick) => {
          return (
            <RenderPropsHoverCounter count={count} handleClick={handleClick} />
          )
        }}
      /> */}

      {/* HOC Practice */}
      {/* Without Hoc */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* With HOC  */}
      {/* <ClickCounterTwo name='Bruce Wayne' /> */}
      {/* <HoverCounterTwo /> */}

      {/* Error Boundary Practice */}
      {/* <ErrorBoundary>
        <Hero HeroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName='Joker' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName='IronMan' />
      </ErrorBoundary> */}

      {/* Portal Practice */}
      {/* <PortalDemo /> */}

      {/* React Refs Practice */}
      {/* <ParentForwardRef /> */}
      {/* <ParentFocusInput /> */}
      {/* <RefDemo2 /> */}
      {/* <RefDemo1 /> */}

      {/* Pure Component Practice */}
      {/* <ParentTwo /> */}
      {/* <ParentOne /> */}

      {/* List Rendering Practice */}
      {/* <IndexListRendering /> */}
      {/* <ObjectListRendering /> */}
      {/* <ListRendering2 /> */}
      {/* <ListRendering1 /> */}

      {/* Conditional Rendering Practice */}
      {/* <ConditionalRendering /> */}

      {/* SetState Practice */}
      {/* <Counter /> */}

      {/* CustomHooks Practice  */}
      {/* <FormDemoTwo /> */}
      {/* <FormDemoOne /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <DocTitleDemo /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
    </div>
  )
}

export default App
