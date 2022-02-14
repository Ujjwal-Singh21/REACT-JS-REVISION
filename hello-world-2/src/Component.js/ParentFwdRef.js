// parent class component that directly access child class input element
// here in this.inputRef.current.focus() -> current refers to child class
// native input element which is going to receive ref fowarded from here
import React, { Component } from 'react'
import FwdRef from './FwdRef'

class ParentFwdRef extends Component {
  constructor () {
    super()
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

  render () {
    return (
      <div>
        <FwdRef ref={this.inputRef} />
        <button onClick={this.clickHandler}> Focus Input </button>
      </div>
    )
  }
}

export default ParentFwdRef
