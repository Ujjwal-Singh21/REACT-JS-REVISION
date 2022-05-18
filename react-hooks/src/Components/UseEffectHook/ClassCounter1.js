// class counter for comparison with HookCounter with useEffect()
//-----------------------------------------------------------------
import { Component } from 'react'

class ClassCounterOne extends Component {
  constructor () {
    super()
    
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate (prevProps, prevState) {
    document.title = `Clicked ${this.state.count} times`
  }
  
  render () {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Clicked {this.state.count} times
        </button>
      </div>
    )
  }
}

export default ClassCounterOne
