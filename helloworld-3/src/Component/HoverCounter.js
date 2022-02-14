// normal without HOC
import React, { Component } from 'react'

class HoverCounter extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  hoverHandler = () => {
      this.setState(
          (prevState) => {
              return{
                  count: prevState.count + 1
              }
          }
      )
  }
  render () {
      const {count} = this.state
    return (
      <div>
        <h1 onMouseOver={this.hoverHandler}> Hovered {count} times </h1>
      </div>
    )
  }
}

export default HoverCounter
