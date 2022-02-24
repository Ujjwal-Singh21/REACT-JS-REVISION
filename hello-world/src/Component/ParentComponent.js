// passing a method as property(props) from parent to child component
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent (child_arg) {
    alert(`Hello ${this.state.parentName} from ${child_arg}`)
  }

  render () {
    return (
      <div>
        <ChildComponent clickHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
