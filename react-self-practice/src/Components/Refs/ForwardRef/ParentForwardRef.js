import React, { Component } from 'react'
import { ChildForwardRef } from './ChildForwardRef'

export class ParentForwardRef extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Name: 'Bruce Wayne'
    }

    this.inputRef = React.createRef()
  }

  handleFocus = () => {
    this.inputRef.current.focus()
  }

  render () {
    return (
      <div>
        <ChildForwardRef ref={this.inputRef} Name={this.state.Name} />
        <button onClick={this.handleFocus}> Focus Input </button>
      </div>
    )
  }
}

export default ParentForwardRef
