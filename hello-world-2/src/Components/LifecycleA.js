import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Bruce'
    }
    console.log('Lifecycle A constructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Lifecycle A getDerivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('Lifecycle A componentDidMount ')
  }

  //   adding update phase extra 3 methods
  //----------------------------------------
  shouldComponentUpdate (nextProps, nextState) {
    console.log('Lifecycle A shouldComponentUpdate ')
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Lifecycle A getSnapshotBeforeUpdate ')
    return null
  }

  componentDidUpdate (prevprops, prevState, snapshot) {
    console.log('Lifecycle A componentDidUpdate ')
  }

  // onclick handler method
  //-----------------------
  changeState = () => {
    this.setState({
      name: 'Clark'
    })
  }

  render () {
    console.log('Lifecycle A render')
    return (
      <div>
        <h1> Lifecyle A </h1>
        <button onClick={this.changeState}> Change State </button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
