import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Bruce'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('LifecycleA componentDidMount ')
  }

  //   adding update phase extra 3 methods
  shouldComponentUpdate (nextProps, nextState) {
    console.log('LifecycleA shouldComponentUpdate ')
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate ')
    return null
  }

  componentDidUpdate (prevprops, prevState, snapshot) {
    console.log('LifecycleA componentDidUpdate ')
  }

  // onclick handler method
  changeState = () => {
    this.setState({
      name: 'Clark'
    })
  }

  render () {
    console.log('LifecycleA render')
    return (
      <div>
        <h1> LifecyleA </h1>
        <button onClick={this.changeState}> Change State </button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
