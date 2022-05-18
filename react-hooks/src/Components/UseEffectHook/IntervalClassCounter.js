// Counter using class component and its lifecycle methods.
// Later used for comparison with same logic in functional component.
//----------------------------------------------------------------------
import { Component } from 'react'

class IntervalClassCounter extends Component {
  constructor () {
    super()

    this.state = {
      count: 0
    }
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  //creating interval timer inside componentDidMount because it executes only once
  //---------------------------------------------------------------------------------
  componentDidMount () {
    this.interval = setInterval(this.tick, 1000)
  }

  // destroying timer after unmounting it from DOM
  //------------------------------------------------
  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    
    const { count } = this.state

    return (
      <div>
        <h1> {count} </h1>
      </div>
    )
  }
}

export default IntervalClassCounter
