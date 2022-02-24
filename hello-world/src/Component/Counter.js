// setState() practice
// incrementing value by 1 first, then by 5 using prevState

import React, { Component } from 'react'

class Counter extends Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  increment () {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log('Callback Value :', this.state.count)
    //   }
    // )
    // console.log(this.state.count)
    
    this.setState((prevState) => ({
      count: prevState.count + 1
    }),
    () => {
      console.log('Callback Value :', this.state.count);
    })
    console.log(this.state.count);
  }

  incrementFive () {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render () {
    return (
      <div>
        <h1> Counter - {this.state.count} </h1>
        {/* <button onClick={() => this.increment()}> Increment </button> */}
        <button onClick={() => this.incrementFive()}> Increment </button>
      </div>
    )
  }
}
export default Counter
