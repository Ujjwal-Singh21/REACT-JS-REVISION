import React, { Component } from 'react'
import withCounter from './withCounter'

export class ClickCounterTwo extends Component {
  render () {
    const { count, handleClick, name } = this.props
    console.log(this.props.name) // passed to withCounter at first
    return (
      <div>
          <h3> Name - {name} </h3>
        <button onClick={handleClick}> Clicked {count} times </button>
      </div>
    )
  }
}

export default withCounter(ClickCounterTwo, 5)
