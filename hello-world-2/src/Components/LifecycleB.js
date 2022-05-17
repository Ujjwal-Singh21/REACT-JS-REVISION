import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Bruce'
    }
    console.log('Lifecycle B constructor')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('Lifecycle B getDerivedStateFromProps')
    return null
  }

  componentDidMount () {
    console.log('Lifecycle B componentDidMount ')
  }

  //   adding update phase extra 3 methods
  //----------------------------------------
  shouldComponentUpdate (nextProps, nextState) {
    console.log('Lifecycle B shouldComponentUpdate ')
    return true
  }

  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Lifecycle B getSnapshotBeforeUpdate ')
    return null
  }

  componentDidUpdate (prevprops, prevState, snapshot) {
    console.log('Lifecycle B componentDidUpdate ')
  }

  render () {
    console.log('Lifecycle B render')
    return <h1> Lifecycle B </h1>
  }
  
}

export default LifecycleB
