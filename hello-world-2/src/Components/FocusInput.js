// parent component handling input component and input element in that Child Component
import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
  constructor () {
    super()
    this.focusInputRef = React.createRef()
  }

  clickHandler = () => {
    this.focusInputRef.current.focusOnInput()
  }

  render () {
    return (
      <div>
        <h1> Parent Focus Input </h1>
        <Input ref={this.focusInputRef} />
        <button onClick={this.clickHandler}> Focus Input </button>
      </div>
    )
  }
}

export default FocusInput
