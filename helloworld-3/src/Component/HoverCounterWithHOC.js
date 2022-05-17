// Updated with HOC
//------------------
import React, { Component } from 'react'
import withCounter from './withCounterHOC'

class HoverCounter1 extends Component {
  render () {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}> Hovered {count} times </h1>
      </div>
    )
  }
}

export default withCounter(HoverCounter1, 10)
