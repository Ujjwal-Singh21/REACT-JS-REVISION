import React, { Component } from 'react'

export class RenderPropsClickCounter extends Component {
  render () {
    const { count, handleClick } = this.props
    return (
      <div>
        <button onClick={handleClick}> Clicked {count} times </button>
      </div>
    )
  }
}

export default RenderPropsClickCounter
