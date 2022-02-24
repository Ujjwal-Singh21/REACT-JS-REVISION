// child component having input element and method to focus on that i/p element

import React, { Component } from 'react'

class Input extends Component {
  constructor () {
    super()
    this.inputRef = React.createRef()
  }

  focusOnInput () {
    this.inputRef.current.focus()
  }

  render () {
    return (
      <div>
        <h2> Child Input </h2>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default Input
