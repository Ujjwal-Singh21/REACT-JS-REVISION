import React, { Component } from 'react'

export class Counter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleIncrement = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1
      }
    },
    () => {
        console.log('Correct Count Value', this.state.count);
    })

    console.log('Late Count Value', this.state.count);
  }

  handleDecrement = () => {
    this.setState((prevCount) => {
      return {
        count: prevCount.count - 1
      }
    })
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  render () {
    return (
      <div>
          <h3> Count Value - {this.state.count} </h3>
        <button onClick={this.handleIncrement}> Increment </button>
        <button onClick={this.handleDecrement}> Decrement </button>
        <button onClick={this.handleReset}> Reset </button>
      </div>
    )
  }
}

export default Counter
