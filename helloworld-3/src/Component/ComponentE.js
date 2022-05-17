// Second middle level Component, C -> E -> F
// Consuming here using second approach called as contextType.
//-------------------------------------------------------------
import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContextAPI from './UserContextApi'

class ComponentE extends Component {

  static contextType = UserContextAPI

  render () {
    return (
      <div>
        <ComponentF />
        <h1> Using contextType {this.context} </h1>
      </div>
    )
  }
}

// Assigning imported UserContextAPI to contextType.
// If ur app supports Public Class view, then u can write this line above as static.
//-------------------------------------------------------------------------------------
/* ComponentE.contextType = UserContextAPI */
//---------------------------------------------------------------------------------------
// now context value will be available in (this.context)
//-----------------------------------------------------------------------------------------
export default ComponentE
