// Updated with HOC
import React, { Component } from 'react'
import withCounter from './withCounterHOC'

class ClickCounter1 extends Component {
  render () {
    const { count, incrementCount } = this.props
    return (
      <div>
        {this.props.name} 
        <button onClick={incrementCount}> Clicked {count} times </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter1, 5)
