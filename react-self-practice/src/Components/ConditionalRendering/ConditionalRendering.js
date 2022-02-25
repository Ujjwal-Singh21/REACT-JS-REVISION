import React, { Component } from 'react'

export class ConditionalRendering extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn

    // approach-1 (if-else)
    //-------------------------
    if (isLoggedIn) {
      return <h2> Welcome Ujjwal </h2>
    } else {
      return <h2> Welcome Guest </h2>
    }

    // approach-2 (Element Variables)
    //--------------------------------
    let message
    if (isLoggedIn) {
      message = <h3> Welcome Ujjwal </h3>
    } else {
      message = <h3> Welcome Guest </h3>
    }
    return message

    // approach-3 (Ternary Conditional Operator)
    //---------------------------------------------
    return isLoggedIn ? <h2> Welcome Ujjwal </h2> : <h2> Welcome Guest </h2>

    //approach-4 (Short Circuit Operator)
    //--------------------------------------
    return isLoggedIn && <h2> Welcome Ujjwal </h2>
  }
}

export default ConditionalRendering
