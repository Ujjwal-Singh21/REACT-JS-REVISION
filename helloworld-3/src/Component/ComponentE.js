// Second middle level Component, C -> E -> F
// consuming here using second approach called as contextType

import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContextAPI from './UserContextApi'

class ComponentE extends Component {
  static contextType = UserContextAPI

  render () {
    return (
      <div>
        <ComponentF />
        <h1>Using contextType {this.context}</h1>
      </div>
    )
  }
}
// assigning imported userContextApi to contextType
// if ur app supports Public Class view can write this line above as static
/* ComponentE.contextType = UserContextAPI */
// now context value will be available in (this.context)

export default ComponentE
