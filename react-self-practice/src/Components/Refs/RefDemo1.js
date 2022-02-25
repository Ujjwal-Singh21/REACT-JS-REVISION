// Normal Ref
import React, { Component } from 'react'

export class RefDemo1 extends Component {
  constructor (props) {
    super(props)

    this.userRef = React.createRef()
  }

  componentDidMount = () => {
    this.userRef.current.focus()
  }
  
  render () {
    return (
      <div>
        <label> UserName : </label>
        <input type='text' ref={this.userRef} />
      </div>
    )
  }
}

export default RefDemo1
