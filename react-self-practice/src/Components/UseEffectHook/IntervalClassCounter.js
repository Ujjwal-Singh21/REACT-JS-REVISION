import React, { Component } from 'react'

class IntervalClassCounter extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  tick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  componentDidMount = () => {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render () {
    const count = this.state.count
    return (
      <div>
        <h3> {count} </h3>
      </div>
    )
  }
}

export default IntervalClassCounter
