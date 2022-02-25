import React, { Component } from 'react'

export class Input extends Component {
  constructor (props) {
    super(props)

    this.focusInputRef = React.createRef()
  }

  focusInput = () => {
    this.focusInputRef.current.focus()
  }

  render () {
    return (
      <div>
        <label> UserName : </label>
        <input type='text' ref={this.focusInputRef} />
      </div>
    )
  }
}

export default Input
