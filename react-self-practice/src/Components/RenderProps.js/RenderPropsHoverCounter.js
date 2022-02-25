import React, { Component } from 'react'

export class RenderPropsHoverCounter extends Component {
  render () {
    const { count, handleClick } = this.props
    return (
      <div>
        <h3 onMouseOver={handleClick}> Hovered {count} times </h3>
      </div>
    )
  }
}

export default RenderPropsHoverCounter
