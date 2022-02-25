import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounterTwo extends Component {
  render () {
    const { count, handleClick } = this.props
    return (
      <div>
        <h2 onMouseOver={handleClick}> Hovered {count} times </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounterTwo, 10)
