// state and event handlers practice

import React, { Component } from 'react'

class Message extends Component {
  constructor () {
    super()
    this.state = {
      message: 'Welcome User Please Subsribe'
    }
  }
  changeMessage () {
    this.setState({
      message: 'Thank You for Subscribing '
    })
  }
  render () {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}> Subscribe </button>
      </div>
    )
  }
}

export default Message
