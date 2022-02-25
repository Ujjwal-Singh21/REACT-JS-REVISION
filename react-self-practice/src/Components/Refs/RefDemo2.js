// CallBack Ref
import React, { Component } from 'react'

export class RefDemo2 extends Component {
  constructor (props) {
    super(props)

    this.cbRef = null
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount = () => {
    if (this.cbRef) {
      this.cbRef.focus()
    }
  }

  render () {
    return (
      <div>
        <label> UserName : </label>
        <input type='text' ref={this.setCbRef} />
      </div>
    )
  }
}

export default RefDemo2
