// Third and final level Component, C -> E -> F
//------------------------------------------------
import React, { Component } from 'react'
import { UserConsumer } from './UserContextApi'

class ComponentF extends Component {
  render () {
    return (
           <UserConsumer>
             {
               (userName) => {
                 return <h1> {userName} </h1>
               }
             }
           </UserConsumer>
    )
  }
}

export default ComponentF
