import React, { Component } from 'react'

export class HoverCounter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1
      }
    })
  }

  render () {
    return (
      <div>
        <h2 onMouseOver={this.handleClick}> Hovered {this.state.count} times </h2>
      </div>
    )
  }
}

export default HoverCounter
