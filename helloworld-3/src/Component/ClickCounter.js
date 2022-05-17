// normal without HOC
//--------------------
import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor () {
    super()
    
    this.state = {
      count: 0
    }
  }

  clickHandler = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render () {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.clickHandler}> Clicked {count} times </button>
      </div>
    )
  }
}

export default ClickCounter
