import React, { Component } from 'react'

class RegularComponent extends Component {
  render () {
    console.log('Regular Component Render')
    return (
      <div>
        <h2>Regular Component {this.props.name}</h2>
      </div>
    )
  }
}

export default RegularComponent
