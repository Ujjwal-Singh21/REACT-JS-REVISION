import React, { Component } from 'react'
import Employee from './Employee'
import { UserProvider } from './Context'

class Parent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      empID: 101
    }

    // this.changeId = this.changeId.bind(this)
  }

  increment = () => {
    this.setState({
        empID: this.state.empID + 1
    })
  }

  render () {
    return (
      <UserProvider value={this.state.empID}>
        <div>
          <h1>Welcome to Parent class</h1>
          <h5>Employee ID : {this.state.empID} </h5>
          <Employee />
        </div>
        <button type='button' onClick={this.increment}>
          Change
        </button>
      </UserProvider>
    )
  }
}

export default Parent
