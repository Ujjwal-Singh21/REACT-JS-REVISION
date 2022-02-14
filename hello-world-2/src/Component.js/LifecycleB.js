import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Bruce'
    }
    console.log('LifecycleB constructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('LifecycleB componentDidMount ')
  }

  //   adding update phase extra 3 methods
  shouldComponentUpdate (nextProps, nextState) {
    console.log('LifecycleB shouldComponentUpdate ')
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('LifecycleB getSnapshotBeforeUpdate ')
    return null
  }

  componentDidUpdate (prevprops, prevState, snapshot) {
    console.log('LifecycleB componentDidUpdate ')
  }

  render () {
    console.log('LifecycleB render')
    return <h1> LifecycleB </h1>
  }
  
}

export default LifecycleB
