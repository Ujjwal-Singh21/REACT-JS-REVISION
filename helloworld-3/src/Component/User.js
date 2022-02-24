// class to understand basic of render props pattern
import React, { Component } from 'react'

class User extends Component {
    
  render () {
    console.log(this.props.render)
    return (
      <div>
        <h1>{this.props.render(true)}</h1>
      </div>
    )
  }
}

export default User
