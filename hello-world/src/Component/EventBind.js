// 4 different ways to bind event handlers in React
import React, { Component } from 'react'

class EventBind extends Component {
  constructor () {
    super()
    this.state = {
      message: 'Hello'
    }

    // this.clickHandler = this.clickHandler.bind(this)
  }

  //   clickHandler () {
  //     this.setState({
  //       message: 'Good Bye'
  //     })
  //     console.log(this)
  //   }

  clickHandler = () => {
    this.setState({
      message: 'Good Bye'
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>
        
        {/* approach-1
                <button onClick={this.clickHandler.bind(this)}> Click </button> */}

        {/* approach-2
        <button onClick={() => this.clickHandler()}> Click </button> */}

        {/* approach-3
        <button onClick={this.clickHandler}> Click </button> */}

        {/* approach-4 */}
        <button onClick={this.clickHandler}> Click </button>
        
      </div>
    )
  }
}

export default EventBind
