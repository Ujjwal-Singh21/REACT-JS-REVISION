import React, { Component } from 'react'
import Input from './Input'

export class ParentFocusInput extends Component {
  constructor (props) {
    super(props)

    this.inputRef = React.createRef()
  }

  handleFocus = () => {
    this.inputRef.current.focusInput()
  }

  render () {
    return (
      <div>
        <Input ref={this.inputRef} />
        <button onClick={this.handleFocus}> Focus </button>
      </div>
    )
  }
}

export default ParentFocusInput
